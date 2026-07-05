import { Injectable } from '@angular/core';

export type Theme = 'light' | 'dark';

/**
 * Applies the color theme by stamping data-theme on <html>.
 * A manual choice is persisted; without one the OS preference
 * (prefers-color-scheme) decides, tracked live via matchMedia.
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeKey = 'cornerz-theme';
  private readonly media = window.matchMedia('(prefers-color-scheme: dark)');

  isDark = false;

  constructor() {
    const stored = this.getStoredTheme();
    if (stored) {
      document.documentElement.dataset['theme'] = stored;
    }
    this.isDark = stored ? stored === 'dark' : this.media.matches;

    this.media.addEventListener('change', (event) => {
      if (!this.getStoredTheme()) {
        this.isDark = event.matches;
      }
    });
  }

  toggle(): void {
    const next: Theme = this.isDark ? 'light' : 'dark';
    document.documentElement.dataset['theme'] = next;
    localStorage.setItem(this.themeKey, next);
    this.isDark = next === 'dark';
  }

  private getStoredTheme(): Theme | null {
    const value = localStorage.getItem(this.themeKey);
    return value === 'light' || value === 'dark' ? value : null;
  }
}
