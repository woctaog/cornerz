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

- [x] **1.4 — Puzzle validation tooling**
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

- [ ] **3.1 — Expand puzzle library**
  - Create at least 10 complete, playtested puzzles
  - Organize puzzles with metadata: difficulty (easy/medium/hard), theme, author, date
  - Update `puzzles.json` schema to include metadata fields

- [ ] **3.2 — Daily puzzle system**
  - Determine daily puzzle by date (e.g., puzzle index = days since launch date)
  - Show the daily puzzle prominently on the home/landing page
  - Prevent replaying the daily puzzle once completed (store completion in localStorage)
  - Show a countdown timer to the next daily puzzle

- [ ] **3.3 — Puzzle archive / library view**
  - Create a new route `/library` with a grid/list of all available puzzles
  - Show puzzle metadata: title, difficulty, completion status (checkmark if solved)
  - Allow filtering by difficulty or completion status
  - Clicking a puzzle navigates to the game board with that puzzle loaded

- [ ] **3.4 — Refactor PuzzleService for API-readiness**
  - Define a clean `PuzzleProvider` interface with methods:
    - `getDailyPuzzle(): Observable<Puzzle>`
    - `getPuzzleById(id: number): Observable<Puzzle>`
    - `getLibrary(): Observable<PuzzleSummary[]>`
  - Implement `StaticPuzzleProvider` that reads from JSON
  - Use Angular dependency injection so swapping providers is a one-line change

### Phase 4: Local Progress & Stats
**Goal**: Track player stats in localStorage for a sense of progression.

- [ ] **4.1 — Stats tracking service**
  - Create `StatsService` backed by localStorage
  - Track per-puzzle: completed (bool), mistakes, completion order, date completed
  - Track aggregate stats: total puzzles solved, current streak, max streak, average mistakes

- [ ] **4.2 — Stats display**
  - Add a stats modal/page accessible from the header
  - Show: games played, current streak, max streak, average mistakes
  - Show a distribution chart of mistake counts

- [ ] **4.3 — Streak system**
  - Track daily puzzle streaks (consecutive days with a completed daily puzzle)
  - Show streak indicator in the header/navbar
  - Store last completion date to calculate streaks

### Phase 5: Share Results
**Goal**: Let players share their results in a spoiler-free format.

- [ ] **5.1 — Generate shareable result card**
  - Create an emoji grid representation of the solve:
    - Each line gets its difficulty color emoji (🟨 Yellow, 🟩 Green, 🟦 Blue, 🟪 Purple)
    - Show order lines were completed in and whether mistakes were made on each
    - Example output:
      ```
      Cornerz #42
      🟨 🟩 🟪 🟦
      Mistakes: 2
      ```
  - Include puzzle number and mistake count

- [ ] **5.2 — Copy to clipboard**
  - "Share" button on the win screen
  - Copies the emoji result to clipboard with a confirmation toast
  - Use `navigator.clipboard.writeText()` with fallback

- [ ] **5.3 — (Optional) Web Share API**
  - On mobile, use the native Web Share API (`navigator.share()`) to open the share sheet
  - Fallback to clipboard copy on unsupported browsers

### Phase 6: Animations & Visual Polish
**Goal**: Make the game feel satisfying and premium.

- [ ] **6.1 — Tile animations**
  - Entrance animation: tiles stagger-fade-in when puzzle loads
  - Drop animation: smooth snap-to-grid with slight overshoot/bounce
  - Line complete: tiles flash/pulse green with a ripple effect
  - Win animation: celebratory effect (confetti, glow burst, or cascading tile flips)

- [ ] **6.2 — UI/UX refinements**
  - Redesign the header with a clean logo/wordmark
  - Add a consistent color palette and design tokens (CSS custom properties)
  - Improve typography hierarchy
  - Add subtle background patterns or gradients
  - Dark mode support (respect `prefers-color-scheme`, toggleable)

- [ ] **6.3 — Loading and transition states**
  - Skeleton loader while puzzle data loads
  - Smooth route transitions between library and game views
  - Button press states and micro-interactions

- [ ] **6.4 — Accessibility**
  - Ensure all interactive elements are keyboard-navigable
  - Add ARIA labels to grid cells, tiles, and controls
  - Ensure sufficient color contrast ratios
  - Screen reader announcements for line completions and game events

### Phase 7: Navigation & App Shell
**Goal**: Structure the app with proper routing and navigation.

- [ ] **7.1 — App shell and routing**
  - Define routes:
    - `/` — Home / daily puzzle landing
    - `/play/:id` — Play a specific puzzle
    - `/library` — Browse all puzzles
    - `/stats` — Player stats
  - Add a top navigation bar with links: Daily, Library, Stats
  - Handle 404 / unknown routes

- [ ] **7.2 — Home / landing page**
  - Show today's daily puzzle front-and-center
  - Quick-access to the puzzle library
  - Show current streak and basic stats summary

---

## Data Models

### Puzzle (enhanced)
```typescript
interface Puzzle {
  id: number;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  author?: string;
  datePublished?: string;       // ISO date string
  words: string[];
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
  difficulty: number; // 1=Yellow(easy), 2=Green, 3=Blue, 4=Purple(hard)
  words: string[];
}

interface PuzzleSummary {
  id: number;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  datePublished?: string;
}
```

### Player Stats (localStorage)
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

## File Structure (Target)

```
src/
├── app/
│   ├── components/
│   │   ├── game-board/           # Main game grid (existing, enhanced)
│   │   ├── game-tile/            # Draggable word tile (existing, enhanced)
│   │   ├── win-modal/            # End-of-game overlay (NEW)
│   │   ├── share-card/           # Shareable emoji result (NEW)
│   │   ├── stats-display/        # Stats modal/page (NEW)
│   │   ├── puzzle-card/          # Puzzle preview in library (NEW)
│   │   ├── countdown-timer/      # Daily puzzle countdown (NEW)
│   │   └── header/               # Top nav bar (NEW)
│   ├── pages/
│   │   ├── home/                 # Daily puzzle landing (NEW)
│   │   ├── play/                 # Game play view (refactored from current)
│   │   ├── library/              # Puzzle browse/filter (NEW)
│   │   └── stats/                # Full stats page (NEW)
│   ├── services/
│   │   ├── puzzle.service.ts     # Puzzle data provider (refactored)
│   │   ├── stats.service.ts      # LocalStorage stats tracking (NEW)
│   │   └── share.service.ts      # Share/clipboard logic (NEW)
│   ├── models/
│   │   ├── puzzle.model.ts       # Puzzle interfaces (NEW, extracted)
│   │   ├── stats.model.ts        # Stats interfaces (NEW)
│   │   └── game.model.ts         # Game state interfaces (NEW)
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.module.ts
│   └── app-routing.module.ts
│   ├── styles/
│   │   ├── _variables.scss       # Design tokens (NEW)
│   │   ├── _animations.scss      # Reusable animation keyframes (NEW)
│   │   └── _mixins.scss          # SCSS mixins (NEW)
├── assets/
│   └── puzzles.json              # Puzzle data (expanded)
├── index.html
├── styles.scss                   # Global styles (enhanced)
└── ...
```

---

## Implementation Order (Recommended)

| Priority | Phase | Rationale |
|----------|-------|-----------|
| 1st      | Phase 1 (Core Polish) | Must-have foundation before features |
| 2nd      | Phase 2 (E2E Tests) | Safety net before building new features |
| 3rd      | Phase 7 (Navigation) | Routing needed before library/stats pages |
| 4th      | Phase 3 (Puzzles & Daily) | Core content delivery |
| 5th      | Phase 4 (Stats) | Depends on puzzle completion tracking |
| 6th      | Phase 5 (Share) | Depends on stats/result data |
| 7th      | Phase 6 (Animations) | Polish layer applied last |

Phase 2 tests should be expanded as new features land in later phases. Phase 6 (animations) can be partially interleaved with earlier phases — e.g., adding tile animations during Phase 1 work.

---

## Open Questions / Future Considerations

- **Puzzle Editor**: Should we build a UI for creating/testing new puzzles?
- **Difficulty Scaling**: Should daily puzzles get harder throughout the week (Mon=easy, Sun=hard)?
- **Leaderboards**: If accounts are added later, should there be time-based leaderboards?
- **Offline Support**: Service worker for PWA / offline play?
- **Sound Effects**: Audio feedback for drops, completions, wins?
