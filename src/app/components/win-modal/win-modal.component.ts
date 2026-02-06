import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-win-modal',
  templateUrl: './win-modal.component.html',
  styleUrls: ['./win-modal.component.scss']
})
export class WinModalComponent {
  @Input() mistakes: number = 0;
  @Input() puzzleId: number = 1;
  @Output() playAgain = new EventEmitter<void>();
  @Output() nextPuzzle = new EventEmitter<void>();

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
}
