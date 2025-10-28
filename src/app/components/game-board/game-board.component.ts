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
  gridTiles: (GameTile | null)[] = new Array(16).fill(null);
  availableTiles: GameTile[] = [];
  currentPuzzle: Puzzle | null = null;
  loading = true;
  error: string | null = null;
  
  // Define which spots are disabled (center 4 spots in 4x4 grid)
  // Grid positions: 0-3 (row 1), 4-7 (row 2), 8-11 (row 3), 12-15 (row 4)
  // Center spots: 5, 6, 9, 10
  disabledSpots = new Set([5, 6, 9, 10]);
  
  // Track completed lines (green and locked)
  completedLines = new Set<string>();
  
  // Track which category is assigned to each completed line
  lineCategories = new Map<string, string>();
  
  
  // Define the possible lines (top, bottom, left, right)
  lines = {
    top: [0, 1, 2, 3],
    bottom: [12, 13, 14, 15],
    left: [0, 4, 8, 12],
    right: [3, 7, 11, 15]
  };
  
  // Map lines to their corresponding center indicator squares
  centerIndicators = {
    top: 6,      // Top Right center
    right: 10,   // Bottom Right center  
    bottom: 9,   // Bottom Left center
    left: 5      // Top Left center
  };

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
        words: [],
        categories: []
      };
      this.availableTiles = [];
      this.gridTiles = new Array(16).fill(null);
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
          this.gridTiles = new Array(16).fill(null);
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
    // Don't allow drops on disabled spots
    if (this.isSpotDisabled(cellIndex)) {
      return;
    }
    
    // Don't allow drops on completed lines
    if (this.isCellInCompletedLine(cellIndex)) {
      return;
    }

    if (event.previousContainer === event.container) {
      // Moving within the same container - do nothing for grid cells
      return;
    } else {
      // Moving between containers
      if (event.previousContainer.id === 'bank-list') {
        // Move from bank to grid cell
        const tile = event.previousContainer.data[event.previousIndex] as GameTile;
        
        // If cell is occupied, swap tiles
        if (this.gridTiles[cellIndex] !== null) {
          const existingTile = this.gridTiles[cellIndex]!;
          this.availableTiles.splice(event.previousIndex, 1, existingTile);
          this.gridTiles[cellIndex] = tile;
        } else {
          // Cell is empty, just move tile
          this.gridTiles[cellIndex] = tile;
          this.availableTiles.splice(event.previousIndex, 1);
        }
      } else if (event.previousContainer.id.startsWith('grid-cell-')) {
        // Move from one grid cell to another
        const fromIndex = parseInt(event.previousContainer.id.split('-')[2]);
        const movingTile = this.gridTiles[fromIndex];
        
        if (movingTile) {
          // If destination cell is occupied, swap tiles
          if (this.gridTiles[cellIndex] !== null) {
            const destinationTile = this.gridTiles[cellIndex]!;
            this.gridTiles[fromIndex] = destinationTile;
            this.gridTiles[cellIndex] = movingTile;
          } else {
            // Destination is empty, just move
            this.gridTiles[cellIndex] = movingTile;
            this.gridTiles[fromIndex] = null;
          }
        }
      }
    }
    
    this.checkForCompletedLines();
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
    // Only include enabled grid cells (not the center 4 spots)
    const gridCells = Array.from({length: 16}, (_, i) => `grid-cell-${i}`)
      .filter(cellId => {
        const index = parseInt(cellId.split('-')[2]);
        return !this.disabledSpots.has(index);
      });
    return ['bank-list', ...gridCells];
  }
  
  // Helper method to check if a grid spot is disabled
  isSpotDisabled(index: number): boolean {
    return this.disabledSpots.has(index);
  }
  
  // Check if a cell is in a completed line
  isCellInCompletedLine(index: number): boolean {
    return Object.entries(this.lines).some(([lineName, positions]) => 
      positions.includes(index) && this.completedLines.has(lineName)
    );
  }
  
  // Check if a cell should be highlighted as part of a completed line
  isCellCompleted(index: number): boolean {
    return this.isCellInCompletedLine(index);
  }
  
  // Check for completed lines after each move
  checkForCompletedLines() {
    if (!this.currentPuzzle || !this.currentPuzzle.categories) return;
    
    Object.entries(this.lines).forEach(([lineName, positions]) => {
      // Skip if line is already completed
      if (this.completedLines.has(lineName)) return;
      
      // Check if all positions in this line are filled
      const lineWords = positions
        .map(pos => this.gridTiles[pos]?.word)
        .filter((word): word is string => Boolean(word));
      
      if (lineWords.length === 4) {
        // Check if these 4 words match any category
        const matchingCategory = this.currentPuzzle!.categories.find(category => 
          this.arraysEqual(lineWords.sort(), category.words.sort())
        );
        
        if (matchingCategory) {
          // Mark line as completed
          this.completedLines.add(lineName);
          this.lineCategories.set(lineName, matchingCategory.name);
          console.log(`Completed line ${lineName} with category: ${matchingCategory.name}`);
        } else {
          // Return tiles to available tiles
          this.returnLineToBank(positions);
        }
      }
    });
  }
  
  // Return tiles from a line back to the bank
  returnLineToBank(positions: number[]) {
    positions.forEach(pos => {
      const tile = this.gridTiles[pos];
      if (tile) {
        this.availableTiles.push(tile);
        this.gridTiles[pos] = null;
      }
    });
  }
  
  // Helper method to compare arrays
  arraysEqual(a: string[], b: string[]): boolean {
    return a.length === b.length && a.every((val, i) => val === b[i]);
  }
  
  // Get category name for a center indicator square
  getCenterIndicatorCategory(index: number): string {
    const lineName = Object.entries(this.centerIndicators)
      .find(([line, centerIndex]) => centerIndex === index)?.[0];
    
    if (lineName && this.completedLines.has(lineName)) {
      return this.lineCategories.get(lineName) || '';
    }
    return '';
  }
  
  // Get arrow direction for a center indicator square
  getCenterIndicatorArrow(index: number): string {
    const lineName = Object.entries(this.centerIndicators)
      .find(([line, centerIndex]) => centerIndex === index)?.[0];
    
    switch (lineName) {
      case 'top': return '↑';
      case 'right': return '→';
      case 'bottom': return '↓';
      case 'left': return '←';
      default: return '';
    }
  }
  
  // Check if a center square should show an indicator
  isCenterIndicatorActive(index: number): boolean {
    const lineName = Object.entries(this.centerIndicators)
      .find(([line, centerIndex]) => centerIndex === index)?.[0];
    
    return lineName ? this.completedLines.has(lineName) : false;
  }
  
}
