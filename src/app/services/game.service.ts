import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Puzzle {
  id: number;
  title: string;
  description: string;
  words: string[];
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
    return this.http.get<PuzzleData>('/assets/puzzles.json');
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
}
