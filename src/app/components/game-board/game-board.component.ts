import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { GameService, Puzzle } from '../../services/game.service';

export interface GameTile {
  id: number;
  word: string;
}

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  gridTiles: (GameTile | null)[] = new Array(9).fill(null);
  availableTiles: GameTile[] = [];
  currentPuzzle: Puzzle | null = null;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService
  ) { }

  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const puzzleId = params['puzzle'] ? parseInt(params['puzzle']) : 1;
      this.loadPuzzle(puzzleId);
    });
  }

  loadPuzzle(puzzleId: number, updateUrl: boolean = false): void {
    this.loading = true;
    this.error = null;
    
    // Update URL if called from button click
    if (updateUrl) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { puzzle: puzzleId },
        queryParamsHandling: 'merge'
      });
    }
    
    // Handle puzzles 2 and 3 as coming soon
    if (puzzleId === 2 || puzzleId === 3) {
      this.currentPuzzle = {
        id: puzzleId,
        title: `Puzzle ${puzzleId}`,
        description: 'Coming Soon!',
        words: []
      };
      this.availableTiles = [];
      this.gridTiles = new Array(9).fill(null);
      this.loading = false;
      return;
    }
    
    this.gameService.getPuzzleById(puzzleId).subscribe({
      next: (puzzle) => {
        if (puzzle) {
          this.currentPuzzle = puzzle;
          // Shuffle the words to hide the puzzle structure
          const shuffledWords = this.shuffleArray(puzzle.words);
          this.availableTiles = shuffledWords.map((word, index) => ({
            id: index + 1,
            word: word
          }));
          this.gridTiles = new Array(9).fill(null);
        } else {
          this.error = `Puzzle ${puzzleId} not found. Available puzzles: 1`;
          this.loadPuzzle(1);
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load puzzle data';
        this.loading = false;
      }
    });
  }

  dropOnCell(event: CdkDragDrop<any>, cellIndex: number) {
    if (event.previousContainer === event.container) {
      return;
    }

    if (event.previousContainer.id === 'bank-list') {
      if (this.gridTiles[cellIndex] === null) {
        const tile = event.previousContainer.data[event.previousIndex] as GameTile;
        this.gridTiles[cellIndex] = tile;
        this.availableTiles.splice(event.previousIndex, 1);
      }
    } else if (event.previousContainer.id.startsWith('grid-cell-')) {
      const fromIndex = parseInt(event.previousContainer.id.split('-')[2]);
      if (this.gridTiles[cellIndex] === null) {
        const tile = this.gridTiles[fromIndex];
        this.gridTiles[cellIndex] = tile;
        this.gridTiles[fromIndex] = null;
      }
    }
  }

  dropToBank(event: CdkDragDrop<any>) {
    if (event.previousContainer !== event.container) {
      if (event.previousContainer.id.startsWith('grid-cell-')) {
        const gridIndex = parseInt(event.previousContainer.id.split('-')[2]);
        const tile = this.gridTiles[gridIndex] as GameTile;
        if (tile) {
          this.availableTiles.push(tile);
          this.gridTiles[gridIndex] = null;
        }
      }
    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  getConnectedDropLists(): string[] {
    const gridCells = Array.from({length: 9}, (_, i) => `grid-cell-${i}`);
    return ['bank-list', ...gridCells];
  }
}
