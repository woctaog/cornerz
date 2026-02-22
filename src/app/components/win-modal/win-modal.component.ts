import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Category, DIFFICULTY_LABELS } from '../../models/puzzle.model';

interface Rating {
  stars: string;
  label: string;
}

const RATING_THRESHOLDS: { max: number; stars: string; label: string }[] = [
  { max: 0, stars: '\u2605\u2605\u2605', label: 'Perfect!' },
  { max: 2, stars: '\u2605\u2605\u2606', label: 'Great!' },
  { max: 4, stars: '\u2605\u2606\u2606', label: 'Good' },
];
const DEFAULT_RATING: Rating = { stars: '\u2606\u2606\u2606', label: 'Keep practicing!' };

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

  constructor(private sanitizer: DomSanitizer) {}

  get rating(): Rating {
    return RATING_THRESHOLDS.find(t => this.mistakes <= t.max) || DEFAULT_RATING;
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
