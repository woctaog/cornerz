# Cornerz - Implementation Plan

## Overview

Cornerz is a dual-category word puzzle web app. Players place 12 words on the edges of a 4x4 grid so that each completed line (top, bottom, left, right) contains 4 words from the same category. Words can belong to multiple categories, creating an overlapping constraint puzzle.

The app will feature a **daily puzzle** (like Wordle/NYT Connections), a **browsable puzzle archive**, **local progress tracking**, **shareable results**, and **polished animations**.

---

## Current State

The game is playable with the following implemented:
- Responsive 4x4 grid with drag-and-drop (Angular CDK) — scales across mobile/tablet/desktop
- Tap-to-select + tap-to-place as an alternative to drag (mobile accessibility)
- Line completion detection and validation with bounce/shake animations
- Drop target highlighting while dragging or selecting
- Difficulty-based color coding per category (Yellow/Green/Blue/Purple, levels 1-4)
- Center indicators show category name + arrow direction when a line is completed
- Mistake counter displayed in a HUD above the board
- Win modal with star rating based on mistakes, play again / next puzzle buttons
- One fully implemented puzzle, two placeholders
- Static puzzle data loaded from `puzzles.json`

---

## Architecture

### Tech Stack
- **Frontend**: Angular 14, Angular CDK (drag-drop), SCSS
- **Data**: Static JSON (designed with interfaces ready for future API swap)
- **Persistence**: Browser localStorage
- **Hosting**: GitHub Pages (current), future-ready for any static host

### Data Layer Design
Puzzle data will be loaded through an abstracted `PuzzleService`. Currently backed by a local JSON file, but the service interface will be designed so swapping to a REST API later requires changing only the service implementation — no component changes needed.

```
PuzzleService (abstract interface)
  ├── StaticPuzzleService  (reads from puzzles.json — current)
  └── ApiPuzzleService     (fetches from backend — future)
```

---

## Implementation Phases

### Phase 1: Core Game Polish & Bug Fixes
**Goal**: Solidify the existing gameplay before adding features.

- [x] **1.1 — Fix grid layout and responsiveness** *(done)*
  - Responsive board with `min(90vw, 400px)`, `aspect-ratio: 1`, `clamp()` for gaps/fonts
  - Touch-friendly with `touch-action: none` on drag targets
  - Max-width capped at 400px on desktop

- [x] **1.2 — Improve drag-and-drop UX** *(done)*
  - Bounce animation on successful drop, shake + red flash on invalid line
  - Tiles return to bank after 500ms delay (visible shake first)
  - Empty valid cells pulse blue while dragging or selecting
  - Tap-to-select + tap-to-place for mobile (orange highlight on selected tile)

- [x] **1.3 — Win condition and end-of-game flow** *(done)*
  - Win detected when all 4 lines completed
  - Win modal with star rating (based on mistake count), mistake display
  - Play Again / Next Puzzle buttons
  - Difficulty color-coding: Yellow(1), Green(2), Blue(3), Purple(4) per category
  - Mistake counter in HUD above the board (no timer — casual game)

- [ ] **1.4 — Puzzle validation tooling**
  - Add a dev-only utility to validate puzzle JSON (ensure all words appear in exactly 2 categories, categories have exactly 4 words, no orphan words)
  - Ensure the puzzle is solvable (each word can be uniquely placed)

### Phase 2: Automated E2E Testing (Playwright)
**Goal**: Establish a reliable test suite before adding features, so regressions are caught early.

- [x] **2.1 — Playwright setup**
  - Install `@playwright/test` and configure for the Angular dev server
  - Add `playwright.config.ts` with base URL pointed at `ng serve`
  - Configure `webServer` option to auto-start the Angular dev server before tests
  - Set up multi-browser testing (Chromium, Firefox, WebKit)
  - Add npm scripts: `npm run e2e`, `npm run e2e:headed` (for debugging)
  - Add `e2e/` directory to project root for test files

- [x] **2.2 — Core gameplay tests**
  - **Puzzle load**: Verify the game board renders with 12 tiles in the bank and an empty grid
  - **Drag-and-drop**: Test dragging a tile from bank to a grid cell, verify it appears in the cell and leaves the bank
  - **Tile swapping**: Drag a tile onto an occupied cell, verify the swap occurs
  - **Return to bank**: Drag a tile from the grid back to the bank
  - **Line validation (correct)**: Fill a complete line with the correct category, verify it locks and turns green
  - **Line validation (incorrect)**: Fill a line with mismatched words, verify tiles return to bank
  - **Win condition**: Complete all 4 lines correctly, verify the win state is triggered

- [x] **2.3 — UI state tests**
  - Verify disabled center cells are not droppable
  - Verify locked/completed lines cannot be dragged from
  - Verify center indicators show correct category names and arrows
  - Verify puzzle loads from URL query parameter (`?puzzle=1`)

- [x] **2.4 — Regression safety net**
  - Add test for tile bank rendering (correct count, shuffled order)
  - Add snapshot/visual comparison tests for key states (empty board, mid-game, win)
  - Integrate Playwright into CI (GitHub Actions workflow) for PR checks

### Phase 3: Puzzle Content & Daily Puzzle System
**Goal**: Build out the puzzle library and daily puzzle mechanic.

- [x] **3.1 — Expand puzzle library**
  - 15 complete puzzles shipped (ids 1–15), including two Claude-authored ones (14, 15)
  - Metadata in place: puzzle-level `difficulty`, `author`, `rating`, `solveRating`; dates derived from id + `PUZZLE_START_DATE`
  - Rated against `PUZZLE_EVALUATION.md`; validated with `npm run validate`

- [x] **3.2 — Daily puzzle system**
  - Determine daily puzzle by date (e.g., puzzle index = days since launch date)
  - Show the daily puzzle prominently on the home/landing page
  - Prevent replaying the daily puzzle once completed (store completion in localStorage)
  - Show a countdown timer to the next daily puzzle

- [x] **3.3 — Puzzle archive / library view**
  - Create a new route `/library` with a grid/list of all available puzzles
  - Show puzzle metadata: title, difficulty, completion status (checkmark if solved)
  - Allow filtering by difficulty or completion status
  - Clicking a puzzle navigates to the game board with that puzzle loaded

- [x] **3.4 — Category solutions**
  - Add a `solution: string` field to the `Category` interface (HTML with detailed clues)
  - Update `puzzles.json` schema to include descriptions for each category (this has already been done)
  - Solution should explain the category theme and how it relates to each of the 4 words in the category
  - Create a UI component to display category solutions (e.g., modal, collapsible panel, or info popover)
  - Show solutions on demand (e.g., clicking the category once its revealed opens a model with the full solution)
  - Ensure solutions are accessible and render HTML content safely (use Angular's sanitization)

- [x] **3.5 — Refactor PuzzleService for API-readiness**
  - Define a clean `PuzzleProvider` interface with methods:
    - `getDailyPuzzle(): Observable<Puzzle>`
    - `getPuzzleById(id: number): Observable<Puzzle>`
    - `getLibrary(): Observable<PuzzleSummary[]>`
  - Implement `StaticPuzzleProvider` that reads from JSON
  - Use Angular dependency injection so swapping providers is a one-line change

### Phase 4: Community Puzzle Submissions (Basin Form)
**Goal**: Enable users to submit complete puzzle ideas via a simple form, sent to email for manual review.

- [x] **4.1 — Reusable puzzle validator service**
  - Create a `PuzzleValidatorService` with methods that validate puzzle structure
  - Validation rules:
    - Exactly 4 categories, each with exactly 4 words
    - Exactly 12 unique words total (deduped across categories)
    - Each word appears in exactly 1 or 2 categories (edge vs corner words)
    - Word length: max 20 characters
    - Category name length: max 30 characters
    - No empty/whitespace-only values
  - Returns structured validation result with per-field errors (not just pass/fail)
  - Reusable across submission form validation AND dev-side puzzle JSON validation
  - This also satisfies Phase 1.4 (puzzle validation tooling)

- [x] **4.2 — Submission form component**
  - Create a new route `/submit` for the submission form
  - Form fields:
    - Display name (for credit if the puzzle is used)
    - Email (for follow-up if needed)
    - Puzzle title
    - 4 category sections, each with: category name + 4 word inputs
    - Optional notes / comments
  - Client-side validation via `PuzzleValidatorService`:
    - Required fields: display name, email, title, all 4 categories fully filled
    - Email format validation
    - Character limits enforced inline (word: 20 chars, category name: 30 chars)
    - Cross-field validation: no duplicate words, valid word distribution across categories
  - Real-time validation feedback as user types (debounced)
  - Permission/legal text displayed above the submit button:
    - "By submitting, you grant Cornerz permission to use your puzzle as a daily puzzle or in the puzzle archive. You also grant permission for minor edits to your submission (e.g., adjusting wording, difficulty, or categories) as needed."

- [x] **4.3 — Basin integration**
  - POST form data to pre-configured Basin endpoint URL (Basin setup is manual/external)
  - Form payload: display name, email, title, categories with words, notes
  - Basic client-side rate-limiting (localStorage-based cooldown, e.g., 1 submission per 10 minutes)

- [x] **4.4 — Submission UX**
  - Loading state on submit button while request is in flight
  - Disable submit button to prevent double-submission
  - Success: confirmation message thanking the user, option to submit another
  - Error: user-friendly message with retry option
  - Form resets on successful submission

### Phase 5: Share Results
**Goal**: Let players share their results in a spoiler-free format.

- [x] **5.1 — Generate shareable result card** *(done)*
  - Emoji grid representation of the solve shown in the win modal
  - Each completed line mapped to difficulty emoji: 🟨 Yellow, 🟩 Green, 🟦 Blue, 🟪 Purple
  - Emojis shown in completion order
  - Format: `Cornerz #<id>` / emoji row / `Mistakes: <count>`
  - For restored daily puzzles, completion order reconstructed from saved state

- [x] **5.2 — Copy to clipboard** *(done)*
  - "Share" button on the win screen copies result text via `navigator.clipboard.writeText()`
  - Button shows "Copied!" confirmation for 2 seconds after copying

- [x] **5.3 — (Optional) Web Share API**
  - On mobile, use the native Web Share API (`navigator.share()`) to open the share sheet
  - Fallback to clipboard copy on unsupported browsers

### Phase 6: Local Progress & Stats
**Goal**: Track player stats in localStorage for a sense of progression.

- [x] **6.1 — Stats tracking service**
  - Abstract `StatsProvider` class + `LocalStatsProvider` (localStorage), mirroring `PuzzleProvider` pattern
  - Track per-puzzle: `PuzzleResult` (puzzleId, completedAt, mistakes, gameSequence, completionOrder, isDaily)
  - Best result kept on replay (lowest mistake count wins)
  - Aggregate stats: totalSolved, currentStreak, maxStreak, averageMistakes, mistakeDistribution
  - Streak uses local timezone to avoid UTC midnight boundary issues

- [x] **6.2 — Stats display**
  - Stats modal opened via 📊 button in game board header
  - Shows: games played, current streak, max streak, average mistakes
  - Mistake distribution bar chart (CSS bars, no library)

- [x] **6.3 — Streak system**
  - Daily streaks computed from `PuzzleResult.isDaily` + `completedAt` in `LocalStatsProvider`
  - 🔥 streak badge shown in game board header when streak > 0; clicking it opens the stats modal
  - Streak refreshed on page load and immediately after winning a daily puzzle

### Phase 7: Animations & Visual Polish
**Goal**: Make the game feel satisfying and premium.

- [x] **7.1 — Tile animations**
  - Entrance animation: bank tiles stagger-fade-in when puzzle loads (45ms offset per tile)
  - Drop animation: bounce on placement already in place from Phase 1
  - Win animation: 50-piece confetti falls from top of screen (palette colors, randomized params, pointer-events: none)

- [x] **7.2 — UI/UX refinements**
  - "CORNERZ" gradient wordmark in game board header (purple-to-blue, bold uppercase)
  - Brand + app design tokens added to `_variables.scss` (`--brand-gradient`, `--app-bg`, `--surface`, `--text-*`, `--font-sans`)
  - Typography: `system-ui` font stack globally, `antialiased` rendering, refined text hierarchy
  - Background upgraded to blue-purple tinted gradient via `--app-bg` token
  - Dark mode: deferred

- [x] **7.3 — Loading and transition states**
  - Skeleton loaders (shimmer) for the game board and library while data loads
  - Routed views fade/slide in on navigation; `prefers-reduced-motion` respected
  - Global button press states (scale on :active) and hover/focus micro-interactions

- [x] **7.4 — Accessibility**
  - Bank tiles, grid cells, center indicators, and streak badge are keyboard-operable (Tab + Enter/Space; Escape clears selection/closes modals; Delete returns a selected grid tile to the bank)
  - ARIA labels on grid cells (row/column/content/state), tiles, tile bank, and controls; `role="dialog"` + `aria-modal` on all modals
  - `aria-live` announcements for tile selection/placement, line results, one-away, mistakes, and wins
  - Contrast fix: dark text on yellow (difficulty 1) center indicators and labels; consistent `:focus-visible` rings app-wide

### Phase 8: Navigation & App Shell
**Goal**: Structure the app with proper routing and navigation.

- [x] **8.1 — App shell and routing**
  - Routes: `/` (daily), `/play/:id`, `/library`, `/stats`, `/submit`, plus `**` → NotFound page
  - Top navigation bar with CORNERZ brand + Daily / Library / Stats / Submit links (active-state pills)
  - Library "Play" and win-modal "Next Puzzle" navigate to `/play/:id`; legacy `/?puzzle=N` links still work
  - Wordmark moved from the game header into the shared nav

- [x] **8.2 — Home / landing page**
  - `/` shows today's daily puzzle front-and-center (unchanged by design — the game *is* the landing page)
  - Library and stats one tap away in the nav; streak badge + stats button in the game header

---

## Data Models

### Current Models (`src/app/models/puzzle.model.ts`)
```typescript
interface Puzzle {
  id: number;
  title: string;
  description: string;
  words: string[];
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
  difficulty: number; // 1=Yellow(easy), 2=Green, 3=Blue, 4=Purple(hard)
  words: string[];
  solution?: string;  // HTML string explaining the category theme and word connections
}

interface PuzzleSummary {
  id: number;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard'; // computed from max category difficulty
}

interface PuzzleData {
  puzzles: Puzzle[];
}

// Also exports:
// DIFFICULTY_LABELS: Record<number, string> — maps 1-4 to 'Easy'/'Medium'/'Hard'/'Hardest'
// DIFFICULTY_COLORS: Record<number, string> — maps 1-4 to hex color values
```

### Player Stats (localStorage — future, Phase 6)
```typescript
interface PlayerStats {
  puzzlesCompleted: PuzzleResult[];
  dailyStreak: number;
  maxStreak: number;
  lastDailyCompletionDate: string; // ISO date
}

interface PuzzleResult {
  puzzleId: number;
  completedAt: string;            // ISO datetime
  mistakes: number;               // total incorrect line submissions
  completionOrder: string[];      // line names in order completed, e.g. ["top", "left", "right", "bottom"]
}
```

---

## File Structure (Current + Planned)

```
src/
├── app/
│   ├── components/
│   │   ├── game-board/           # Main game grid, daily countdown, help modal (inline)
│   │   ├── game-tile/            # Draggable word tile
│   │   ├── library/              # Puzzle archive browse/filter view
│   │   ├── win-modal/            # End-of-game overlay with solution detail
│   │   ├── submit-puzzle/        # Community puzzle submission form with Basin integration
│   │   ├── share-card/           # Shareable emoji result (PLANNED — Phase 5)
│   │   └── stats-display/        # Stats modal/page (PLANNED — Phase 6)
│   ├── constants/
│   │   └── grid.constants.ts     # DISABLED_SPOTS, LINES, CENTER_INDICATORS
│   ├── directives/
│   │   └── fit-text.directive.ts # Responsive text sizing directive
│   ├── models/
│   │   ├── puzzle.model.ts       # Puzzle, Category, PuzzleSummary, PuzzleData interfaces
│   │   └── stats.model.ts        # Stats interfaces (PLANNED — Phase 6)
│   ├── services/
│   │   ├── puzzle-provider.ts    # Abstract PuzzleProvider base class
│   │   ├── static-puzzle-provider.ts  # JSON-backed implementation
│   │   ├── progress.service.ts   # localStorage tracking (completions, snapshots)
│   │   ├── puzzle-validator.service.ts # Reusable puzzle validation service
│   │   ├── share.service.ts      # Share/clipboard logic (PLANNED — Phase 5)
│   │   └── stats.service.ts      # Aggregate stats tracking (PLANNED — Phase 6)
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.module.ts
│   └── app-routing.module.ts
├── styles/
│   ├── _variables.scss           # CSS custom properties for difficulty colors
│   └── _mixins.scss              # difficulty-color(), difficulty-bg(), modal-backdrop mixins
├── assets/
│   └── puzzles.json              # Puzzle data
├── index.html
├── styles.scss                   # Global styles
└── ...
e2e/
├── smoke.spec.ts                 # App load test
├── gameplay.spec.ts              # Core gameplay tests (7 tests)
├── ui-state.spec.ts              # UI state tests (7 tests)
└── regression.spec.ts            # Regression + visual snapshot tests
playwright.config.ts              # Multi-browser config with Angular dev server
```

---

## Implementation Order

| Priority | Phase | Status | Notes |
|----------|-------|--------|-------|
| 1st      | Phase 1 (Core Polish) | Done (1.1-1.3), 1.4 absorbed into 4.1 | Puzzle validation now part of Phase 4 validator service |
| 2nd      | Phase 2 (E2E Tests) | Done | 4 spec files covering core gameplay, UI state, regression |
| 3rd      | Phase 3 (Puzzles & Daily) | Done | 15 puzzles shipped with metadata |
| 4th      | Phase 4 (Community Submissions) | Done | Validator service, submission form, Basin POST, loading/success/error UX |
| 5th      | Phase 5 (Share) | Done | Emoji card, clipboard copy, Web Share API on mobile |
| 6th      | Phase 6 (Stats) | Done | StatsProvider, stats modal, streak badge |
| 7th      | Phase 7 (Visual Polish) | Done | Animations, skeleton loaders, transitions, accessibility (dark mode deferred) |
| 8th      | Phase 8 (Navigation) | Done | App shell nav, /play/:id, /stats, 404 page |
| 9th      | Phase 9 (Puzzle Encryption) | Done | puzzles.json ships AES-GCM blobs; keys derived from release dates |

Phase 2 tests should be expanded as new features land in later phases.

---

### Phase 9: Puzzle Data Encryption
**Goal**: Prevent casual spoiling of future daily puzzles while keeping the app fully front-end/static.

**Approach**: Encrypt each puzzle's words and categories with a key derived from its scheduled release date. `puzzles.json` becomes a list of opaque encrypted blobs. The app decrypts only the puzzle(s) it currently needs using the corresponding date key — future puzzles remain unreadable without running the decryption logic and knowing the target date.

- [x] **9.1 — Encryption scheme design**
  - Use Web Crypto API (`AES-GCM`) — available in all modern browsers, no library needed
  - Key derivation: `PBKDF2(password=releaseDate, salt=puzzleId, iterations=100k, hash=SHA-256)` → 256-bit AES key
  - `releaseDate` format: `YYYY-MM-DD` string of the puzzle's scheduled daily date
  - Each puzzle entry in JSON stores: `{ id, releaseDate, iv, ciphertext }` — plaintext fields (`title`, `words`, `categories`) replaced by the encrypted blob
  - Metadata that doesn't spoil anything (`id`, `releaseDate`, puzzle-level `difficulty`) may remain in plaintext for the library view

- [x] **9.2 — Build-time encryption script** *(tools/encrypt-puzzles.js + tools/decrypt-puzzles.js + shared tools/puzzle-crypto.js; plaintext source lives at tools/puzzles-plaintext.json, gitignored and reconstructible via `npm run decrypt`)*
  - Node.js script (`tools/encrypt-puzzles.js`) reads `puzzles-plaintext.json`, encrypts each puzzle, writes `puzzles.json`
  - `puzzles-plaintext.json` kept out of the repo (or in a private branch / local only) — this is the source of truth
  - npm script: `npm run encrypt` to regenerate `puzzles.json` after adding new puzzles
  - Script also assigns `releaseDate` fields based on the launch date + puzzle order

- [x] **9.3 — Runtime decryption in StaticPuzzleProvider**
  - `StaticPuzzleProvider` fetches `puzzles.json` and decrypts entries on demand using Web Crypto API
  - Decrypts only the puzzle(s) needed: daily puzzle uses today's date, archive uses the stored `releaseDate`
  - Past puzzles (released dates) are decryptable; future dates will also decrypt if a user changes their clock — this is acceptable, as the goal is casual spoiler prevention not DRM
  - Decrypted results cached in memory (`shareReplay`) so crypto runs once per session per puzzle

- [x] **9.4 — Library view adaptation**
  - Simpler than planned: the library already hides unreleased puzzles entirely (date filter), so released cards just decrypt for full details and future puzzles never render — no generic-title state needed

- [x] **9.5 — Migration and tooling**
  - Migrate existing puzzles into the new encrypted format
  - Update `CLAUDE.md` with the workflow: edit `puzzles-plaintext.json` → run `npm run encrypt` → commit `puzzles.json`
  - Validate that all puzzles decrypt correctly before committing

---

## Open Questions / Future Considerations

- **Puzzle Editor**: Should we build a UI for creating/testing new puzzles?
- **Difficulty Scaling**: Should daily puzzles get harder throughout the week (Mon=easy, Sun=hard)?
- **Leaderboards**: If accounts are added later, should there be time-based leaderboards?
- **Offline Support**: Service worker for PWA / offline play?
- **Sound Effects**: Audio feedback for drops, completions, wins?
