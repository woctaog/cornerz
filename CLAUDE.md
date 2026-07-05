# Cornerz - Claude Instructions

## Workflow Rules
- After any code change, update `FEATURES.md` at the repo root to reflect new, modified, or removed features
- **Puzzle editing workflow (encrypted puzzles)**: `src/assets/puzzles.json` contains AES-GCM-encrypted puzzles and must never be edited by hand. To add or edit puzzles:
  1. Edit `tools/puzzles-plaintext.json` (the gitignored source of truth; if missing, reconstruct it with `npm run decrypt`)
  2. Run `npm run validate` to check the puzzles
  3. Run `npm run encrypt` to regenerate `src/assets/puzzles.json` (round-trip verified automatically)
  4. Commit only the encrypted `src/assets/puzzles.json`
  - The encryption scheme (PBKDF2 key from releaseDate, AES-256-GCM) is defined in `tools/puzzle-crypto.js` and must stay in sync with the runtime decryption in `src/app/services/static-puzzle-provider.ts`
- **Submit form preview sync**: The puzzle preview in `submit-puzzle.component` must always match the visual style of the real game board. When changing game tile styles (`game-tile.component.scss`), grid cell styles (`game-board.component.scss`), or center indicator styles, apply the same changes to the preview's SCSS and HTML in `submit-puzzle.component`.
