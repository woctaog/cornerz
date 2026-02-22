export interface Category {
  id: number;
  name: string;
  difficulty: number; // 1=Yellow(easy), 2=Green, 3=Blue, 4=Purple(hard)
  words: string[];
  solution?: string; // HTML string explaining the category theme and word connections
}

export const DIFFICULTY_LABELS: Record<number, string> = {
  1: 'Easy', 2: 'Medium', 3: 'Hard', 4: 'Hardest'
};

export const DIFFICULTY_COLORS: Record<number, string> = {
  1: '#F9A825', 2: '#2E7D32', 3: '#1565C0', 4: '#6A1B9A'
};

export interface Puzzle {
  id: number;
  title: string;
  description: string;
  words: string[];
  categories: Category[];
}

export interface PuzzleSummary {
  id: number;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface PuzzleData {
  puzzles: Puzzle[];
}
