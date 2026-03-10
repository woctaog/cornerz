import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  PuzzleValidatorService,
  CategoryInput,
  PuzzleValidationResult
} from '../../services/puzzle-validator.service';
import { NOUNS, ADJECTIVES, COLORS, CAT4_PATTERNS } from '../../data/placeholder-words';

interface CategoryFormData {
  name: string;
  words: [string, string, string, string];
  description: string;
}

export interface PreviewCell {
  word: string;
  catIndex: number;   // 1-4 = category, 0 = corner (shared), -1 = center indicator
  isCorner: boolean;
  centerFor?: number; // 1-4, only when catIndex === -1
}

@Component({
  selector: 'app-submit-puzzle',
  templateUrl: './submit-puzzle.component.html',
  styleUrls: ['./submit-puzzle.component.scss']
})
export class SubmitPuzzleComponent implements OnInit {
  formData = {
    displayName: '',
    email: '',
    title: '',
    categories: [
      { name: '', words: ['', '', '', ''] as [string, string, string, string], description: '' },
      { name: '', words: ['', '', '', ''] as [string, string, string, string], description: '' },
      { name: '', words: ['', '', '', ''] as [string, string, string, string], description: '' },
      { name: '', words: ['', '', '', ''] as [string, string, string, string], description: '' }
    ] as CategoryFormData[],
    notes: ''
  };

  validationResult: PuzzleValidationResult | null = null;
  emailError: string | null = null;
  submitted = false;
  submitting = false;
  submitSuccess = false;
  submitError: string | null = null;
  permissionGranted = false;
  categoryPlaceholders: string[] = [];
  previewCells: PreviewCell[] = [];
  private debounceTimer: ReturnType<typeof setTimeout> | undefined;

  readonly catColors: Record<number, string> = {
    1: '#F9A825', 2: '#2E7D32', 3: '#1565C0', 4: '#6A1B9A'
  };
  readonly catBgColors: Record<number, string> = {
    1: '#FFF8E1', 2: '#E8F5E9', 3: '#E3F2FD', 4: '#F3E5F5'
  };
  readonly categoryNumbers = [1, 2, 3, 4];
  readonly categoryPositions = ['Top', 'Right', 'Bottom', 'Left'];

  getCategoryLabel(index: number): string {
    return this.categoryPositions[index] + ' Category';
  }

  private readonly basinUrl = 'https://usebasin.com/f/9da8fc322bb0';

  constructor(
    private http: HttpClient,
    private router: Router,
    private validator: PuzzleValidatorService
  ) {}

  ngOnInit(): void {
    this.generatePlaceholders();
    this.computePreviewCells();
  }

  private pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  private generatePlaceholders(): void {
    // Cat 0 (Top):    "e.g. Types of [noun]"
    this.categoryPlaceholders[0] = `e.g. Types of ${this.pick(NOUNS)}`;

    // Cat 1 (Right):  "e.g. _______ [noun]"
    this.categoryPlaceholders[1] = `e.g. _______ ${this.pick(NOUNS)}`;

    // Cat 2 (Bottom): "e.g. [adjective] [plural noun]"
    this.categoryPlaceholders[2] = `e.g. ${this.pick(ADJECTIVES)} ${this.pluralize(this.pick(NOUNS))}`;

    // Cat 3 (Left):   random pattern (Homophones of X / Shades of X / etc.)
    const pattern = this.pick(CAT4_PATTERNS);
    const word = pattern.bank === 'colors' ? this.pick(COLORS) : this.pick(NOUNS);
    this.categoryPlaceholders[3] = `e.g. ${pattern.prefix} ${word}`;
  }

  private pluralize(word: string): string {
    // Pluralize the last space-separated token so multi-word nouns work too
    const parts = word.split(' ');
    const last = parts[parts.length - 1];
    const lo = last.toLowerCase();
    let plural: string;

    if (lo.endsWith('ch') || lo.endsWith('sh') || lo.endsWith('x') || lo.endsWith('z') || lo.endsWith('s')) {
      plural = last + 'es';
    } else if (lo.endsWith('fe')) {
      plural = last.slice(0, -2) + 'ves';
    } else if (lo.endsWith('f') && !lo.endsWith('ff')) {
      plural = last.slice(0, -1) + 'ves';
    } else if (lo.endsWith('y') && lo.length > 1 && !'aeiou'.includes(lo[lo.length - 2])) {
      plural = last.slice(0, -1) + 'ies';
    } else {
      plural = last + 's';
    }

    parts[parts.length - 1] = plural;
    return parts.join(' ');
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  private syncCorners(): void {
    const cats = this.formData.categories;
    // Each category's First Corner is the previous category's Second Corner
    cats[1].words[0] = cats[0].words[3];
    cats[2].words[0] = cats[1].words[3];
    cats[3].words[0] = cats[2].words[3];
    // Category 4's Second Corner closes the ring back to Category 1's First Corner
    cats[3].words[3] = cats[0].words[0];
  }

  onPuzzleFieldChange(): void {
    this.syncCorners();
    this.computePreviewCells();
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => this.runPuzzleValidation(), 400);
  }

  runPuzzleValidation(): void {
    const categories: CategoryInput[] = this.formData.categories.map(c => ({
      name: c.name,
      words: [...c.words]
    }));
    this.validationResult = this.validator.validate(categories);
  }

  onEmailBlur(): void {
    const email = this.formData.email.trim();
    this.emailError = email && !this.isValidEmail(email) ? 'Please enter a valid email address.' : null;
  }

  get summaryErrors(): string[] {
    if (!this.submitted) return [];
    const errors: string[] = [];

    if (!this.formData.displayName.trim()) errors.push('Display name is required.');
    if (!this.formData.email.trim()) errors.push('Email is required.');
    else if (this.emailError) errors.push(this.emailError);

    for (let i = 0; i < 4; i++) {
      const catErrs = this.validationResult?.errors?.categories?.[i];
      const label = this.getCategoryLabel(i);
      if (catErrs?.name) errors.push(`${label}: ${catErrs.name}`);
      const wordErrs = catErrs?.words;
      if (wordErrs?.some((w, j) => w && !this.isAutoFilled(i, j))) {
        errors.push(`${label}: one or more words have errors.`);
      }
    }

    const globalErrs = this.validationResult?.errors?.global;
    if (globalErrs?.length) errors.push(...globalErrs);

    if (!this.permissionGranted) errors.push('You must agree before submitting.');

    return errors;
  }

  onSubmit(): void {
    this.submitted = true;
    clearTimeout(this.debounceTimer);
    this.syncCorners();
    this.computePreviewCells();
    this.runPuzzleValidation();

    const email = this.formData.email.trim();
    if (email) this.emailError = this.isValidEmail(email) ? null : 'Please enter a valid email address.';

    if (this.summaryErrors.length > 0) {
      return;
    }

    this.submitting = true;
    this.submitError = null;

    const payload = this.buildBasinPayload();
    const headers = new HttpHeaders({ Accept: 'application/json' });
    this.http.post(this.basinUrl, payload, { headers }).subscribe({
      next: () => {
        this.submitting = false;
        this.submitSuccess = true;
      },
      error: () => {
        this.submitting = false;
        this.submitError = 'Something went wrong. Please try again.';
      }
    });
  }

  private buildBasinPayload(): Record<string, string> {
    const payload: Record<string, string> = {
      display_name: this.formData.displayName.trim(),
      email: this.formData.email.trim(),
      title: this.formData.title.trim(),
      notes: this.formData.notes.trim()
    };

    for (let i = 0; i < 4; i++) {
      const cat = this.formData.categories[i];
      payload[`category_${i + 1}_name`] = cat.name.trim();
      payload[`category_${i + 1}_description`] = cat.description.trim();
      for (let j = 0; j < 4; j++) {
        payload[`category_${i + 1}_word_${j + 1}`] = cat.words[j].trim();
      }
    }

    return payload;
  }

  trackByIndex(index: number): number {
    return index;
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  getWordLabel(wordIndex: number): string {
    return ['First Corner', 'Unique Word 1', 'Unique Word 2', 'Second Corner'][wordIndex];
  }

  isAutoFilled(catIndex: number, wordIndex: number): boolean {
    return (wordIndex === 0 && catIndex > 0) || (wordIndex === 3 && catIndex === 3);
  }

  getAutoFillHint(catIndex: number, wordIndex: number): string {
    if (wordIndex === 0 && catIndex > 0) {
      return `Filled from ${this.categoryPositions[catIndex - 1]} Category's 2nd Corner`;
    }
    if (wordIndex === 3 && catIndex === 3) {
      return `Filled from ${this.categoryPositions[0]} Category's 1st Corner`;
    }
    return '';
  }

  getCenterArrow(centerFor: number): string {
    return (['', '↑', '→', '↓', '←'] as string[])[centerFor] || '';
  }

  private computePreviewCells(): void {
    const cats = this.formData.categories;
    const w = (ci: number) => cats[ci].words;

    const corner = (word: string): PreviewCell =>
      ({ word: word.trim().toUpperCase(), catIndex: 0, isCorner: true });
    const catCell = (word: string, ci: number): PreviewCell =>
      ({ word: word.trim().toUpperCase(), catIndex: ci, isCorner: false });
    const center = (ci: number): PreviewCell =>
      ({ word: cats[ci - 1].name.trim() || `${this.categoryPositions[ci - 1]} Category`, catIndex: -1, isCorner: false, centerFor: ci });

    this.previewCells = [
      corner(w(0)[0]),      // 0: TL = Cat1 First Corner = Cat4 Second Corner
      catCell(w(0)[1], 1),  // 1: Cat1 Unique Word 1
      catCell(w(0)[2], 1),  // 2: Cat1 Unique Word 2
      corner(w(0)[3]),      // 3: TR = Cat1 Second Corner = Cat2 First Corner
      catCell(w(3)[2], 4),  // 4: Cat4 Unique Word 2
      center(4),             // 5: center indicator for Cat4 (left)
      center(1),             // 6: center indicator for Cat1 (top)
      catCell(w(1)[1], 2),  // 7: Cat2 Unique Word 1
      catCell(w(3)[1], 4),  // 8: Cat4 Unique Word 1
      center(3),             // 9: center indicator for Cat3 (bottom)
      center(2),             // 10: center indicator for Cat2 (right)
      catCell(w(1)[2], 2),  // 11: Cat2 Unique Word 2
      corner(w(3)[0]),      // 12: BL = Cat4 First Corner = Cat3 Second Corner
      catCell(w(2)[2], 3),  // 13: Cat3 Unique Word 2
      catCell(w(2)[1], 3),  // 14: Cat3 Unique Word 1
      corner(w(2)[0]),      // 15: BR = Cat3 First Corner = Cat2 Second Corner
    ];
  }
}
