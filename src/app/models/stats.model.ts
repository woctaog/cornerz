export interface PuzzleResult {
  puzzleId: number;
  completedAt: string;      // ISO datetime string (UTC)
  mistakes: number;
  gameSequence: number[];   // interleaved play log: 0=mistake, 1-4=difficulty
  completionOrder: number[]; // difficulty of each completed line, in order
  isDaily: boolean;
}

export interface PlayerStats {
  totalSolved: number;
  currentStreak: number;
  maxStreak: number;
  averageMistakes: number;
  mistakeDistribution: Record<number, number>; // mistake count → game count
}
