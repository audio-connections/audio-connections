import { test, expect, type Page } from './helpers/fixtures';
import { gotoDay, groupByTheme, readTrackIds, selectIds } from './helpers/game';

async function winDay(page: Page): Promise<void> {
  const themes = groupByTheme(await readTrackIds(page));
  for (let t = 0; t < 4; t++) {
    await selectIds(page, themes.get(t)!);
    await page.getByTestId('submit-btn').click();
    await expect(page.getByTestId(`solved-row-${t}`)).toBeVisible();
  }
  await expect(page.getByTestId('end-panel')).toBeVisible();
}

test.describe('share style', () => {
  test('defaults to simple and switches to detailed from Settings', async ({ page }) => {
    await gotoDay(page, 1);
    await winDay(page);

    const share = page.getByTestId('share-text');
    await expect(share).toHaveAttribute('data-share-style', 'simple');
    expect((await share.textContent())!.split('\n')).toHaveLength(5);
    await expect(share).not.toContainText('connections.audio');

    await page.getByTestId('settings-trigger').click();
    await expect(page.getByTestId('share-style-simple')).toHaveAttribute('aria-checked', 'true');
    await page.getByTestId('share-style-detailed').click();
    await expect(page.getByTestId('share-style-detailed')).toHaveAttribute('aria-checked', 'true');
    await page.getByRole('button', { name: 'Close settings' }).click();

    await expect(share).toHaveAttribute('data-share-style', 'detailed');
    await expect(share).toContainText('Audio Connections 1 ·');
    await expect(share).toContainText('Mixtape Mastered · flawless');
    await expect(share).toContainText('https://connections.audio');
    expect((await share.textContent())!.split('\n')).toHaveLength(7);
  });

  test('the preference survives a reload', async ({ page }) => {
    await gotoDay(page, 1);
    await page.getByTestId('settings-trigger').click();
    await page.getByTestId('share-style-detailed').click();
    await page.reload();
    await page.getByTestId('settings-trigger').click();
    await expect(page.getByTestId('share-style-detailed')).toHaveAttribute('aria-checked', 'true');
  });
});
