import { Injectable } from '@angular/core';

export interface CategoryInput {
  name: string;
  words: string[]; // expected length 4
}

export interface CategoryValidationErrors {
  name: string | null;        // null = no error
  words: (string | null)[];   // length 4, null = no error per word
}

export interface PuzzleValidationErrors {
  global: string[];                         // puzzle-level (uniqueness, solvability)
  categories: CategoryValidationErrors[];   // indexed 0-3
}

export interface PuzzleValidationResult {
  valid: boolean;
  errors: PuzzleValidationErrors;
}

@Injectable({ providedIn: 'root' })
export class PuzzleValidatorService {

  validate(categories: CategoryInput[]): PuzzleValidationResult {
    const errors = this.emptyErrors(categories.length || 0);
    let shapeValid = true;

    // 1. Structural shape
    if (categories.length !== 4) {
      errors.global.push(`Expected exactly 4 categories, got ${categories.length}.`);
      shapeValid = false;
    }
    for (let i = 0; i < categories.length; i++) {
      if (!categories[i].words || categories[i].words.length !== 4) {
        errors.global.push(`Category ${i + 1} must have exactly 4 words.`);
        shapeValid = false;
      }
    }

    if (!shapeValid) {
      return { valid: false, errors };
    }

    // 2. Empty/whitespace checks
    for (let i = 0; i < 4; i++) {
      if (!categories[i].name || !categories[i].name.trim()) {
        errors.categories[i].name = 'Category name is required.';
      }
      for (let j = 0; j < 4; j++) {
        if (!categories[i].words[j] || !categories[i].words[j].trim()) {
          errors.categories[i].words[j] = 'Word is required.';
        }
      }
    }

    // 3. Character limits
    for (let i = 0; i < 4; i++) {
      if (categories[i].name && categories[i].name.length > 30) {
        errors.categories[i].name = 'Category name must be 30 characters or fewer.';
      }
      for (let j = 0; j < 4; j++) {
        if (categories[i].words[j] && categories[i].words[j].length > 20) {
          errors.categories[i].words[j] = 'Word must be 20 characters or fewer.';
        }
      }
    }

    // 4. Duplicate words — collect all words and count occurrences
    const wordCounts = new Map<string, number>();
    for (const cat of categories) {
      for (const word of cat.words) {
        const normalized = word.trim().toUpperCase();
        if (normalized) {
          wordCounts.set(normalized, (wordCounts.get(normalized) || 0) + 1);
        }
      }
    }
    for (const [word, count] of wordCounts) {
      if (count >= 3) {
        errors.global.push(`Word "${word}" appears ${count} times. A word can appear in at most 2 categories.`);
      }
    }

    // 5. Word distribution — each unique word must appear in exactly 1 or 2 categories
    const wordCategories = new Map<string, number>();
    for (const cat of categories) {
      const seen = new Set<string>();
      for (const word of cat.words) {
        const normalized = word.trim().toUpperCase();
        if (normalized && !seen.has(normalized)) {
          seen.add(normalized);
          wordCategories.set(normalized, (wordCategories.get(normalized) || 0) + 1);
        }
      }
    }
    for (const [word, catCount] of wordCategories) {
      if (catCount > 2) {
        errors.global.push(`Word "${word}" appears in ${catCount} categories. Maximum is 2.`);
      }
    }

    // 6. Corner count — exactly 4 words must appear in exactly 2 categories
    const cornerWords = [...wordCategories.entries()].filter(([, count]) => count === 2);
    if (cornerWords.length !== 4) {
      errors.global.push(
        `Expected exactly 4 corner words (words shared between 2 categories), found ${cornerWords.length}.`
      );
    }

    // 7. Solvability
    if (errors.global.length === 0) {
      const isSolvable = this.checkSolvability(categories);
      if (!isSolvable) {
        errors.global.push(
          'No valid corner arrangement found. Check that each pair of adjacent categories shares exactly one word.'
        );
      }
    }

    return {
      valid: errors.global.length === 0 && errors.categories.every(
        c => c.name === null && c.words.every(w => w === null)
      ),
      errors
    };
  }

  getPermutations(values: number[]): number[][] {
    if (values.length <= 1) {
      return [values];
    }

    const result: number[][] = [];
    values.forEach((value, index) => {
      const remaining = [...values.slice(0, index), ...values.slice(index + 1)];
      this.getPermutations(remaining).forEach((perm) => result.push([value, ...perm]));
    });
    return result;
  }

  getSingleSharedWord(a: string[], b: string[]): string | null {
    const shared = a.filter(word => b.includes(word));
    return shared.length === 1 ? shared[0] : null;
  }

  private checkSolvability(categories: CategoryInput[]): boolean {
    const permutations = this.getPermutations(categories.map((_, i) => i));

    for (const perm of permutations) {
      const top = categories[perm[0]];
      const right = categories[perm[1]];
      const bottom = categories[perm[2]];
      const left = categories[perm[3]];

      const topLeft = this.getSingleSharedWord(top.words, left.words);
      const topRight = this.getSingleSharedWord(top.words, right.words);
      const bottomLeft = this.getSingleSharedWord(bottom.words, left.words);
      const bottomRight = this.getSingleSharedWord(bottom.words, right.words);

      if (!topLeft || !topRight || !bottomLeft || !bottomRight) {
        continue;
      }

      const corners = [topLeft, topRight, bottomLeft, bottomRight];
      if (new Set(corners).size !== 4) {
        continue;
      }

      // Verify inner words have exactly 2 each
      const topInner = top.words.filter(w => w !== topLeft && w !== topRight);
      const rightInner = right.words.filter(w => w !== topRight && w !== bottomRight);
      const bottomInner = bottom.words.filter(w => w !== bottomLeft && w !== bottomRight);
      const leftInner = left.words.filter(w => w !== topLeft && w !== bottomLeft);

      if (topInner.length === 2 && rightInner.length === 2 &&
          bottomInner.length === 2 && leftInner.length === 2) {
        return true;
      }
    }

    return false;
  }

  private emptyErrors(categoryCount = 4): PuzzleValidationErrors {
    return {
      global: [],
      categories: Array.from({ length: categoryCount }, () => ({
        name: null,
        words: [null, null, null, null]
      }))
    };
  }
}
