import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private readonly dailyCompletionsKey = 'cornerz-daily-completions';
  private readonly puzzleCompletionsKey = 'cornerz-puzzle-completions';

  private getTodayKey(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private safeParse(raw: string | null): Record<string, number> {
    if (!raw) return {};
    try {
      return JSON.parse(raw) as Record<string, number>;
    } catch {
      return {};
    }
  }

  private getDailyCompletions(): Record<string, number> {
    return this.safeParse(localStorage.getItem(this.dailyCompletionsKey));
  }

  private getPuzzleCompletions(): Record<string, number> {
    return this.safeParse(localStorage.getItem(this.puzzleCompletionsKey));
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

