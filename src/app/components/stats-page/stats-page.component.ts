import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Thin routed wrapper around the stats modal so /stats is deep-linkable
 * from the nav bar. Closing the modal returns to the daily puzzle.
 */
@Component({
  selector: 'app-stats-page',
  template: `<app-stats-modal (close)="goHome()"></app-stats-modal>`
})
export class StatsPageComponent {
  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/']);
  }
}
