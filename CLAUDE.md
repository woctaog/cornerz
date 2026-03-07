# Cornerz - Claude Instructions

## Workflow Rules
- After any code change, update `FEATURES.md` at the repo root to reflect new, modified, or removed features
- **Submit form preview sync**: The puzzle preview in `submit-puzzle.component` must always match the visual style of the real game board. When changing game tile styles (`game-tile.component.scss`), grid cell styles (`game-board.component.scss`), or center indicator styles, apply the same changes to the preview's SCSS and HTML in `submit-puzzle.component`.
