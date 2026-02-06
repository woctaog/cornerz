# Cornerz

A casual word puzzle game where players arrange 12 words on the edges of a 4x4 grid so that each complete line of 4 words belongs to the same category. Inspired by NYT Connections, but with a spatial twist.

## How to Play

The game presents a **4x4 grid** with the 4 center cells disabled, leaving 12 playable edge positions arranged in 4 lines:

```
X  X  X  X       ← Top line
X  ·  ·  X
X  ·  ·  X
X  X  X  X       ← Bottom line
↑           ↑
Left        Right
line        line
```

You're given **12 words** and **4 categories**. Each word belongs to at least one category, and some words belong to two (those are the tricky ones — they sit at the corners where two lines intersect).

**Goal**: Place all 12 words so that each of the 4 lines (top, bottom, left, right) contains exactly the 4 words from one category.

### Interactions

- **Drag and drop** words from the tile bank to grid cells (desktop)
- **Tap to select** a word, then tap a cell to place it (mobile-friendly)
- **Swap** tiles by dragging/tapping one onto an occupied cell
- When a line is filled with 4 words, it's automatically checked:
  - **Correct**: The line locks in place and color-codes by difficulty
  - **Incorrect**: The cells shake and the words return to the bank (counts as a mistake)

### Difficulty Colors

Each category has a difficulty level, shown when a line is completed:

- **Yellow** — Easiest
- **Green** — Medium
- **Blue** — Hard
- **Purple** — Hardest

### Win Condition

Complete all 4 lines to win. The game tracks your mistakes and shows a results screen with a star rating.

### Locking Rules

- When a line is completed, its tiles remain correct but can be reordered within that same line.
- Tiles from a completed line cannot be moved to a different line or back to the bank.
- A corner tile becomes locked (not draggable) once it is correct for both intersecting completed lines.

## Tech Stack

- **Framework**: Angular 14
- **Drag & Drop**: Angular CDK
- **Styling**: SCSS (responsive, mobile-first)
- **Data**: Static JSON (`src/assets/puzzles.json`)

## Quick Start

```bash
npm install
npm start
```

Open http://localhost:4200 in your browser.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── game-board/        # Main grid, drag-drop logic, game state
│   │   ├── game-tile/         # Draggable word tile
│   │   └── win-modal/         # End-of-game results overlay
│   ├── services/
│   │   └── game.service.ts    # Puzzle data loading
│   ├── app.module.ts
│   └── app.component.*
├── assets/
│   └── puzzles.json           # Puzzle definitions
└── styles.scss
```

## Puzzle Format

Puzzles are defined in `src/assets/puzzles.json`:

```json
{
  "id": 1,
  "title": "Cornerz Puzzle 1",
  "description": "Arrange the words in the 4x4 grid",
  "words": ["RING", "CHAIN", "PENDANT", "BAND", "SCALE", "NOTE", "PITCH", "BAT", "BASE", "DIAMOND", "SQUARE", "CIRCLE"],
  "categories": [
    { "id": 1, "name": "Jewelry",          "difficulty": 1, "words": ["RING", "CHAIN", "PENDANT", "BAND"] },
    { "id": 2, "name": "Geometric Shapes",  "difficulty": 2, "words": ["DIAMOND", "SQUARE", "CIRCLE", "RING"] },
    { "id": 3, "name": "Music Terms",       "difficulty": 3, "words": ["BAND", "SCALE", "NOTE", "PITCH"] },
    { "id": 4, "name": "Baseball Terms",    "difficulty": 4, "words": ["PITCH", "BAT", "BASE", "DIAMOND"] }
  ]
}
```

Each puzzle needs exactly 4 categories with 4 words each. Words shared between two categories (like RING in both Jewelry and Shapes) are the corner pieces that make the puzzle work.

## Development

```bash
npm start          # Dev server at localhost:4200
npm run build      # Production build to dist/
npm test           # Unit tests (Karma/Jasmine)
```

## Roadmap

See [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) for the full development roadmap including Playwright E2E tests, daily puzzles, stats tracking, share results, and more.
