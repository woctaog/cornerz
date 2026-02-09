import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService, Puzzle } from '../../services/game.service';
import { ProgressService } from '../../services/progress.service';

type DifficultyFilter = 'all' | 'easy' | 'medium' | 'hard';
type CompletionFilter = 'all' | 'completed' | 'incomplete';

interface LibraryPuzzle extends Puzzle {
  uiDifficulty: Exclude<DifficultyFilter, 'all'>;
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
    private gameService: GameService,
    private progressService: ProgressService
  ) {}

  ngOnInit(): void {
    this.gameService.getAvailablePuzzles().subscribe({
      next: (puzzles) => {
        const playable = puzzles.filter((p) => p.id > 0 && p.words.length > 0);
        this.puzzles = playable.map((puzzle) => ({
          ...puzzle,
          uiDifficulty: this.getPuzzleDifficulty(puzzle),
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
      const difficultyMatch = this.difficultyFilter === 'all' || puzzle.uiDifficulty === this.difficultyFilter;
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

  private getPuzzleDifficulty(puzzle: Puzzle): Exclude<DifficultyFilter, 'all'> {
    const maxCategoryDifficulty = Math.max(...puzzle.categories.map((c) => c.difficulty));
    if (maxCategoryDifficulty <= 2) return 'easy';
    if (maxCategoryDifficulty === 3) return 'medium';
    return 'hard';
  }
}

