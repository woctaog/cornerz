import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Puzzle, PuzzleData, PuzzleSummary } from '../models/puzzle.model';
import { PuzzleProvider } from './puzzle-provider';

@Injectable()
export class StaticPuzzleProvider extends PuzzleProvider {
  private readonly launchDate = new Date(2026, 1, 9); // February 9, 2026 (local time)
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
        const launchMidnight = new Date(this.launchDate.getFullYear(), this.launchDate.getMonth(), this.launchDate.getDate());
        const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const daysSinceLaunch = Math.max(0, Math.floor((todayMidnight.getTime() - launchMidnight.getTime()) / dayMs));
        const index = daysSinceLaunch % candidates.length;
        return candidates[index];
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
        difficulty: this.computePuzzleDifficulty(puzzle)
      })))
    );
  }

  private computePuzzleDifficulty(puzzle: Puzzle): 'easy' | 'medium' | 'hard' {
    const maxDifficulty = Math.max(...puzzle.categories.map(c => c.difficulty));
    if (maxDifficulty <= 2) return 'easy';
    if (maxDifficulty === 3) return 'medium';
    return 'hard';
  }
}
