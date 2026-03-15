import { PuzzleResult, PlayerStats } from '../models/stats.model';

/**
 * Abstract stats provider.
 * Swap implementations via Angular DI to switch between localStorage and a remote API.
 */
export abstract class StatsProvider {
  abstract recordResult(result: PuzzleResult): void;
  abstract getResult(puzzleId: number): PuzzleResult | null;
  abstract getAllResults(): PuzzleResult[];
  abstract getAggregate(): PlayerStats;
}
