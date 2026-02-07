import { test, expect } from '@playwright/test';

test('app loads and displays the game board', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Cornerz/);
  await expect(page.locator('app-game-board')).toBeVisible();
});
