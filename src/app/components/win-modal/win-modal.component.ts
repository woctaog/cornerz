import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Category, DIFFICULTY_LABELS } from '../../models/puzzle.model';

@Component({
  selector: 'app-win-modal',
  templateUrl: './win-modal.component.html',
  styleUrls: ['./win-modal.component.scss']
})
export class WinModalComponent {
  @Input() mistakes: number = 0;
  @Input() puzzleId: number = 1;
  @Input() categories: Category[] = [];
  @Input() completionOrder: number[] = [];
  @Output() playAgain = new EventEmitter<void>();
  @Output() nextPuzzle = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  selectedCategory: Category | null = null;
  selectedSolutionHtml: SafeHtml | null = null;
  copied = false;

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

  get shareText(): string {
    const emojis: Record<number, string> = { 1: '🟨', 2: '🟩', 3: '🟦', 4: '🟪' };
    const emojiRow = this.completionOrder.map(d => emojis[d] || '⬜').join(' ');
    return `Cornerz #${this.puzzleId}\n${emojiRow}\nMistakes: ${this.mistakes}`;
  }

  copyShareText(): void {
    navigator.clipboard.writeText(this.shareText).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }

  getDifficultyLabel(difficulty: number): string {
    return DIFFICULTY_LABELS[difficulty] || '';
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
