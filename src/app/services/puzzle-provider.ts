import { Observable } from 'rxjs';
import { Puzzle, PuzzleSummary } from '../models/puzzle.model';

/**
 * Abstract puzzle data provider.
 * Swap implementations via Angular DI to switch between static JSON and a remote API.
 */
export abstract class PuzzleProvider {
  abstract getDailyPuzzle(): Observable<Puzzle>;
  abstract getPuzzleById(id: number): Observable<Puzzle | null>;
  abstract getLibrary(): Observable<PuzzleSummary[]>;
}
