# Cornerz - Feature Reference

A complete reference of all currently built features.

---

## Core Game Mechanics

### 4x4 Grid Layout
- 16-cell grid: 12 playable edge positions, 4 permanently disabled center cells (positions 5, 6, 9, 10)
- Responsive sizing capped at 400px, scales with viewport width and height
- Maintains 1:1 aspect ratio

### Tile Bank
- Located below the game board in a 4-column grid
- Holds unplaced words; tiles move between bank and grid freely
- Words are shuffled on each puzzle load

### Drag-and-Drop (Angular CDK)
- Drag tiles from bank to grid, between grid cells, or back to bank
- Swapping: dropping on an occupied cell swaps the two tiles
- Drag preview shows tile with slight rotation and enhanced shadow
- Placeholder shown at 50% opacity while dragging
- Connected drop lists across all valid positions

### Tap-to-Place (Mobile Alternative)
- Tap a tile to select it (orange highlight with scale effect)
- Tap a grid cell to place or swap the selected tile
- Tap the bank area to return a selected grid tile to the bank
- Works alongside drag-and-drop; selection clears on drag start

---

## Line Completion & Validation

### Line Detection
- Four lines recognized: top (cells 0-3), right (3, 7, 11, 15), bottom (12-15), left (0, 4, 8, 12)
- Checked automatically after every tile placement
- A line is valid when its 4 words match exactly one category (order-independent)

### Correct Line Completion
- Matched lines lock immediately with difficulty-colored borders and backgrounds
- Locked tiles cannot be moved or returned to the bank
- Category name and difficulty stored for display on center indicators

### Invalid Line Handling
- All 4 tiles in the line shake (400ms animation) with red flash
- Mistake counter increments
- After 500ms, non-locked tiles return to the bank
- Grid is briefly locked during the shake/return animation

### Corner Word Locking
- Corner positions (0, 3, 12, 15) can belong to two lines
- Once both intersecting lines are completed, the corner tile is fully locked (cannot be moved at all)
- Single-line corners remain movable within their completed line

---

## Difficulty System

### Difficulty Levels (Per Category)
- 4 tiers: 1 = Easy (Yellow), 2 = Medium (Green), 3 = Hard (Blue), 4 = Hardest (Purple)
- Assigned per category in `puzzles.json`, not per puzzle

### Difficulty Color Coding
| Difficulty | Label   | Border    | Background | Glow          |
|-----------|---------|-----------|------------|---------------|
| 1         | Easy    | `#F9A825` | `#FFF9C4`  | Yellow shadow |
| 2         | Medium  | `#2E7D32` | `#C8E6C9`  | Green shadow  |
| 3         | Hard    | `#1565C0` | `#BBDEFB`  | Blue shadow   |
| 4         | Hardest | `#6A1B9A` | `#E1BEE7`  | Purple shadow |

Applied to completed grid cells, center indicators, solution modals, and win modal category rows.

---

## Center Indicators

### Completed Line Indicators
- When a line is completed, its corresponding center cell transforms from dark/disabled to an active colored indicator
- Mapping: top -> cell 6, right -> cell 10, bottom -> cell 9, left -> cell 5
- Displays: directional arrow (up/down/left/right), category name (auto-sized, wrapping), difficulty-colored background with glow
- Clickable to open the solution detail modal

### Solution Detail Modal (Inline)
- Triggered by clicking a center indicator
- Shows category name with difficulty badge pill, and HTML-formatted solution content explaining word connections
- Colored top border matching difficulty
- Dark backdrop overlay, close button

---

## Win Condition & End Screen

### Win Detection
- Triggers when all 4 lines are completed
- Marks puzzle as completed in progress tracking
- For daily puzzles, saves board snapshot and locks further play

### Play Sequence Display
- Shown on the win modal between the star rating and the Share button
- Interleaved timeline of the game: colored boxes for correct lines, red ✕ for mistakes, in the exact order they occurred
- Box colors match the category difficulty (Yellow/Green/Blue/Purple via `data-difficulty`)
- Capped at 20 items; overflow shown as "+N more"
- Rows auto-balance: picks 4–6 items per row to maximize the last row's fullness (avoids a lone box on its own line)
- Compact on short screens (≤700px): smaller boxes, tighter gaps

### Win Modal - Results View (Default)
- "Puzzle Complete!" heading with animated entrance (slide-up + fade-in)
- Star rating (★★★ / ★★☆ / ★☆☆ / ☆☆☆) with label (Perfect! / Great! / Good / Keep practicing!) based on mistake count
- Mistake count displayed as a stat below the stars
- **Responsive compact layout** on short screens (≤700px viewport height): stars and mistake count collapse into a single horizontal row with a divider; rating label hidden; padding, margins, and font sizes tightened throughout so the modal fits without scrolling
- "Share Result" button copies spoiler-free emoji result to clipboard (see Shareable Result Card)
- Category list: 4 rows sorted by difficulty (ascending), each with colored left border, category name, difficulty label, and chevron arrow
- Tapping a category row navigates to the solution detail view
- Action buttons: Play Again, Next Puzzle, Close

### Win Modal - Solution Detail View
- Back button returns to results view
- Category name heading with colored difficulty badge pill
- HTML-rendered solution body explaining the theme and word connections
- "Back to Results" button

### Shareable Result Card
- "Share Result" button on the win screen shares a spoiler-free emoji summary
- On mobile/devices with Web Share API support, tapping opens the native share sheet (`navigator.share`)
- On unsupported browsers, falls back to copying to clipboard via `navigator.clipboard`; button shows "Copied!" for 2 seconds
- Each completed line represented by a colored emoji matching its difficulty: 🟨 (Easy), 🟩 (Medium), 🟦 (Hard), 🟪 (Hardest)
- ❌ shown for each incorrect line submission (mistake), interleaved in order
- Emojis in the exact order events occurred during gameplay
- Format: `Cornerz #<id>` / emoji row / `Mistakes: <count>`
- Completion order resets on Play Again or puzzle reload
- For restored daily puzzles, order is reconstructed from saved state

### Post-Win Board
- Solved board remains visible after closing the win modal
- Center indicators remain clickable to view solutions
- "Play Again" reshuffles and resets the same puzzle
- **"View Results" button** appears below the board when the win modal is dismissed; clicking it re-opens the modal

---

## Stats Tracking

### Streak Badge
- **🔥 N** badge appears in the game board header when the player has an active daily puzzle streak
- Hidden when streak is 0 (no clutter for new players)
- Clicking the badge opens the stats modal
- Updates immediately after completing a daily puzzle (no page reload needed)

### Stats Modal
- Bar chart SVG icon button in the game board header opens the stats modal (sits alongside the "?" help button); replaced emoji to avoid rendering issues on some platforms
- Click outside the modal or the ✕ button to close
- Shows four headline stats: **Played**, **Streak**, **Best Streak**, **Avg Mistakes**
- Shows a **Mistake Distribution** bar chart — each row is a mistake count with a proportional CSS bar and game count
- If no puzzles have been completed yet, shows an empty-state message

### StatsProvider (abstracted for future sign-in)
- Abstract `StatsProvider` class (`src/app/services/stats-provider.ts`) mirrors the `PuzzleProvider` pattern
- Swap implementations via Angular DI — change one line in `app.module.ts` to point at a backend API provider
- Current implementation: `LocalStatsProvider` — stores all data in `localStorage` under key `cornerz-stats-v1`

### Per-Puzzle Results (`PuzzleResult`)
- Recorded automatically when any puzzle with a valid ID is won
- Stores: `puzzleId`, `completedAt` (ISO UTC datetime), `mistakes`, `gameSequence`, `completionOrder`, `isDaily`
- If a puzzle is replayed with fewer mistakes, the best result is kept

### Aggregate Stats (`PlayerStats`)
- Computed on demand from stored results via `StatsProvider.getAggregate()`
- `totalSolved` — total puzzles completed
- `currentStreak` — consecutive daily puzzle days ending today (or yesterday if today's not yet done)
- `maxStreak` — longest daily streak ever
- `averageMistakes` — mean mistakes across all completed puzzles
- `mistakeDistribution` — histogram of mistake counts (e.g., `{ 0: 5, 1: 3, 2: 1 }`)
- Streak uses local timezone for date comparison to avoid UTC midnight boundary issues

---

## Animations

### Tile Entrance (Bank Load)
- When a puzzle loads, bank tiles stagger-fade-in one by one (0.3s each, 45ms per-tile delay offset)
- Each tile fades from opacity 0 + slight scale/translate to full visibility
- Re-animates whenever tiles re-enter the bank (e.g. after an invalid line is rejected)

### Confetti (Win)
- 50 confetti pieces fall from the top of the screen when the win modal appears
- Colors match the game palette: yellow, green, blue, purple, white, and orange variants
- Each piece has a randomized position, size, fall duration, delay, and rotation
- Pieces are `position: fixed; z-index: 1200; pointer-events: none` — appear above the modal without blocking interaction
- Fade out in the last 20% of their fall, then disappear (`animation-fill-mode: forwards`)

### Bounce (Tile Placement)
- Plays on successful placement: scale 1 -> 1.1 -> 0.95 -> 1 (300ms)

### Shake (Invalid Line)
- Horizontal oscillation on all 4 cells (400ms) with red background flash

### Pulse Border (Drop Targets)
- Valid empty cells pulse blue while dragging or with a tile selected (1.5s infinite loop)

### Drag Feedback
- Dragging over: blue border + light blue background
- Receiving: orange border + light orange background

### Loading & Transition States
- Skeleton loaders with shimmer animation while data loads: game board (header + 4x4 grid + bank) and library (4 placeholder cards); screen-reader-only "Loading..." text accompanies them
- Routed views (game, library, submit) fade/slide in on navigation (0.22s)
- Global button micro-interactions: scale-down on press (`:active`), smooth hover/background transitions
- `prefers-reduced-motion: reduce` collapses all animations/transitions to near-zero duration

---

## Accessibility

### Keyboard Navigation
- Bank tiles and playable grid cells are focusable (`tabindex="0"`, `role="button"`); Enter/Space selects, places, or swaps — mirroring tap-to-place
- Escape closes the topmost modal (solution → help → stats → win) or clears the current tile selection
- Delete/Backspace returns a selected grid tile to the bank
- Center indicators (completed lines) and the streak badge are keyboard-operable
- Consistent `:focus-visible` outlines on all interactive elements (brand color globally; blue ring on board elements)

### Screen Reader Support
- `aria-live="polite"` status region announces: tile selected/placed, line solved (with category name and progress), invalid line (with one-away hint and mistake count), tile returned, and puzzle win
- Grid cells expose row/column position, contents, and state via `aria-label`; bank tiles use `aria-pressed` for selection
- All modals (help, solution, stats, win) use `role="dialog"` + `aria-modal="true"` with labels
- Skeleton loaders are `aria-hidden` with visually-hidden text alternatives (`.sr-only` utility)

### Contrast
- Yellow (difficulty 1) center indicators and difficulty labels use dark brown text instead of white for WCAG contrast (mirrored in the submit-form preview)

---

## Daily Puzzle System

### Daily Puzzle Rotation
- A different puzzle loads each day: `puzzleId = daysSince(PUZZLE_START_DATE) + 1`
- `PUZZLE_START_DATE` is a single constant in `src/app/constants/daily.constants.ts` — change it there to shift the entire schedule
- Currently set to March 25, 2026 (day 0 = puzzle 1, day 1 = puzzle 2, etc.)
- If the computed ID exceeds available puzzles, falls back to the last puzzle in the library
- Default route (no query param) loads the daily puzzle

### Countdown Timer
- Displays time remaining until the next daily puzzle (HH:MM:SS)
- Updates every second, shown in header area
- Calculates time until local midnight

### Daily Lock After Completion
- Once solved, the daily puzzle becomes unplayable for the rest of the day
- All interaction disabled (drag, tap, placement)
- "Come back tomorrow" card shown with countdown
- Board snapshot preserved so the solved state is visible on reload

### Board State Persistence
- Grid snapshot saved to localStorage on daily completion
- On page reload, restores the exact solved grid layout
- Fallback: if snapshot is missing/corrupted, reconstructs solved grid from category data by trying all category-to-line permutations

---

## App Shell & Navigation

### Top Navigation Bar
- Global nav in the app shell (`app.component`): CORNERZ gradient brand (links home) + Daily / Library / Stats / Submit links
- Active route shown as a highlighted pill (`routerLinkActive`; Daily uses exact matching)
- Brand wordmark lives in the nav (removed from the game header)

### Routes
- `/` — daily puzzle (home/landing)
- `/play/:id` — play a specific puzzle (used by library Play buttons and win-modal Next Puzzle)
- `/library` — puzzle archive
- `/stats` — stats page (routed wrapper around the stats modal; closing returns home)
- `/submit` — community puzzle submission
- `/test-page`, `/test-page2` — dev test modes
- `**` — Page Not Found component with a link back to the daily puzzle
- Hash-based routing (`useHash: true`) throughout

---

## Puzzle Navigation

### Daily Mode
- Default route loads the daily puzzle
- `isDailyPuzzleMode` flag distinguishes from archive browsing

### Direct Puzzle Links
- Preferred: `/play/:id` route parameter
- Legacy `?puzzle=<id>` query parameter still supported on `/`
- Both support bookmarking and sharing (hash-based routing)

### Play Again
- Reloads the same puzzle with reshuffled words
- Resets grid, mistakes, and completed lines
- For locked daily puzzles, simply closes the win modal (no reset)

### Next Puzzle
- Navigates to `/play/<id + 1>`; falls back to puzzle 1 if not found

---

## Puzzle Library (Archive)

### Library View (`/library`)
- Lists only released puzzles (date ≤ today, derived from `PUZZLE_START_DATE` + puzzle id offset)
- Each puzzle card shows title, release date (e.g. "Mar 25, 2026"), description, difficulty badge, completion status, and Play button
- Puzzle date displayed below title in muted style
- Fully scrollable on all devices including iOS (`overflow-y: auto`, `-webkit-overflow-scrolling: touch`, `display: block` on host; parent `.main-container` has no `overflow: hidden` so the child scroll container is not blocked)

### Filters
- **Difficulty**: All, Easy (1), Medium (2), Hard (3) — uses puzzle-level difficulty field, not computed from categories
- **Completion**: All, Completed, Incomplete
- Filters combine with AND logic; shows count of matching puzzles

### Completion Tags
- "Completed" (green) or "Not solved" (gray) on each card
- Driven by localStorage progress data

---

## Help Modal

- Opened via "?" button in the header
- Rules summary:
  - 12 words on outer edge, 4 center cells disabled
  - Complete 4 lines (top, bottom, left, right), each matching one category
  - Corner words shared between two categories
  - Drag-and-drop or tap-to-place; swap by dropping on occupied cells
  - Correct lines lock; incorrect guesses return tiles and add mistakes
  - Win when all 4 lines solved
- "Puzzle Archive" link navigates to the library
- "Submit Your Own" link navigates to the puzzle submission form

---

## Text Fitting

### Fit-Text Directive (`appFitText`)
- Custom Angular directive for responsive text sizing within constrained containers
- `[appFitText]="maxFontSize"` sets the upper font size bound
- `[fitTextWrap]="true"` enables multi-line wrapping mode (used on center indicator labels)
- `[fitTextWrap]="false"` (default) keeps single-line and shrinks to fit (used on game tiles)
- Uses ResizeObserver and MutationObserver for dynamic recalculation
- Minimum font size: 4px

---

## Progress Tracking (localStorage)

| Key | Purpose | Format |
|-----|---------|--------|
| `cornerz-puzzle-completions` | Tracks which puzzles have been solved | `{ puzzleId: timestamp }` |
| `cornerz-daily-completions` | Tracks daily puzzle completion per day | `{ "YYYY-MM-DD": puzzleId }` |
| `cornerz-daily-snapshots` | Stores solved grid state for daily puzzles | `{ "YYYY-MM-DD": { puzzleId, gridWords[] } }` |
| `cornerz-stats-v1` | Rich per-puzzle results for stats/streaks | `{ puzzleId: PuzzleResult }` |

---

## Responsive Design

- Board width: `min(90vw, 400px, calc(100dvh - 285px))`
- Mobile breakpoint at 768px adjusts board width, font sizes, and modal widths
- Grid gaps and padding use `clamp()` for fluid scaling
- Modals capped at 85vh with scroll overflow
- Typography uses `clamp()` for responsive sizing

---

## Puzzle Data Format

Each puzzle in `puzzles.json`:
- `id`: number (positive for playable, -1 for test)
- `title`, `description`: strings
- `words`: 12 strings (all words across all categories, deduplicated)
- `categories`: array of 4 categories, each with:
  - `id`, `name`, `difficulty` (1-4)
  - `words`: 4 strings (may overlap with other categories at corner positions)
  - `solution`: HTML string explaining the theme and each word's connection

Corner words appear in exactly 2 categories; edge words appear in exactly 1.

Current puzzles: 1–6, 7 ("Puz #1"), 8 ("Puz #2"), 9 ("Cornerz Puzzle 9"), 10 ("Cornerz Puzzle 10"), 11 ("Cornerz Puzzle 11"), 12 ("Name Dropping"), 13 ("Cornerz Puzzle 13"), 14 ("Cornerz Puzzle 14", by Claude), 15 ("Cornerz Puzzle 15", by Claude)

---

## Puzzle Provider Architecture (API-Ready)

### Abstract Provider
- `PuzzleProvider` abstract class defines the data contract
- Three methods: `getDailyPuzzle()`, `getPuzzleById(id)`, `getLibrary()`
- All return RxJS `Observable`s for async compatibility

### Static Implementation
- `StaticPuzzleProvider` loads puzzles from `assets/puzzles.json` via HTTP
- Cached with `shareReplay(1)` — single fetch per session
- Daily puzzle calculated deterministically from `PUZZLE_START_DATE` in `daily.constants.ts`
- `getLibrary()` returns `PuzzleSummary` objects with computed difficulty label

### Swapping Providers
- Registered in `AppModule` via `{ provide: PuzzleProvider, useClass: StaticPuzzleProvider }`
- To switch to an API backend, create a new class extending `PuzzleProvider` and change `useClass` — no component changes needed

### Data Models
- Interfaces extracted to `src/app/models/puzzle.model.ts`: `Puzzle`, `Category`, `PuzzleSummary`, `PuzzleData`, `DIFFICULTY_LABELS`, `DIFFICULTY_COLORS`, `DIFFICULTY_EMOJIS`
- `PuzzleSummary` includes `id`, `title`, `description`, and computed `difficulty` ('easy' | 'medium' | 'hard')

---

## Shared Style System

### CSS Custom Properties (`src/styles/_variables.scss`)
- All difficulty colors defined as CSS custom properties on `:root`
- Per-level tokens: `--difficulty-{1-4}-color`, `--difficulty-{1-4}-bg`, `--difficulty-{1-4}-accent`, `--difficulty-{1-4}-glow`
- String-mapped aliases for the library: `--difficulty-easy-color`, `--difficulty-medium-color`, `--difficulty-hard-color`

### SCSS Mixins (`src/styles/_mixins.scss`)
- `difficulty-color($property)` — generates `[data-difficulty="N"]` rules mapping to `var(--difficulty-N-color)`
- `difficulty-bg($property)` — same pattern for background tokens
- `modal-backdrop` — shared fixed overlay used by help, solution, and win modals

### Grid Constants (`src/app/constants/grid.constants.ts`)
- `DISABLED_SPOTS` — Set of center cell indices (5, 6, 9, 10)
- `LINES` — Record mapping line names to cell index arrays
- `CENTER_INDICATORS` — Record mapping line names to center indicator cell indices

---

## Puzzle Validation Service

### PuzzleValidatorService (`providedIn: 'root'`)
- Reusable service for validating puzzle structure before submission or during development
- Single public method: `validate(categories: CategoryInput[])` returns `PuzzleValidationResult`
- Validation steps (all run, errors accumulate):
  1. **Structural shape** — exactly 4 categories with exactly 4 words each
  2. **Empty/whitespace checks** — per-field errors for blank names or words
  3. **Character limits** — category name max 30 chars, word max 20 chars
  4. **Duplicate words** — any word appearing 3+ times across all categories triggers a global error
  5. **Word distribution** — each word must appear in exactly 1 or 2 categories
  6. **Corner count** — exactly 4 words must be shared between 2 categories (corner words)
  7. **Solvability** — verifies at least one valid line-to-category assignment exists with 4 distinct corner words
- Public helpers: `getPermutations()` and `getSingleSharedWord()` (extracted from GameBoardComponent)
- `GameBoardComponent` now delegates to the service for permutation and shared-word logic

### Validation Interfaces
- `CategoryInput` — input shape: `{ name, words[] }`
- `CategoryValidationErrors` — per-category field errors: `{ name, words[] }`
- `PuzzleValidationErrors` — `{ global[], categories[] }`
- `PuzzleValidationResult` — `{ valid, errors }`

---

## Puzzle Submission Form

### Submit Route (`/submit`)
- Accessible via `/#/submit`
- Back button navigates to the main game

### Form Fields
- **Metadata**: Display name (required), email (required, validated on blur), puzzle title (optional)
- **Categories**: 4 category blocks, each with a category name input, a 2x2 grid of word inputs (labeled First Corner, Unique Word 1, Unique Word 2, Second Corner), and an optional "Category Description" textarea
- Category block headers display the typed category name live; fall back to "Top/Right/Bottom/Left Category" if empty
- Category name inputs have randomized placeholders generated fresh on each page load:
  - Top: `e.g. Types of [noun]`
  - Right: `e.g. _______ [noun]`
  - Bottom: `e.g. [adjective] [noun]`
  - Left: random pattern (`Homophones of X`, `Shades of X`, `Synonyms for X`, etc.)
- Word banks live in `src/app/data/placeholder-words.ts` (~500 nouns, ~140 adjectives, ~50 colors, 12 patterns)
- **Notes**: Optional textarea for additional context

### Corner Word Pre-fill (Auto-linking)
- Categories are treated as a ring: Cat1 → Cat2 → Cat3 → Cat4 → Cat1
- Each category's **First Corner** is auto-filled from the previous category's **Second Corner** — shown read-only with a blue tint and an "auto" badge
- The ring closes: Category 4's Second Corner is auto-filled from Category 1's First Corner
- Auto-fill syncs on every keystroke so corner values stay consistent without manual re-entry
- Errors on auto-filled fields are suppressed (the source field shows the error instead)

### Live Puzzle Preview
- A 4x4 grid preview updates in real time as the user fills in words
- Cell layout mirrors the actual game: Cat1=top, Cat2=right, Cat3=bottom, Cat4=left
- Corner cells (shared between two categories) shown in white with a bold border
- Each category's exclusive cells shown with a distinct background color (yellow/green/blue/purple)
- Center 4 cells mirror the game's indicator layout: show each category's name and a directional arrow (↑→↓←), colored per category
- Empty non-corner cells shown with a dashed border as a placeholder
- Legend below the grid maps colors to category names

### Validation
- Required-field errors shown after first submit attempt
- Email format validated on blur with regex
- Puzzle structure validated via `PuzzleValidatorService` with 400ms debounce on category/word changes
- Per-field errors (empty, character limits) shown inline below each input; suppressed on auto-filled fields
- Global errors (duplicate words, corner count, solvability) shown in a red-bordered summary box
- Inputs with errors highlighted with red border

### Live Puzzle Preview (Updated)
- Grid expanded to `min(100%, 400px)` (full-width up to game-board size)
- Legend/key removed
- Cell and center-label fonts use `appFitText` directive — same as real game tiles
- Styling mirrors the real game board: same container border/padding/background, tile appearance, center indicator style, and empty-cell dashed border
- **Maintenance**: preview styling must stay in sync with `game-board.component.scss` and `game-tile.component.scss` — see `CLAUDE.md` for the rule

### Submission (Basin Integration)
- On valid submit, POSTs flattened JSON to Basin with `Accept: application/json` header for AJAX response
- Payload keys: `display_name`, `email`, `title`, `notes`, `category_N_name`, `category_N_description`, `category_N_word_M`
- **Loading state**: form fields disabled via `<fieldset>`, button shows "Submitting...", opacity reduced
- **Success state**: form replaced with green confirmation card and "Back to Game" button
- **Error state**: red error message shown above submit button, form stays editable for retry
- Permission/credit notice is a **required checkbox** — must be checked before submitting; shows inline error if unchecked on submit

### Scrollability
- Form page is fully scrollable (`:host` overflow-y auto) within the fixed-height app container
- `app-submit-puzzle` given flex sizing in `.main-container` to fill available height

---

## Branding

### Favicon
- Custom SVG favicon (`src/favicon.svg`): purple gradient background (brand colors `#667eea` → `#764ba2`) with four white rounded squares representing the corner tiles of the game
- SVG favicon declared first in `index.html` for modern browsers; `.ico` fallback remains for older browsers

---

## Test Mode

- Route: `/test-page` — loads puzzle id -1 with top and left lines pre-completed; used for debugging line completion, locking, and center indicators
- Route: `/test-page2` — loads puzzle id -1 with top, left, and right lines pre-completed; only JUXTAPOSITION and RAZZMATAZZ remain in the bank, so placing either immediately triggers the win modal; used for iterating on the win modal UI
- Neither test route is visible in the puzzle library
