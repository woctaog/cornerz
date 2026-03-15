import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Puzzle, PuzzleData, PuzzleSummary } from '../models/puzzle.model';
import { PuzzleProvider } from './puzzle-provider';
import { PUZZLE_START_DATE } from '../constants/daily.constants';

@Injectable()
export class StaticPuzzleProvider extends PuzzleProvider {
  private puzzles$?: Observable<PuzzleData>;

  constructor(private http: HttpClient) {
    super();
  }

  private loadPuzzles(): Observable<PuzzleData> {
    if (!this.puzzles$) {
      this.puzzles$ = this.http.get<PuzzleData>('assets/puzzles.json').pipe(shareReplay(1));
    }
    return this.puzzles$;
  }

  private getPlayablePuzzles(): Observable<Puzzle[]> {
    return this.loadPuzzles().pipe(
      map(data => data.puzzles.filter(p => p.id > 0 && p.words.length > 0))
    );
  }

  getDailyPuzzle(today: Date = new Date()): Observable<Puzzle> {
    return this.getPlayablePuzzles().pipe(
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
      })
    );
  }

  getPuzzleById(id: number): Observable<Puzzle | null> {
    return this.loadPuzzles().pipe(
      map(data => data.puzzles.find(puzzle => puzzle.id === id) || null)
    );
  }

  getLibrary(): Observable<PuzzleSummary[]> {
    return this.getPlayablePuzzles().pipe(
      map(puzzles => puzzles.map(puzzle => ({
        id: puzzle.id,
        title: puzzle.title,
        description: puzzle.description,
        difficulty: puzzle.difficulty ?? this.computeFallbackDifficulty(puzzle)
      })))
    );
  }

  private computeFallbackDifficulty(puzzle: Puzzle): number {
    const maxCategoryDifficulty = Math.max(...puzzle.categories.map(c => c.difficulty));
    if (maxCategoryDifficulty <= 2) return 1;
    if (maxCategoryDifficulty === 3) return 2;
    return 3;
  }
}
