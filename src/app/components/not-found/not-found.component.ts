import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="not-found">
      <h2>Page not found</h2>
      <p>That corner of the site doesn't exist.</p>
      <a routerLink="/">Back to today's puzzle</a>
    </div>
  `,
  styles: [`
    .not-found {
      max-width: 400px;
      margin: 3rem auto;
      text-align: center;
      background: var(--surface);
      border: 1px solid var(--border-subtle);
      border-radius: 10px;
      padding: 1.5rem 1rem;

      h2 { margin: 0 0 0.4rem; font-size: 1.15rem; color: var(--text-primary); }
      p  { margin: 0 0 1rem; color: var(--text-secondary); font-size: 0.9rem; }

      a {
        display: inline-block;
        text-decoration: none;
        color: #fff;
        background: var(--brand-gradient);
        border-radius: 8px;
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
        font-weight: 600;
      }
    }
  `]
})
export class NotFoundComponent {}
