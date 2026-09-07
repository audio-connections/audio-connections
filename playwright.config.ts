import { defineConfig, devices } from '@playwright/test';

const CI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: CI,
  // One retry in CI so a transient server/navigation hiccup doesn't fail the
  // deploy; the retry is what carries a trace (see `trace` below).
  retries: CI ? 1 : 0,
  // Each test gets its own isolated browser context, so localStorage never
  // leaks between them — parallel runs are safe. Playwright defaults to half
  // the cores; GitHub's hosted Ubuntu runner has 4 and the suite is mostly
  // waiting on the browser, so use all of them there. Locally the default
  // measured best (16 workers on 16 cores just added contention).
  workers: CI ? '100%' : undefined,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:5173',
    // Tracing costs a few percent per test. Locally keep it for any failure;
    // in CI record it only on the retry so the common all-green run pays
    // nothing and a real failure still uploads a trace.
    trace: CI ? 'on-first-retry' : 'retain-on-failure',
    // Reduced motion (which makes solves near-instant) is applied per page by
    // tests/helpers/fixtures.ts, not via the `reducedMotion` option here — the
    // context option didn't reach matchMedia() with this Playwright/Chromium
    // combination, page.emulateMedia() does.
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: {
    // Serve a production build rather than the dev server: one bundled
    // script per page load instead of dozens of on-demand transforms, which
    // is the fixed cost every one of the ~50 page loads pays (and what the
    // deploy actually ships). `vite build` skips the tsc step — `npm run
    // typecheck` covers that separately. Locally an already-running dev
    // server on :5173 is reused instead (reuseExistingServer), so `npm run
    // dev` + `npm test` still works for iterating on a fix.
    command: 'npx vite build --logLevel error && npx vite preview --port 5173 --strictPort',
    url: 'http://localhost:5173',
    reuseExistingServer: !CI,
    timeout: 120_000,
  },
});
