import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  PuzzleValidatorService,
  CategoryInput,
  PuzzleValidationResult
} from '../../services/puzzle-validator.service';

interface CategoryFormData {
  name: string;
  words: [string, string, string, string];
  description: string;
}

@Component({
  selector: 'app-submit-puzzle',
  templateUrl: './submit-puzzle.component.html',
  styleUrls: ['./submit-puzzle.component.scss']
})
export class SubmitPuzzleComponent {
  formData = {
    displayName: '',
    email: '',
    title: '',
    categories: [
      { name: '', words: ['', '', '', ''], description: '' },
      { name: '', words: ['', '', '', ''], description: '' },
      { name: '', words: ['', '', '', ''], description: '' },
      { name: '', words: ['', '', '', ''], description: '' }
    ] as CategoryFormData[],
    notes: ''
  };

  validationResult: PuzzleValidationResult | null = null;
  emailError: string | null = null;
  submitted = false;
  submitting = false;
  submitSuccess = false;
  submitError: string | null = null;
  private debounceTimer: any;

  private readonly basinUrl = 'https://usebasin.com/f/9da8fc322bb0';

  constructor(
    private http: HttpClient,
    private router: Router,
    private validator: PuzzleValidatorService
  ) {}

  onPuzzleFieldChange(): void {
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
    if (!email) {
      this.emailError = null;
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailError = emailRegex.test(email) ? null : 'Please enter a valid email address.';
  }

  hasRequiredErrors(): boolean {
    if (!this.formData.displayName.trim()) return true;
    if (!this.formData.email.trim()) return true;
    if (!this.formData.title.trim()) return true;
    if (this.emailError) return true;
    return false;
  }

  onSubmit(): void {
    this.submitted = true;
    clearTimeout(this.debounceTimer);
    this.runPuzzleValidation();

    // Check email format
    const email = this.formData.email.trim();
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailError = emailRegex.test(email) ? null : 'Please enter a valid email address.';
    }

    if (this.hasRequiredErrors() || !this.validationResult?.valid) {
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
}
