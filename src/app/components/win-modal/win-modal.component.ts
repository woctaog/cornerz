import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Category, DIFFICULTY_LABELS, DIFFICULTY_EMOJIS } from '../../models/puzzle.model';

interface ConfettiPiece {
  left: string;
  color: string;
  size: string;
  delay: string;
  duration: string;
  rotation: string;
  round: boolean;
}

const RATING_TIERS: { threshold: number; stars: string; label: string }[] = [
  { threshold: 0, stars: '★★★', label: 'Perfect!' },
  { threshold: 2, stars: '★★☆', label: 'Great!' },
  { threshold: 4, stars: '★☆☆', label: 'Good' },
  { threshold: Infinity, stars: '☆☆☆', label: 'Keep practicing!' },
];

@Component({
  selector: 'app-win-modal',
  templateUrl: './win-modal.component.html',
  styleUrls: ['./win-modal.component.scss']
})
export class WinModalComponent implements OnDestroy {
  @Input() mistakes: number = 0;
  @Input() puzzleId: number = 1;
  @Input() categories: Category[] = [];
  @Input() completionOrder: number[] = [];
  @Input() gameSequence: number[] = [];
  @Output() playAgain = new EventEmitter<void>();
  @Output() nextPuzzle = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  readonly MAX_SEQUENCE = 20;

  selectedCategory: Category | null = null;
  selectedSolutionHtml: SafeHtml | null = null;
  copied = false;
  confettiPieces: ConfettiPiece[] = [];

  private shareTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor(private sanitizer: DomSanitizer) {
    this.confettiPieces = this.generateConfetti();
  }

  private generateConfetti(): ConfettiPiece[] {
    const colors = [
      '#FFCA28', '#FFE082', '#43A047', '#A5D6A7',
      '#1E88E5', '#90CAF9', '#8E24AA', '#CE93D8',
      '#FF7043', '#FFFFFF',
    ];
    return Array.from({ length: 50 }, () => {
      const rotDir = Math.random() > 0.5 ? 1 : -1;
      const rotAmt = 360 + Math.floor(Math.random() * 3) * 360;
      return {
        left: `${(Math.random() * 100).toFixed(1)}%`,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: `${(6 + Math.random() * 8).toFixed(1)}px`,
        delay: `${(Math.random() * 1.5).toFixed(2)}s`,
        duration: `${(2 + Math.random() * 1.5).toFixed(2)}s`,
        rotation: `${rotDir * rotAmt}deg`,
        round: Math.random() > 0.5,
      };
    });
  }

  ngOnDestroy(): void {
    if (this.shareTimeout) clearTimeout(this.shareTimeout);
  }

  get displaySequence(): number[] {
    return this.gameSequence.slice(0, this.MAX_SEQUENCE);
  }

  get sequenceRows(): number[][] {
    const items = this.displaySequence;
    const n = items.length;
    if (n === 0) return [];

    // Pick per-row count (4–6) that maximises the last row's fullness
    let perRow = 4;
    for (let p = 4; p <= 6; p++) {
      const lastRow = n % p || p;
      const currentLastRow = n % perRow || perRow;
      if (lastRow > currentLastRow) perRow = p;
    }

    const rows: number[][] = [];
    for (let i = 0; i < n; i += perRow) rows.push(items.slice(i, i + perRow));
    return rows;
  }

  private getRatingTier() {
    return RATING_TIERS.find(t => this.mistakes <= t.threshold)!;
  }

  get ratingStars(): string { return this.getRatingTier().stars; }
  get ratingLabel(): string { return this.getRatingTier().label; }

  difficultyEmoji(d: number): string {
    return DIFFICULTY_EMOJIS[d] || '⬜';
  }

  get shareText(): string {
    const emojiRow = this.gameSequence
      .map(item => item === 0 ? '❌' : (DIFFICULTY_EMOJIS[item] || '⬜'))
      .join(' ');
    return `Cornerz #${this.puzzleId}\n${emojiRow}\nMistakes: ${this.mistakes}`;
  }

  get canNativeShare(): boolean {
    return !!navigator.share;
  }

  shareResult(): void {
    if (navigator.share) {
      navigator.share({ text: this.shareText }).catch(() => {});
    } else {
      navigator.clipboard.writeText(this.shareText).then(() => {
        this.copied = true;
        if (this.shareTimeout) clearTimeout(this.shareTimeout);
        this.shareTimeout = setTimeout(() => this.copied = false, 2000);
      });
    }
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
