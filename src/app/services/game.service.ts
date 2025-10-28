import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Category {
  id: number;
  name: string;
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

  constructor(private http: HttpClient) { }

  loadPuzzles(): Observable<PuzzleData> {
    return this.http.get<PuzzleData>('./assets/puzzles.json');
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
