import { test as setup } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('accept cookies', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Look for the "Alle akzeptieren" button and click it if it exists
    // We use a broad selector to catch potential cookie banners
    const acceptButton = page.getByRole('button', { name: 'Alle akzeptieren' });

    if (await acceptButton.isVisible()) {
        await acceptButton.click();
        // Wait a bit for the cookie to be set and banner to disappear
        await page.waitForTimeout(1000);
    }

    await page.context().storageState({ path: authFile });
});
