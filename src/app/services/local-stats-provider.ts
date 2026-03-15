import { Injectable } from '@angular/core';
import { StatsProvider } from './stats-provider';
import { PuzzleResult, PlayerStats } from '../models/stats.model';

@Injectable()
export class LocalStatsProvider extends StatsProvider {
  private readonly storageKey = 'cornerz-stats-v1';

  private load(): Record<number, PuzzleResult> {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) return {};
    try {
      return JSON.parse(raw) as Record<number, PuzzleResult>;
    } catch {
      return {};
    }
  }

  private save(data: Record<number, PuzzleResult>): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  /** Convert an ISO datetime string to a local YYYY-MM-DD string for streak math. */
  private toLocalDateStr(isoString: string): string {
    const d = new Date(isoString);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  private todayLocalStr(): string {
    return this.toLocalDateStr(new Date().toISOString());
  }

  recordResult(result: PuzzleResult): void {
    const data = this.load();
    // Only update if not already recorded, or if the new result has fewer mistakes
    const existing = data[result.puzzleId];
    if (!existing || result.mistakes < existing.mistakes) {
      data[result.puzzleId] = result;
      this.save(data);
    }
  }

  getResult(puzzleId: number): PuzzleResult | null {
    return this.load()[puzzleId] ?? null;
  }

  getAllResults(): PuzzleResult[] {
    return Object.values(this.load());
  }

  getAggregate(): PlayerStats {
    const results = this.getAllResults();

    if (results.length === 0) {
      return { totalSolved: 0, currentStreak: 0, maxStreak: 0, averageMistakes: 0, mistakeDistribution: {} };
    }

    // Mistake distribution
    const mistakeDistribution: Record<number, number> = {};
    let totalMistakes = 0;
    for (const r of results) {
      totalMistakes += r.mistakes;
      mistakeDistribution[r.mistakes] = (mistakeDistribution[r.mistakes] ?? 0) + 1;
    }

    const { current, max } = this.computeStreak(results);

    return {
      totalSolved: results.length,
      currentStreak: current,
      maxStreak: max,
      averageMistakes: totalMistakes / results.length,
      mistakeDistribution,
    };
  }

  private computeStreak(results: PuzzleResult[]): { current: number; max: number } {
    // Collect unique local dates where a daily puzzle was completed
    const dailyDates = new Set<string>(
      results.filter(r => r.isDaily).map(r => this.toLocalDateStr(r.completedAt))
    );

    if (dailyDates.size === 0) return { current: 0, max: 0 };

    // --- Current streak ---
    // Start from today; if today isn't done, start from yesterday
    // (streak persists until tomorrow as long as yesterday was completed)
    const today = this.todayLocalStr();
    const yesterday = this.offsetDay(today, -1);
    const startDate = dailyDates.has(today) ? today : yesterday;

    let current = 0;
    let cursor = startDate;
    while (dailyDates.has(cursor)) {
      current++;
      cursor = this.offsetDay(cursor, -1);
    }

    // --- Max streak ---
    const sortedDates = [...dailyDates].sort(); // ascending
    let max = 0;
    let streak = 0;
    let prev: string | null = null;

    for (const dateStr of sortedDates) {
      if (prev === null || this.offsetDay(prev, 1) === dateStr) {
        streak++;
      } else {
        streak = 1;
      }
      if (streak > max) max = streak;
      prev = dateStr;
    }

    return { current, max };
  }

  /** Return a YYYY-MM-DD string offset by `days` from the given date string. */
  private offsetDay(dateStr: string, days: number): string {
    const d = new Date(dateStr + 'T12:00:00'); // noon avoids DST edge cases
    d.setDate(d.getDate() + days);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }
}
