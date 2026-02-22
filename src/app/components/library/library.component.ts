import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PuzzleSummary } from '../../models/puzzle.model';
import { PuzzleProvider } from '../../services/puzzle-provider';
import { ProgressService } from '../../services/progress.service';

type DifficultyFilter = 'all' | 'easy' | 'medium' | 'hard';
type CompletionFilter = 'all' | 'completed' | 'incomplete';

interface LibraryPuzzle extends PuzzleSummary {
  completed: boolean;
}

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  puzzles: LibraryPuzzle[] = [];
  loading = true;
  error: string | null = null;

  difficultyFilter: DifficultyFilter = 'all';
  completionFilter: CompletionFilter = 'all';

  constructor(
    private router: Router,
    private puzzleProvider: PuzzleProvider,
    private progressService: ProgressService
  ) {}

  ngOnInit(): void {
    this.puzzleProvider.getLibrary().subscribe({
      next: (puzzles) => {
        this.puzzles = puzzles.map((puzzle) => ({
          ...puzzle,
          completed: this.progressService.isPuzzleCompleted(puzzle.id)
        }));
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load puzzle archive';
        this.loading = false;
      }
    });
  }

  get filteredPuzzles(): LibraryPuzzle[] {
    return this.puzzles.filter((puzzle) => {
      const difficultyMatch = this.difficultyFilter === 'all' || puzzle.difficulty === this.difficultyFilter;
      const completionMatch =
        this.completionFilter === 'all' ||
        (this.completionFilter === 'completed' && puzzle.completed) ||
        (this.completionFilter === 'incomplete' && !puzzle.completed);

      return difficultyMatch && completionMatch;
    });
  }

  playPuzzle(puzzleId: number): void {
    this.router.navigate(['/'], { queryParams: { puzzle: puzzleId } });
  }

  goToDaily(): void {
    this.router.navigate(['/']);
  }
}

