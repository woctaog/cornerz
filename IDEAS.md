# Cornerz — Future Ideas

Brainstormed improvements beyond the implementation plan, roughly ordered by
impact-per-effort within each section. Nothing here is committed work — treat
this as a menu.

## Gameplay & Content

- **Hint system** — one free hint per puzzle: reveal a corner word's position, or
  flash which placed words *don't* belong in a line. Track hint usage in stats and
  the share card (e.g. an asterisk), so hint-free solves stay bragging-worthy.
- **Hard mode toggle** — hide the "One Away!" toast and center category reveals
  until the whole puzzle is done. Wordle-style optional flex for veterans.
- **Difficulty-scaled week** — schedule dailies so Monday is easiest and
  Saturday/Sunday hardest (the plan's open question; needs enough puzzle inventory
  and a difficulty tag audit first).
- **Practice/random mode** — a "Random unplayed puzzle" button in the library, so
  new players can binge the archive without picking one by hand.
- **Puzzle of the week archive highlights** — surface the highest-rated puzzle
  (per `rating` in puzzles.json) as a "Editor's pick" card in the library.
- **In-browser puzzle editor** — evolve the submit form into a live editor with
  the actual game board in "author mode": place words, auto-check the corner ring
  (validator already exists), then playtest before submitting. Would raise
  submission quality dramatically.
- **Colorblind-friendly mode** — add pattern/shape coding (dots, stripes) on top
  of the four difficulty colors, selectable in a small settings menu.

## Social & Retention

- **Share card upgrades** — include streak count and solve order emoji already;
  add an image share (canvas-rendered card) for platforms that strip text
  formatting.
- **"Challenge a friend" links** — share a `/play/:id` link with your result
  hash appended; the friend sees "Beat 0 mistakes?" after they solve.
- **Push/notification opt-in (PWA)** — service worker + install prompt + optional
  daily reminder. PWA also unlocks offline play, which the static architecture is
  perfectly suited for (Open Question in the plan).
- **Milestone celebrations** — small one-off animations for 7/30/100-day streaks
  and first perfect solve; store shown-milestones in localStorage.

## Architecture & Tooling

- **Backend puzzle API** — the `PuzzleProvider` abstraction is ready; a tiny API
  (e.g. Cloudflare Workers + KV) would enable server-side daily gating (no
  clock-change spoilers), submission ingestion without Basin, and telemetry.
- **Cloud-synced stats** — optional account (or anonymous sync code) so streaks
  survive device changes; `StatsProvider` abstraction already supports a swap.
- **Analytics for puzzle quality** — record per-puzzle mistake distributions
  (anonymous, aggregate) to replace gut-feel `solveRating` with real data, and
  feed it back into PUZZLE_EVALUATION.md scoring.
- **CI deploy pipeline** — GitHub Action: on push to main run validate + build +
  e2e (chromium), then auto-deploy to gh-pages. Removes the manual `npm run
  deploy` step and guards against broken deploys.
- **Unit test coverage** — Karma is configured but there are no meaningful specs;
  the line-checking, corner-locking, and streak math in `game-board` /
  `local-stats-provider` are pure logic begging for fast unit tests.
- **Refactor game-board component** — at ~1000 lines it now mixes board state,
  daily gating, selection, announcements, and modals. Extract a `BoardStateService`
  and a `SelectionService`; would make hard mode / hints much easier to add.

## Polish

- **Sound effects** — soft click on placement, chime on line completion, fanfare
  on win; must be off by default with a persisted toggle (Open Question in plan).
- **Haptics on mobile** — `navigator.vibrate` pulses for placement/completion
  where supported; pairs well with the sound toggle.
- **Tile placement polish** — animate the tile flying from bank to cell (FLIP
  animation) instead of teleporting; CDK drag already gives coordinates.
- **Onboarding walkthrough** — first-visit interactive tutorial that places two
  tiles with the user on a mini 3-word example, instead of the static help modal.
