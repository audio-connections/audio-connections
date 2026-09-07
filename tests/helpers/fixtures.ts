// Shared Playwright `test` for every spec in tests/.
//
// Emulates prefers-reduced-motion on each page before the first navigation.
// styles.css clamps --match-pulse-ms and --exit-anim-ms to 1ms under that
// media query, and the session hook reads its solve timers from those same
// variables, so a correct guess settles in a couple of milliseconds instead of
// ~1s — the single biggest cost in tests that solve all four groups.
//
// Done as a fixture calling page.emulateMedia() rather than the `reducedMotion`
// context option in playwright.config.ts: with Playwright 1.62 + the Chromium
// headless shell the context option never reached matchMedia(), while
// emulateMedia() does.
//
// A test that asserts on the animation itself opts back out with
// `test.use({ realMotion: true })`.
import { test as base } from '@playwright/test';

export const test = base.extend<{ realMotion: boolean }>({
  realMotion: [false, { option: true }],
  page: async ({ page, realMotion }, use) => {
    if (!realMotion) await page.emulateMedia({ reducedMotion: 'reduce' });
    await use(page);
  },
});

export { expect, devices } from '@playwright/test';
export type { Page } from '@playwright/test';
