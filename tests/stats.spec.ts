import { test, expect, type Page } from '@playwright/test';
import { gotoDay, groupByTheme, readTrackIds, selectIds } from './helpers/game';

async function winDay(page: Page, wrongFirst = false): Promise<void> {
  const themes = groupByTheme(await readTrackIds(page));
  if (wrongFirst) {
    await selectIds(page, [themes.get(0)![0]!, themes.get(1)![0]!, themes.get(2)![0]!, themes.get(3)![0]!]);
    await page.getByTestId('submit-btn').click();
    await page.getByTestId('deselect-btn').click();
  }
  for (let t = 0; t < 4; t++) {
    await selectIds(page, themes.get(t)!);
    await page.getByTestId('submit-btn').click();
    await expect(page.getByTestId(`solved-row-${t}`)).toBeVisible();
  }
  await expect(page.getByTestId('end-panel')).toBeVisible();
}

test.describe('lifetime record', () => {
  test('document title names the puzzle and author', async ({ page }) => {
    await gotoDay(page, 1);
    const author = await page.getByTestId('puzzle-author').first().textContent();
    await expect(page).toHaveTitle(`Audio Connections 1 · by ${author}`);
    await gotoDay(page, 2);
    await expect(page).toHaveTitle(/^Audio Connections 2 · by /);
  });

  test('settings shows the empty-record hint before any day is finished', async ({ page }) => {
    await gotoDay(page, 1);
    await page.getByTestId('settings-trigger').click();
    await expect(page.getByTestId('settings-modal')).toContainText('Nothing on the record yet');
    await expect(page.getByTestId('stats-card')).toHaveCount(0);
  });

  test('end panel shows the record including the day just finished', async ({ page }) => {
    await gotoDay(page, 1);
    await winDay(page);
    const card = page.getByTestId('end-panel').getByTestId('stats-card');
    await expect(card).toBeVisible();
    await expect(card.getByTestId('stats-played')).toHaveText('1');
    await expect(card.getByTestId('stats-win-rate')).toHaveText('100');
    await expect(card.getByTestId('stats-streak')).toHaveText('1');
    await expect(card.getByTestId('stats-max-streak')).toHaveText('1');
    await expect(card.getByTestId('stats-perfect')).toHaveText('1');
  });

  test('streak spans consecutive days and a mistake drops the flawless count', async ({ page }) => {
    await gotoDay(page, 1);
    await winDay(page);
    await gotoDay(page, 2);
    await winDay(page, true);
    const card = page.getByTestId('end-panel').getByTestId('stats-card');
    await expect(card.getByTestId('stats-played')).toHaveText('2');
    await expect(card.getByTestId('stats-streak')).toHaveText('2');
    await expect(card.getByTestId('stats-perfect')).toHaveText('1');

    // Same numbers from the Settings entry point.
    await page.getByTestId('settings-trigger').click();
    const settingsCard = page.getByTestId('settings-modal').getByTestId('stats-card');
    await expect(settingsCard.getByTestId('stats-streak')).toHaveText('2');
  });
});
