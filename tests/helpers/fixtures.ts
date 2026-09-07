// Shared Playwright `test` for every spec in tests/.
//
// Two per-page adjustments, both about speed and determinism:
//
// 1. Reduced motion. styles.css clamps --match-pulse-ms and --exit-anim-ms to
//    1ms under prefers-reduced-motion, and the session hook reads its solve
//    timers from those same variables, so a correct guess settles in a couple
//    of milliseconds instead of ~1s — the single biggest cost in tests that
//    solve all four groups. Applied via page.emulateMedia() rather than the
//    `reducedMotion` context option in playwright.config.ts: with Playwright
//    1.62 + the Chromium headless shell the option never reached matchMedia().
//    A test that asserts on the animation itself opts out with
//    `test.use({ realMotion: true })`.
//
// 2. Web fonts served locally. index.html loads four families from Google
//    Fonts; that stylesheet and its font files are subresources every
//    page.goto() waits on before `load` fires. Under a parallel run the
//    third-party fetches were the slowest part of each page load and, now and
//    then, stalled long enough to hit the 30s navigation timeout. The fixture
//    answers the stylesheet with an empty one (system fallbacks render) and
//    drops the font files. Set PW_REAL_FONTS=1 to run against the live fonts
//    when checking typography-dependent layout.
import { test as base } from '@playwright/test';

const REAL_FONTS = !!process.env.PW_REAL_FONTS;

export const test = base.extend<{ realMotion: boolean }>({
  realMotion: [false, { option: true }],
  page: async ({ page, realMotion }, use) => {
    if (!REAL_FONTS) {
      await page.route('https://fonts.googleapis.com/**', (route) =>
        route.fulfill({ contentType: 'text/css', body: '' }),
      );
      await page.route('https://fonts.gstatic.com/**', (route) => route.abort());
    }
    if (!realMotion) await page.emulateMedia({ reducedMotion: 'reduce' });
    await use(page);
  },
});

export { expect, devices } from '@playwright/test';
export type { Page } from '@playwright/test';
