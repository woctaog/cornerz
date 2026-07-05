import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Puzzle, PuzzleSummary } from '../models/puzzle.model';
import { PuzzleProvider } from './puzzle-provider';
import { PUZZLE_START_DATE } from '../constants/daily.constants';

/**
 * On-disk puzzle entry: either a plaintext Puzzle (dev/test entries, id <= 0)
 * or an encrypted blob produced by tools/encrypt-puzzles.js.
 *
 * Encryption scheme (kept in sync with tools/puzzle-crypto.js):
 *   key  = PBKDF2(password: releaseDate "YYYY-MM-DD", salt: "cornerz-<id>",
 *                 100k iterations, SHA-256) -> AES-256-GCM
 *   data = AES-GCM ciphertext with the 16-byte auth tag appended
 *          (the Web Crypto API's native AES-GCM format)
 */
interface StoredPuzzleEntry extends Partial<Puzzle> {
  id: number;
  releaseDate?: string;
  iv?: string;
  ciphertext?: string;
}

interface StoredPuzzleData {
  puzzles: StoredPuzzleEntry[];
}

const PBKDF2_ITERATIONS = 100000;
const SALT_PREFIX = 'cornerz-';

@Injectable()
export class StaticPuzzleProvider extends PuzzleProvider {
  private entries$?: Observable<StoredPuzzleEntry[]>;
  private decrypted = new Map<number, Promise<Puzzle>>();

  constructor(private http: HttpClient) {
    super();
  }

  private loadEntries(): Observable<StoredPuzzleEntry[]> {
    if (!this.entries$) {
      this.entries$ = this.http.get<StoredPuzzleData>('assets/puzzles.json').pipe(
        map(data => data.puzzles),
        shareReplay(1)
      );
    }
    return this.entries$;
  }

  /** Decrypt (or pass through) an entry, caching so crypto runs once per puzzle per session. */
  private resolvePuzzle(entry: StoredPuzzleEntry): Promise<Puzzle> {
    let pending = this.decrypted.get(entry.id);
    if (!pending) {
      pending = this.decryptEntry(entry);
      this.decrypted.set(entry.id, pending);
    }
    return pending;
  }

  private async decryptEntry(entry: StoredPuzzleEntry): Promise<Puzzle> {
    if (!entry.ciphertext || !entry.iv || !entry.releaseDate) {
      return entry as Puzzle; // plaintext dev/test entry
    }

    const encoder = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
      'raw', encoder.encode(entry.releaseDate), 'PBKDF2', false, ['deriveKey']
    );
    const key = await crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: encoder.encode(SALT_PREFIX + entry.id),
        iterations: PBKDF2_ITERATIONS,
        hash: 'SHA-256'
      },
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['decrypt']
    );

    const plaintext = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: this.base64ToBytes(entry.iv) },
      key,
      this.base64ToBytes(entry.ciphertext)
    );
    return JSON.parse(new TextDecoder().decode(plaintext)) as Puzzle;
  }

  private base64ToBytes(base64: string): Uint8Array {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  /** Encrypted entries are always playable; plaintext ones must have words. */
  private isPlayable(entry: StoredPuzzleEntry): boolean {
    return entry.ciphertext ? true : (entry.words?.length ?? 0) > 0;
  }

  private releaseDateForId(id: number): Date {
    return new Date(
      PUZZLE_START_DATE.getFullYear(),
      PUZZLE_START_DATE.getMonth(),
      PUZZLE_START_DATE.getDate() + (id - 1)
    );
  }

  getDailyPuzzle(today: Date = new Date()): Observable<Puzzle> {
    return this.loadEntries().pipe(
      map(entries => entries.filter(e => e.id > 0 && this.isPlayable(e))),
      map(candidates => {
        if (candidates.length === 0) {
          throw new Error('No daily puzzle candidates available');
        }

        const dayMs = 24 * 60 * 60 * 1000;
        const startMidnight = new Date(
          PUZZLE_START_DATE.getFullYear(),
          PUZZLE_START_DATE.getMonth(),
          PUZZLE_START_DATE.getDate()
        );
        const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const daysSinceStart = Math.max(0, Math.floor((todayMidnight.getTime() - startMidnight.getTime()) / dayMs));
        const puzzleId = daysSinceStart + 1;

        return candidates.find(p => p.id === puzzleId) ?? candidates[candidates.length - 1];
      }),
      switchMap(entry => from(this.resolvePuzzle(entry)))
    );
  }

  getPuzzleById(id: number): Observable<Puzzle | null> {
    return this.loadEntries().pipe(
      switchMap(entries => {
        const entry = entries.find(e => e.id === id);
        return entry ? from(this.resolvePuzzle(entry)) : of(null);
      })
    );
  }

  getLibrary(today: Date = new Date()): Observable<PuzzleSummary[]> {
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return this.loadEntries().pipe(
      map(entries => entries
        .filter(e => e.id > 0 && this.isPlayable(e))
        .map(entry => ({ entry, date: this.releaseDateForId(entry.id) }))
        .filter(item => item.date <= todayMidnight)
      ),
      switchMap(items => items.length === 0
        ? of([] as PuzzleSummary[])
        : from(Promise.all(items.map(async ({ entry, date }) => {
            const puzzle = await this.resolvePuzzle(entry);
            return {
              id: puzzle.id,
              title: puzzle.title,
              description: puzzle.description,
              difficulty: puzzle.difficulty ?? this.computeFallbackDifficulty(puzzle),
              date
            };
          })))
      ),
      map(summaries => summaries.sort((a, b) => b.id - a.id))
    );
  }

  private computeFallbackDifficulty(puzzle: Puzzle): number {
    const maxCategoryDifficulty = Math.max(...puzzle.categories.map(c => c.difficulty));
    if (maxCategoryDifficulty <= 2) return 1;
    if (maxCategoryDifficulty === 3) return 2;
    return 3;
  }
}
