import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export interface Category {
  id: number;
  name: string;
  difficulty: number; // 1=Yellow(easy), 2=Green, 3=Blue, 4=Purple(hard)
  words: string[];
}

export interface GridLayout {
  corners: {
    topLeft: string;
    topRight: string;
    bottomLeft: string;
    bottomRight: string;
  };
  edges: {
    top: string[];
    right: string[];
    bottom: string[];
    left: string[];
  };
}

export interface Puzzle {
  id: number;
  title: string;
  description: string;
  words: string[];
  categories: Category[];
  grid?: GridLayout; // Optional, calculated automatically
}

export interface PuzzleData {
  puzzles: Puzzle[];
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly launchDate = new Date(2026, 1, 9); // February 9, 2026 (local time)
  private puzzles$?: Observable<PuzzleData>;

  constructor(private http: HttpClient) { }

  loadPuzzles(): Observable<PuzzleData> {
    if (!this.puzzles$) {
      this.puzzles$ = this.http.get<PuzzleData>('assets/puzzles.json').pipe(shareReplay(1));
    }
    return this.puzzles$;
  }

  getPuzzleById(id: number): Observable<Puzzle | null> {
    return this.loadPuzzles().pipe(
      map(data => data.puzzles.find(puzzle => puzzle.id === id) || null)
    );
  }

  getAvailablePuzzles(): Observable<Puzzle[]> {
    return this.loadPuzzles().pipe(
      map(data => data.puzzles)
    );
  }

  getDailyPuzzle(today: Date = new Date()): Observable<Puzzle> {
    return this.getAvailablePuzzles().pipe(
      map(puzzles => {
        const candidates = puzzles.filter(puzzle => puzzle.id > 0 && puzzle.words.length > 0);
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

  // Calculate grid layout from categories
  calculateGridLayout(puzzle: Puzzle): GridLayout {
    if (puzzle.categories.length !== 4) {
      throw new Error('Puzzle must have exactly 4 categories for corner layout');
    }

    // Find corner words (words that appear in exactly 2 categories)
    const wordCounts = new Map<string, Category[]>();
    puzzle.categories.forEach(category => {
      category.words.forEach(word => {
        if (!wordCounts.has(word)) {
          wordCounts.set(word, []);
        }
        wordCounts.get(word)!.push(category);
      });
    });

    // Find corners (words appearing in exactly 2 categories)
    const corners: string[] = [];
    const edges: string[] = [];
    
    wordCounts.forEach((categories, word) => {
      if (categories.length === 2) {
        corners.push(word);
      } else if (categories.length === 1) {
        edges.push(word);
      }
    });

    // For now, return a basic layout - this can be enhanced based on category order
    return {
      corners: {
        topLeft: corners[0] || '',
        topRight: corners[1] || '',
        bottomLeft: corners[2] || '',
        bottomRight: corners[3] || ''
      },
      edges: {
        top: edges.slice(0, 2),
        right: edges.slice(2, 4),
        bottom: edges.slice(4, 6),
        left: edges.slice(6, 8)
      }
    };
  }
}
