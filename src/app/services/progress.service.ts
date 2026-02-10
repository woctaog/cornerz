import { Injectable } from '@angular/core';

export interface DailyPuzzleSnapshot {
  puzzleId: number;
  gridWords: (string | null)[];
}

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private readonly dailyCompletionsKey = 'cornerz-daily-completions';
  private readonly puzzleCompletionsKey = 'cornerz-puzzle-completions';
  private readonly dailySnapshotsKey = 'cornerz-daily-snapshots';

  private getTodayKey(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private safeParse<T>(raw: string | null, fallback: T): T {
    if (!raw) return fallback;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return fallback;
    }
  }

  private getDailyCompletions(): Record<string, number> {
    return this.safeParse(localStorage.getItem(this.dailyCompletionsKey), {});
  }

  private getPuzzleCompletions(): Record<string, number> {
    return this.safeParse(localStorage.getItem(this.puzzleCompletionsKey), {});
  }

  private getDailySnapshots(): Record<string, DailyPuzzleSnapshot> {
    return this.safeParse(localStorage.getItem(this.dailySnapshotsKey), {});
  }

  isDailyCompleted(puzzleId: number): boolean {
    const completions = this.getDailyCompletions();
    return completions[this.getTodayKey()] === puzzleId;
  }

  markDailyCompleted(puzzleId: number): void {
    const completions = this.getDailyCompletions();
    completions[this.getTodayKey()] = puzzleId;
    localStorage.setItem(this.dailyCompletionsKey, JSON.stringify(completions));
  }

  saveTodayDailySnapshot(puzzleId: number, gridWords: (string | null)[]): void {
    const snapshots = this.getDailySnapshots();
    snapshots[this.getTodayKey()] = {
      puzzleId,
      gridWords: gridWords.slice(0, 16)
    };
    localStorage.setItem(this.dailySnapshotsKey, JSON.stringify(snapshots));
  }

  getTodayDailySnapshot(puzzleId: number): DailyPuzzleSnapshot | null {
    const snapshots = this.getDailySnapshots();
    const snapshot = snapshots[this.getTodayKey()];
    if (!snapshot || snapshot.puzzleId !== puzzleId) {
      return null;
    }

    if (!Array.isArray(snapshot.gridWords) || snapshot.gridWords.length !== 16) {
      return null;
    }

    return snapshot;
  }

  markPuzzleCompleted(puzzleId: number): void {
    const completions = this.getPuzzleCompletions();
    completions[String(puzzleId)] = Date.now();
    localStorage.setItem(this.puzzleCompletionsKey, JSON.stringify(completions));
  }

  isPuzzleCompleted(puzzleId: number): boolean {
    const completions = this.getPuzzleCompletions();
    return Number.isFinite(completions[String(puzzleId)]);
  }
}
