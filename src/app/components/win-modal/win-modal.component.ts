import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Category, DIFFICULTY_LABELS } from '../../services/game.service';

@Component({
  selector: 'app-win-modal',
  templateUrl: './win-modal.component.html',
  styleUrls: ['./win-modal.component.scss']
})
export class WinModalComponent {
  @Input() mistakes: number = 0;
  @Input() puzzleId: number = 1;
  @Input() categories: Category[] = [];
  @Output() playAgain = new EventEmitter<void>();
  @Output() nextPuzzle = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  selectedCategory: Category | null = null;
  selectedSolutionHtml: SafeHtml | null = null;

  private difficultyColors: Record<number, string> = {
    1: '#F9A825', 2: '#2E7D32', 3: '#1565C0', 4: '#6A1B9A'
  };

  constructor(private sanitizer: DomSanitizer) {}

  get ratingStars(): string {
    if (this.mistakes === 0) return '★★★';
    if (this.mistakes <= 2) return '★★☆';
    if (this.mistakes <= 4) return '★☆☆';
    return '☆☆☆';
  }

  get ratingLabel(): string {
    if (this.mistakes === 0) return 'Perfect!';
    if (this.mistakes <= 2) return 'Great!';
    if (this.mistakes <= 4) return 'Good';
    return 'Keep practicing!';
  }

  getDifficultyLabel(difficulty: number): string {
    return DIFFICULTY_LABELS[difficulty] || '';
  }

  getDifficultyColor(difficulty: number): string {
    return this.difficultyColors[difficulty] || '#888';
  }

  viewSolution(cat: Category): void {
    this.selectedCategory = cat;
    this.selectedSolutionHtml = cat.solution
      ? this.sanitizer.bypassSecurityTrustHtml(cat.solution)
      : null;
  }

  backToList(): void {
    this.selectedCategory = null;
    this.selectedSolutionHtml = null;
  }
}
