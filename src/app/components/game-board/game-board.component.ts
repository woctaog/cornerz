import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, CdkDragStart, CdkDragEnd, moveItemInArray } from '@angular/cdk/drag-drop';
import { GameService, Puzzle } from '../../services/game.service';
import { ProgressService } from '../../services/progress.service';

export interface GameTile {
  id: number;
  word: string;
}

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit, OnDestroy {
  gridTiles: (GameTile | null)[] = new Array(16).fill(null);
  availableTiles: GameTile[] = [];
  currentPuzzle: Puzzle | null = null;
  loading = true;
  error: string | null = null;

  // Define which spots are disabled (center 4 spots in 4x4 grid)
  disabledSpots = new Set([5, 6, 9, 10]);

  // Track completed lines (green and locked)
  completedLines = new Set<string>();

  // Track which category is assigned to each completed line
  lineCategories = new Map<string, string>();
  lineDifficulties = new Map<string, number>();

  // Animation state: cells currently playing an animation
  bouncingCells = new Set<number>();
  shakingCells = new Set<number>();

  // Drag state: true while a tile is being dragged
  isDragging = false;
  isResolvingInvalidLine = false;

  // Tap-to-place: currently selected tile source
  selectedTile: { source: 'bank'; index: number } | { source: 'grid'; index: number } | null = null;

  // Scoring
  mistakes: number = 0;
  gameWon: boolean = false;
  keepBoardVisibleAfterWin = false;
  isHelpOpen: boolean = false;
  isDailyPuzzleMode = false;
  dailyPuzzleId: number | null = null;
  isDailyLocked = false;
  dailyCountdown = '';
  private countdownTimer: ReturnType<typeof setInterval> | null = null;

  // Define the possible lines (top, bottom, left, right)
  lines: Record<string, number[]> = {
    top: [0, 1, 2, 3],
    bottom: [12, 13, 14, 15],
    left: [0, 4, 8, 12],
    right: [3, 7, 11, 15]
  };

  // Map lines to their corresponding center indicator squares
  centerIndicators: Record<string, number> = {
    top: 6,
    right: 10,
    bottom: 9,
    left: 5
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
    private progressService: ProgressService
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
    this.startDailyCountdown();

    const testMode = this.route.snapshot.data['testMode'];
    if (testMode) {
      this.isDailyPuzzleMode = false;
      this.loadPuzzle(-1);
    } else {
      this.route.queryParams.subscribe(params => {
        const puzzleParam = params['puzzle'];
        if (puzzleParam) {
          this.isDailyPuzzleMode = false;
          this.dailyPuzzleId = null;
          const puzzleId = parseInt(puzzleParam, 10);
          this.loadPuzzle(puzzleId);
        } else {
          this.loadDailyPuzzle();
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
      this.countdownTimer = null;
    }
  }

  private loadDailyPuzzle(): void {
    this.isDailyPuzzleMode = true;
    this.gameService.getDailyPuzzle().subscribe({
      next: (puzzle) => {
        this.dailyPuzzleId = puzzle.id;
        this.loadPuzzle(puzzle.id);
      },
      error: () => {
        this.error = 'Failed to load daily puzzle';
        this.loading = false;
      }
    });
  }

  loadPuzzle(puzzleId: number, updateUrl: boolean = false): void {
    this.loading = true;
    this.error = null;
    this.selectedTile = null;
    this.gameWon = false;
    this.keepBoardVisibleAfterWin = false;
    this.mistakes = 0;
    this.isDailyLocked = false;

    if (updateUrl) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { puzzle: puzzleId },
        queryParamsHandling: 'merge'
      });
    }

    this.gameService.getPuzzleById(puzzleId).subscribe({
      next: (puzzle) => {
        if (puzzle) {
          this.currentPuzzle = puzzle;
          const shuffledWords = this.shuffleArray(puzzle.words);
          this.availableTiles = shuffledWords.map((word, index) => ({
            id: index + 1,
            word: word
          }));
          this.gridTiles = new Array(16).fill(null);
          this.completedLines = new Set<string>();
          this.lineCategories = new Map<string, string>();
          this.lineDifficulties = new Map<string, number>();

          if (puzzleId === -1 && this.route.snapshot.data['testMode']) {
            this.prePopulateTestPuzzle();
          }
          this.updateDailyLockState();
          this.restoreLockedDailyBoardState();
        } else {
          this.error = `Puzzle ${puzzleId} not found. Available puzzles: 1`;
          this.loadPuzzle(1);
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load puzzle data';
        this.loading = false;
      }
    });
  }

  private prePopulateTestPuzzle(): void {
    // Place tiles for completed Top and Left lines
    const placements: [number, string][] = [
      [0, 'COUNTERPRODUCTIVE'],  // Top + Left corner
      [1, 'BAMBOOZLE'],          // Top
      [2, 'HI'],                 // Top
      [3, 'GO'],                 // Top + Right corner (only Top done)
      [4, 'PERPENDICULAR'],      // Left
      [8, 'ME'],                 // Left
      [12, 'EXTRAORDINARY'],     // Left + Bottom corner (only Left done)
    ];

    for (const [cellIndex, word] of placements) {
      const tileIndex = this.availableTiles.findIndex(t => t.word === word);
      if (tileIndex !== -1) {
        this.gridTiles[cellIndex] = this.availableTiles[tileIndex];
        this.availableTiles.splice(tileIndex, 1);
      }
    }

    // Mark Top and Left as completed
    this.completedLines.add('top');
    this.completedLines.add('left');

    // Set category info for completed lines
    const topCategory = this.currentPuzzle!.categories.find(c =>
      this.arraysEqual([...c.words].sort(), ['COUNTERPRODUCTIVE', 'BAMBOOZLE', 'HI', 'GO'].sort())
    );
    const leftCategory = this.currentPuzzle!.categories.find(c =>
      this.arraysEqual([...c.words].sort(), ['COUNTERPRODUCTIVE', 'PERPENDICULAR', 'ME', 'EXTRAORDINARY'].sort())
    );

    if (topCategory) {
      this.lineCategories.set('top', topCategory.name);
      this.lineDifficulties.set('top', topCategory.difficulty);
    }
    if (leftCategory) {
      this.lineCategories.set('left', leftCategory.name);
      this.lineDifficulties.set('left', leftCategory.difficulty);
    }
  }

  // --- Drag-and-drop handlers ---

  onDragStarted(_event: CdkDragStart) {
    this.isDragging = true;
    this.selectedTile = null;
  }

  onDragEnded(_event: CdkDragEnd) {
    this.isDragging = false;
  }

  dropOnCell(event: CdkDragDrop<any>, cellIndex: number) {
    if (this.isDailyLocked) return;
    if (this.isResolvingInvalidLine) return;
    if (this.isSpotDisabled(cellIndex) || this.isCornerLocked(cellIndex)) {
      return;
    }

    if (event.previousContainer === event.container) {
      return;
    }

    if (event.previousContainer.id === 'bank-list') {
      if (this.isCellInCompletedLine(cellIndex)) {
        return;
      }
      const tile = event.previousContainer.data[event.previousIndex] as GameTile;

      if (this.gridTiles[cellIndex] !== null) {
        const existingTile = this.gridTiles[cellIndex]!;
        this.availableTiles.splice(event.previousIndex, 1, existingTile);
        this.gridTiles[cellIndex] = tile;
      } else {
        this.gridTiles[cellIndex] = tile;
        this.availableTiles.splice(event.previousIndex, 1);
      }
    } else if (event.previousContainer.id.startsWith('grid-cell-')) {
      const fromIndex = parseInt(event.previousContainer.id.split('-')[2]);
      if (!this.canMoveBetweenCells(fromIndex, cellIndex)) {
        return;
      }
      const movingTile = this.gridTiles[fromIndex];

      if (movingTile) {
        if (this.gridTiles[cellIndex] !== null) {
          const destinationTile = this.gridTiles[cellIndex]!;
          this.gridTiles[fromIndex] = destinationTile;
          this.gridTiles[cellIndex] = movingTile;
        } else {
          this.gridTiles[cellIndex] = movingTile;
          this.gridTiles[fromIndex] = null;
        }
      }
    }

    this.playBounce(cellIndex);
    this.checkForCompletedLines();
  }

  dropToBank(event: CdkDragDrop<any>) {
    if (this.isDailyLocked) return;
    if (this.isResolvingInvalidLine) return;
    if (event.previousContainer !== event.container) {
      if (event.previousContainer.id.startsWith('grid-cell-')) {
        const gridIndex = parseInt(event.previousContainer.id.split('-')[2]);
        if (this.isCellInCompletedLine(gridIndex)) {
          return;
        }
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

  // --- Tap-to-place handlers ---

  onBankTileClick(index: number) {
    if (this.isDailyLocked) return;
    if (this.isDragging || this.isResolvingInvalidLine) return;

    if (this.selectedTile?.source === 'bank' && this.selectedTile.index === index) {
      this.selectedTile = null;
      return;
    }

    this.selectedTile = { source: 'bank', index };
  }

  onGridCellClick(cellIndex: number) {
    if (this.isDailyLocked) return;
    if (this.isDragging || this.isResolvingInvalidLine || this.isSpotDisabled(cellIndex) || this.isCornerLocked(cellIndex)) {
      return;
    }

    if (this.selectedTile) {
      // Place or swap the selected tile into this cell
      if (this.selectedTile.source === 'bank') {
        if (this.isCellInCompletedLine(cellIndex)) {
          this.selectedTile = null;
          return;
        }
        const tile = this.availableTiles[this.selectedTile.index];
        if (this.gridTiles[cellIndex] !== null) {
          const existingTile = this.gridTiles[cellIndex]!;
          this.availableTiles.splice(this.selectedTile.index, 1, existingTile);
        } else {
          this.availableTiles.splice(this.selectedTile.index, 1);
        }
        this.gridTiles[cellIndex] = tile;
      } else if (this.selectedTile.source === 'grid') {
        const fromIndex = this.selectedTile.index;
        if (fromIndex === cellIndex) {
          this.selectedTile = null;
          return;
        }
        if (!this.canMoveBetweenCells(fromIndex, cellIndex)) {
          this.selectedTile = null;
          return;
        }
        const movingTile = this.gridTiles[fromIndex];
        if (movingTile) {
          this.gridTiles[fromIndex] = this.gridTiles[cellIndex];
          this.gridTiles[cellIndex] = movingTile;
        }
      }

      this.selectedTile = null;
      this.playBounce(cellIndex);
      this.checkForCompletedLines();
    } else if (this.gridTiles[cellIndex] !== null) {
      // Select this grid tile
      this.selectedTile = { source: 'grid', index: cellIndex };
    }
  }

  onBankClick() {
    if (this.isDailyLocked) return;
    if (this.isDragging || this.isResolvingInvalidLine) return;

    // If a grid tile is selected, return it to the bank
    if (this.selectedTile?.source === 'grid') {
      const gridIndex = this.selectedTile.index;
      if (this.isCellInCompletedLine(gridIndex)) {
        this.selectedTile = null;
        return;
      }
      const tile = this.gridTiles[gridIndex];
      if (tile) {
        this.availableTiles.push(tile);
        this.gridTiles[gridIndex] = null;
      }
      this.selectedTile = null;
    }
  }

  // --- Selection state helpers ---

  isBankTileSelected(index: number): boolean {
    return this.selectedTile?.source === 'bank' && this.selectedTile.index === index;
  }

  isGridCellSelected(cellIndex: number): boolean {
    return this.selectedTile?.source === 'grid' && this.selectedTile.index === cellIndex;
  }

  isGridTileDraggable(cellIndex: number): boolean {
    return !this.isDailyLocked && !this.isCornerLocked(cellIndex) && !this.isResolvingInvalidLine;
  }

  isValidDropTarget(cellIndex: number): boolean {
    if (this.isDailyLocked || this.isSpotDisabled(cellIndex) || this.isCornerLocked(cellIndex) || this.isResolvingInvalidLine) {
      return false;
    }
    // Show targets when dragging OR when a tile is selected
    return this.isDragging || this.selectedTile !== null;
  }

  // --- Animation helpers ---

  private playBounce(cellIndex: number) {
    this.bouncingCells.add(cellIndex);
    setTimeout(() => this.bouncingCells.delete(cellIndex), 300);
  }

  private playShake(positions: number[]) {
    positions.forEach(pos => this.shakingCells.add(pos));
    setTimeout(() => {
      positions.forEach(pos => this.shakingCells.delete(pos));
    }, 400);
  }

  isBouncing(cellIndex: number): boolean {
    return this.bouncingCells.has(cellIndex);
  }

  isShaking(cellIndex: number): boolean {
    return this.shakingCells.has(cellIndex);
  }

  // --- Connected drop lists ---

  getConnectedDropLists(): string[] {
    const gridCells = Array.from({ length: 16 }, (_, i) => `grid-cell-${i}`)
      .filter(cellId => {
        const index = parseInt(cellId.split('-')[2]);
        return !this.disabledSpots.has(index);
      });
    return ['bank-list', ...gridCells];
  }

  // --- Grid state helpers ---

  isSpotDisabled(index: number): boolean {
    return this.disabledSpots.has(index);
  }

  isCellInCompletedLine(index: number): boolean {
    return Object.entries(this.lines).some(([lineName, positions]) =>
      positions.includes(index) && this.completedLines.has(lineName)
    );
  }

  isCellCompleted(index: number): boolean {
    return this.isCellInCompletedLine(index);
  }

  // --- Locking / movement rules ---

  private getCompletedLinesForCell(index: number): string[] {
    return Object.entries(this.lines)
      .filter(([lineName, positions]) => positions.includes(index) && this.completedLines.has(lineName))
      .map(([lineName]) => lineName);
  }

  private isCornerCell(index: number): boolean {
    return index === 0 || index === 3 || index === 12 || index === 15;
  }

  isCornerLocked(index: number): boolean {
    if (!this.isCornerCell(index)) return false;
    const completedLinesForCell = this.getCompletedLinesForCell(index);
    return completedLinesForCell.length === 2;
  }

  canMoveBetweenCells(fromIndex: number, toIndex: number): boolean {
    if (this.isCornerLocked(fromIndex) || this.isCornerLocked(toIndex)) return false;

    const fromCompleted = this.getCompletedLinesForCell(fromIndex);
    const toCompleted = this.getCompletedLinesForCell(toIndex);

    if (fromCompleted.length === 0 && toCompleted.length === 0) {
      return true;
    }

    return fromCompleted.some(lineName => toCompleted.includes(lineName));
  }

  // --- Line checking ---

  checkForCompletedLines() {
    if (this.isDailyLocked) return;
    if (this.isResolvingInvalidLine) return;
    if (!this.currentPuzzle || !this.currentPuzzle.categories) return;

    Object.entries(this.lines).forEach(([lineName, positions]) => {
      if (this.completedLines.has(lineName)) return;

      const lineWords = positions
        .map(pos => this.gridTiles[pos]?.word)
        .filter((word): word is string => Boolean(word));

      if (lineWords.length === 4) {
        const matchingCategory = this.currentPuzzle!.categories.find(category =>
          this.arraysEqual([...lineWords].sort(), [...category.words].sort())
        );

        if (matchingCategory) {
          this.completedLines.add(lineName);
          this.lineCategories.set(lineName, matchingCategory.name);
          this.lineDifficulties.set(lineName, matchingCategory.difficulty);
          this.checkWinCondition();
        } else {
          this.mistakes++;
          this.isResolvingInvalidLine = true;
          this.playShake(positions);
          setTimeout(() => {
            this.returnLineToBank(positions);
            this.isResolvingInvalidLine = false;
          }, 500);
        }
      }
    });
  }

  returnLineToBank(positions: number[]) {
    positions.forEach(pos => {
      if (this.isCellInCompletedLine(pos)) {
        return;
      }
      const tile = this.gridTiles[pos];
      if (tile) {
        this.availableTiles.push(tile);
        this.gridTiles[pos] = null;
      }
    });
  }

  arraysEqual(a: string[], b: string[]): boolean {
    return a.length === b.length && a.every((val, i) => val === b[i]);
  }

  // --- Win condition ---

  private checkWinCondition() {
    if (this.completedLines.size === 4) {
      this.keepBoardVisibleAfterWin = true;
      if (this.currentPuzzle && this.currentPuzzle.id > 0) {
        this.progressService.markPuzzleCompleted(this.currentPuzzle.id);
      }
      if (this.isDailyPuzzleMode && this.currentPuzzle?.id === this.dailyPuzzleId) {
        this.progressService.saveTodayDailySnapshot(this.dailyPuzzleId, this.gridTiles.map(tile => tile?.word ?? null));
        this.markDailyCompleted();
      }
      this.gameWon = true;
    }
  }

  onPlayAgain() {
    if (this.isDailyPuzzleMode && this.isDailyLocked) {
      this.gameWon = false;
      return;
    }
    if (this.currentPuzzle) {
      this.loadPuzzle(this.currentPuzzle.id);
    }
  }

  onNextPuzzle() {
    if (this.currentPuzzle) {
      this.loadPuzzle(this.currentPuzzle.id + 1, true);
    }
  }

  onCloseWinModal() {
    this.gameWon = false;
  }

  openHelp() {
    this.isHelpOpen = true;
  }

  closeHelp() {
    this.isHelpOpen = false;
  }

  private startDailyCountdown(): void {
    this.updateDailyCountdown();
    this.countdownTimer = setInterval(() => this.updateDailyCountdown(), 1000);
  }

  private updateDailyCountdown(): void {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const diffMs = tomorrow.getTime() - now.getTime();
    const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    this.dailyCountdown = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  private markDailyCompleted(): void {
    if (this.dailyPuzzleId == null) return;
    this.progressService.markDailyCompleted(this.dailyPuzzleId);
    this.isDailyLocked = true;
  }

  private updateDailyLockState(): void {
    if (!this.isDailyPuzzleMode || this.dailyPuzzleId == null || this.currentPuzzle?.id !== this.dailyPuzzleId) {
      this.isDailyLocked = false;
      return;
    }
    this.isDailyLocked = this.progressService.isDailyCompleted(this.dailyPuzzleId);
  }

  private restoreLockedDailyBoardState(): void {
    if (!this.isDailyPuzzleMode || !this.isDailyLocked || this.dailyPuzzleId == null || !this.currentPuzzle) {
      return;
    }

    const snapshot = this.progressService.getTodayDailySnapshot(this.dailyPuzzleId);
    if (!snapshot) {
      if (this.buildSolvedGridFromCategories()) {
        this.keepBoardVisibleAfterWin = true;
      }
      return;
    }

    const tileByWord = new Map(
      this.currentPuzzle.words.map((word, index) => [word, { id: index + 1, word }])
    );

    const invalidWord = snapshot.gridWords.find((word) => word !== null && !tileByWord.has(word));
    if (invalidWord) {
      return;
    }

    this.gridTiles = snapshot.gridWords.map((word) => (word ? tileByWord.get(word)! : null));
    const placedWords = new Set(snapshot.gridWords.filter((word): word is string => word !== null));

    this.availableTiles = this.currentPuzzle.words
      .filter(word => !placedWords.has(word))
      .map((word, index) => ({
        id: index + 1,
        word
      }));

    this.rebuildCompletedLineStateFromGrid();
    this.keepBoardVisibleAfterWin = this.completedLines.size === 4;
  }

  private buildSolvedGridFromCategories(): boolean {
    if (!this.currentPuzzle) {
      return false;
    }

    const categories = this.currentPuzzle.categories;
    if (categories.length !== 4) {
      return false;
    }

    const permutations = this.getPermutations(categories.map((_, i) => i));
    for (const perm of permutations) {
      const top = categories[perm[0]];
      const right = categories[perm[1]];
      const bottom = categories[perm[2]];
      const left = categories[perm[3]];

      const topLeft = this.getSingleSharedWord(top.words, left.words);
      const topRight = this.getSingleSharedWord(top.words, right.words);
      const bottomLeft = this.getSingleSharedWord(bottom.words, left.words);
      const bottomRight = this.getSingleSharedWord(bottom.words, right.words);

      if (!topLeft || !topRight || !bottomLeft || !bottomRight) {
        continue;
      }

      const corners = [topLeft, topRight, bottomLeft, bottomRight];
      if (new Set(corners).size !== 4) {
        continue;
      }

      const topInner = top.words.filter(word => word !== topLeft && word !== topRight);
      const rightInner = right.words.filter(word => word !== topRight && word !== bottomRight);
      const bottomInner = bottom.words.filter(word => word !== bottomLeft && word !== bottomRight);
      const leftInner = left.words.filter(word => word !== topLeft && word !== bottomLeft);

      if (topInner.length !== 2 || rightInner.length !== 2 || bottomInner.length !== 2 || leftInner.length !== 2) {
        continue;
      }

      const tileByWord = new Map(
        this.currentPuzzle.words.map((word, index) => [word, { id: index + 1, word }])
      );
      const orderedGridWords: (string | null)[] = [
        topLeft, topInner[0], topInner[1], topRight,
        leftInner[0], null, null, rightInner[0],
        leftInner[1], null, null, rightInner[1],
        bottomLeft, bottomInner[0], bottomInner[1], bottomRight
      ];

      if (orderedGridWords.some((word) => word !== null && !tileByWord.has(word))) {
        continue;
      }

      this.gridTiles = orderedGridWords.map((word) => (word ? tileByWord.get(word)! : null));
      this.availableTiles = [];

      this.completedLines = new Set<string>(['top', 'right', 'bottom', 'left']);
      this.lineCategories = new Map<string, string>([
        ['top', top.name],
        ['right', right.name],
        ['bottom', bottom.name],
        ['left', left.name]
      ]);
      this.lineDifficulties = new Map<string, number>([
        ['top', top.difficulty],
        ['right', right.difficulty],
        ['bottom', bottom.difficulty],
        ['left', left.difficulty]
      ]);
      return true;
    }

    return false;
  }

  private getSingleSharedWord(a: string[], b: string[]): string | null {
    const shared = a.filter(word => b.includes(word));
    return shared.length === 1 ? shared[0] : null;
  }

  private getPermutations(values: number[]): number[][] {
    if (values.length <= 1) {
      return [values];
    }

    const result: number[][] = [];
    values.forEach((value, index) => {
      const remaining = [...values.slice(0, index), ...values.slice(index + 1)];
      this.getPermutations(remaining).forEach((perm) => result.push([value, ...perm]));
    });
    return result;
  }

  private rebuildCompletedLineStateFromGrid(): void {
    if (!this.currentPuzzle) {
      return;
    }

    this.completedLines = new Set<string>();
    this.lineCategories = new Map<string, string>();
    this.lineDifficulties = new Map<string, number>();

    Object.entries(this.lines).forEach(([lineName, positions]) => {
      const lineWords = positions
        .map(pos => this.gridTiles[pos]?.word)
        .filter((word): word is string => Boolean(word));

      if (lineWords.length !== 4) {
        return;
      }

      const matchingCategory = this.currentPuzzle!.categories.find(category =>
        this.arraysEqual([...lineWords].sort(), [...category.words].sort())
      );

      if (matchingCategory) {
        this.completedLines.add(lineName);
        this.lineCategories.set(lineName, matchingCategory.name);
        this.lineDifficulties.set(lineName, matchingCategory.difficulty);
      }
    });
  }

  // --- Difficulty color helpers ---

  getCellDifficulty(cellIndex: number): number {
    for (const [lineName, positions] of Object.entries(this.lines)) {
      if (positions.includes(cellIndex) && this.completedLines.has(lineName)) {
        return this.lineDifficulties.get(lineName) || 0;
      }
    }
    return 0;
  }

  getCenterDifficulty(index: number): number {
    const lineName = Object.entries(this.centerIndicators)
      .find(([, centerIndex]) => centerIndex === index)?.[0];
    if (lineName && this.completedLines.has(lineName)) {
      return this.lineDifficulties.get(lineName) || 0;
    }
    return 0;
  }

  // --- Center indicator helpers ---

  getCenterIndicatorCategory(index: number): string {
    const lineName = Object.entries(this.centerIndicators)
      .find(([, centerIndex]) => centerIndex === index)?.[0];

    if (lineName && this.completedLines.has(lineName)) {
      return this.lineCategories.get(lineName) || '';
    }
    return '';
  }

  getCenterIndicatorArrow(index: number): string {
    const lineName = Object.entries(this.centerIndicators)
      .find(([, centerIndex]) => centerIndex === index)?.[0];

    switch (lineName) {
      case 'top': return '↑';
      case 'right': return '→';
      case 'bottom': return '↓';
      case 'left': return '←';
      default: return '';
    }
  }

  isCenterIndicatorActive(index: number): boolean {
    const lineName = Object.entries(this.centerIndicators)
      .find(([, centerIndex]) => centerIndex === index)?.[0];

    return lineName ? this.completedLines.has(lineName) : false;
  }
}
