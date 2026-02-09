import { test, expect, Page } from '@playwright/test';

async function getBankWords(page: Page): Promise<string[]> {
  const words = await page.locator('.bank-tile-wrapper .word').allTextContents();
  return words.map((w) => w.trim());
}

async function placeTile(page: Page, word: string, cellIndex: number) {
  await page.locator('.bank-tile-wrapper', { hasText: word }).click();
  await page.locator(`#grid-cell-${cellIndex}`).click();
}

async function fillLine(page: Page, placements: [string, number][]) {
  for (const [word, cellIndex] of placements) {
    await placeTile(page, word, cellIndex);
  }
}

async function solvePuzzle(page: Page) {
  await fillLine(page, [['RING', 0], ['CHAIN', 1], ['PENDANT', 2], ['BAND', 3]]);
  await expect(page.locator('#grid-cell-0')).toHaveClass(/completed/);

  await fillLine(page, [['SQUARE', 4], ['CIRCLE', 8], ['DIAMOND', 12]]);
  await expect(page.locator('#grid-cell-4')).toHaveClass(/completed/);

  await fillLine(page, [['SCALE', 7], ['NOTE', 11], ['PITCH', 15]]);
  await expect(page.locator('#grid-cell-7')).toHaveClass(/completed/);

  await fillLine(page, [['BAT', 13], ['BASE', 14]]);
  await expect(page.locator('app-win-modal .modal')).toBeVisible({ timeout: 5000 });
}

test.describe('Regression safety net', () => {
  test('tile bank renders 12 tiles and order is shuffled across loads', async ({ page }) => {
    await page.goto('/#/?puzzle=1');
    await expect(page.locator('.bank-tile-wrapper')).toHaveCount(12);

    const initialOrder = await getBankWords(page);
    let sawDifferentOrder = false;

    for (let attempt = 0; attempt < 5; attempt++) {
      await page.reload();
      await expect(page.locator('.bank-tile-wrapper')).toHaveCount(12);
      const nextOrder = await getBankWords(page);
      if (nextOrder.join('|') !== initialOrder.join('|')) {
        sawDifferentOrder = true;
        break;
      }
    }

    expect(sawDifferentOrder).toBeTruthy();
  });

  test.describe('visual snapshots (chromium)', () => {
    test.skip(({ browserName }) => browserName !== 'chromium', 'Visual baselines are captured on chromium only.');

    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.addInitScript(() => {
        Math.random = () => 0.123456789;
      });
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation: none !important;
            transition: none !important;
          }
        `,
      });
    });

    test('empty board snapshot', async ({ page }) => {
      await page.goto('/#/?puzzle=1');
      await expect(page.locator('.game-board')).toBeVisible();
      await expect(page).toHaveScreenshot('empty-board-mobile.png', { fullPage: true });
    });

    test('mid-game snapshot', async ({ page }) => {
      await page.goto('/#/?puzzle=1');
      await expect(page.locator('.game-board')).toBeVisible();

      await placeTile(page, 'RING', 0);
      await placeTile(page, 'CHAIN', 1);
      await placeTile(page, 'SQUARE', 4);
      await placeTile(page, 'SCALE', 7);

      await expect(page).toHaveScreenshot('mid-game-mobile.png', { fullPage: true });
    });

    test('win snapshot', async ({ page }) => {
      await page.goto('/#/?puzzle=1');
      await expect(page.locator('.game-board')).toBeVisible();

      await solvePuzzle(page);
      await expect(page).toHaveScreenshot('win-mobile.png', { fullPage: true });
    });
  });
});
