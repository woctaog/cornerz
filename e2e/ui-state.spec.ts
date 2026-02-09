import { test, expect, Page } from '@playwright/test';

// --- Helpers (shared with gameplay.spec.ts) ---

async function selectBankTile(page: Page, word: string) {
  const tile = page.locator('.bank-tile-wrapper', { hasText: word });
  await tile.click();
}

async function clickCell(page: Page, index: number) {
  await page.locator(`#grid-cell-${index}`).click();
}

async function placeTile(page: Page, word: string, cellIndex: number) {
  await selectBankTile(page, word);
  await clickCell(page, cellIndex);
}

async function getCellText(page: Page, cellIndex: number): Promise<string> {
  const cell = page.locator(`#grid-cell-${cellIndex}`);
  const tile = cell.locator('app-game-tile .word');
  if (await tile.count() === 0) return '';
  return (await tile.textContent() ?? '').trim();
}

async function bankCount(page: Page): Promise<number> {
  return page.locator('.bank-tile-wrapper').count();
}

async function fillLine(page: Page, placements: [string, number][]) {
  for (const [word, cell] of placements) {
    await placeTile(page, word, cell);
  }
}

/** Solve the full puzzle and wait for each line to lock. */
async function solveFullPuzzle(page: Page) {
  // Top: Jewelry
  await fillLine(page, [['RING', 0], ['CHAIN', 1], ['PENDANT', 2], ['BAND', 3]]);
  await expect(page.locator('#grid-cell-0')).toHaveClass(/completed/, { timeout: 10000 });

  // Left: Geometric Shapes (RING already at 0)
  await fillLine(page, [['SQUARE', 4], ['CIRCLE', 8], ['DIAMOND', 12]]);
  await expect(page.locator('#grid-cell-4')).toHaveClass(/completed/, { timeout: 10000 });

  // Right: Music Terms (BAND already at 3)
  await fillLine(page, [['SCALE', 7], ['NOTE', 11], ['PITCH', 15]]);
  await expect(page.locator('#grid-cell-7')).toHaveClass(/completed/, { timeout: 10000 });

  // Bottom: Baseball Terms (DIAMOND at 12, PITCH at 15)
  await fillLine(page, [['BAT', 13], ['BASE', 14]]);
  await expect(page.locator('#grid-cell-13')).toHaveClass(/completed/, { timeout: 10000 });
}

// ---------------------------------------------------------------------------
// 2.3 — UI state tests
// ---------------------------------------------------------------------------

test.describe('UI state', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/?puzzle=1');
    await expect(page.locator('.game-board')).toBeVisible();
  });

  test('disabled center cells reject tile placement', async ({ page }) => {
    // Select a tile from the bank
    await selectBankTile(page, 'CHAIN');

    // Center cells have pointer-events: none in CSS, so use force: true
    // to simulate what would happen if a click somehow reached them.
    for (const centerCell of [5, 6, 9, 10]) {
      await page.locator(`#grid-cell-${centerCell}`).click({ force: true });
    }

    // Bank should still have 12 tiles (nothing was placed)
    expect(await bankCount(page)).toBe(12);

    // Verify center cells have the disabled class
    for (const centerCell of [5, 6, 9, 10]) {
      await expect(page.locator(`#grid-cell-${centerCell}`)).toHaveClass(/disabled/);
    }
  });

  test('completed line tiles can be reordered within the same completed line', async ({ page }) => {
    // Complete the top line (Jewelry)
    await fillLine(page, [['RING', 0], ['CHAIN', 1], ['PENDANT', 2], ['BAND', 3]]);
    await expect(page.locator('#grid-cell-0')).toHaveClass(/completed/);

    // Move CHAIN from cell 1 to cell 2 (same completed line) - should swap with PENDANT
    await clickCell(page, 1);
    await clickCell(page, 2);

    expect(await getCellText(page, 2)).toBe('CHAIN');
    expect(await getCellText(page, 1)).toBe('PENDANT');
  });

  test('completed line tiles cannot move to a different line', async ({ page }) => {
    // Complete the top line (Jewelry)
    await fillLine(page, [['RING', 0], ['CHAIN', 1], ['PENDANT', 2], ['BAND', 3]]);
    await expect(page.locator('#grid-cell-0')).toHaveClass(/completed/);

    // Try to move CHAIN from completed top line to a different line cell
    await clickCell(page, 1);
    await clickCell(page, 7);

    // Move should be rejected
    expect(await getCellText(page, 1)).toBe('CHAIN');
    expect(await getCellText(page, 7)).toBe('');
  });

  test('completed line tiles cannot be returned to bank', async ({ page }) => {
    // Complete the top line
    await fillLine(page, [['RING', 0], ['CHAIN', 1], ['PENDANT', 2], ['BAND', 3]]);
    await expect(page.locator('#grid-cell-0')).toHaveClass(/completed/);

    // Try to select a completed tile and click bank to return it
    await clickCell(page, 1);
    await page.locator('.bank-container').click();

    // CHAIN should still be in cell 1
    expect(await getCellText(page, 1)).toBe('CHAIN');
    // Bank should have 8 tiles (12 - 4 placed on top row)
    expect(await bankCount(page)).toBe(8);
  });

  test('center indicators show correct category names and arrows for all lines', async ({ page }) => {
    await solveFullPuzzle(page);

    // Top line → center cell 6: arrow ↑, category "Jewelry"
    await expect(page.locator('#grid-cell-6 .arrow')).toHaveText('↑');
    await expect(page.locator('#grid-cell-6 .category-label')).toHaveText(/Jewelry/i);

    // Left line → center cell 5: arrow ←, category "Geometric Shapes"
    await expect(page.locator('#grid-cell-5 .arrow')).toHaveText('←');
    await expect(page.locator('#grid-cell-5 .category-label')).toHaveText(/Geometric Shapes/i);

    // Right line → center cell 10: arrow →, category "Music Terms"
    await expect(page.locator('#grid-cell-10 .arrow')).toHaveText('→');
    await expect(page.locator('#grid-cell-10 .category-label')).toHaveText(/Music Terms/i);

    // Bottom line → center cell 9: arrow ↓, category "Baseball Terms"
    await expect(page.locator('#grid-cell-9 .arrow')).toHaveText('↓');
    await expect(page.locator('#grid-cell-9 .category-label')).toHaveText(/Baseball Terms/i);
  });

  test('center indicators show correct difficulty colors', async ({ page }) => {
    await solveFullPuzzle(page);

    // Jewelry = difficulty 1 (Yellow)
    await expect(page.locator('#grid-cell-6 .center-indicator')).toHaveAttribute('data-difficulty', '1');

    // Geometric Shapes = difficulty 2 (Green)
    await expect(page.locator('#grid-cell-5 .center-indicator')).toHaveAttribute('data-difficulty', '2');

    // Music Terms = difficulty 3 (Blue)
    await expect(page.locator('#grid-cell-10 .center-indicator')).toHaveAttribute('data-difficulty', '3');

    // Baseball Terms = difficulty 4 (Purple)
    await expect(page.locator('#grid-cell-9 .center-indicator')).toHaveAttribute('data-difficulty', '4');
  });

  test('puzzle loads from URL query parameter', async ({ page }) => {
    // Puzzle 1 loaded via ?puzzle=1 in beforeEach
    await expect(page.locator('.puzzle-info h2')).toHaveText('Cornerz Daily Puzzle');
    await expect(page.locator('.bank-tile-wrapper')).toHaveCount(12);

    // Default (no param) also loads puzzle 1
    await page.goto('/#/');
    await expect(page.locator('.game-board')).toBeVisible();
    await expect(page.locator('.puzzle-info h2')).toHaveText('Cornerz Daily Puzzle');
  });
});
