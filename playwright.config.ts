import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  // Fan out across CPU cores (Playwright defaults to ~half, which measured
  // best here — 100% just adds contention). Each test gets its own isolated
  // browser context, so localStorage never leaks between them — parallel
  // runs are safe, locally and in CI alike.
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'retain-on-failure',
    // Reduced motion (which makes solves near-instant) is applied per page by
    // tests/helpers/fixtures.ts, not via the `reducedMotion` option here — the
    // context option didn't reach matchMedia() with this Playwright/Chromium
    // combination, page.emulateMedia() does.
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
