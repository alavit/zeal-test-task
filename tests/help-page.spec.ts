import { test, expect } from '@playwright/test';

test.describe('Summer Spins Help Page', () => {

    test('should navigate to help page and verify content', async ({ page }) => {
        await page.goto('/games/summerspins');
        const helpLink = page.locator('[data-gtm-id="iwg.game.help.show"]');

        await helpLink.click();

        await expect(page).toHaveURL(/\/hilfe\/games\/summerspins/);
        await expect(page.getByRole('heading', { name: 'Hilfe', exact: true })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Summer Spins', exact: true })).toBeVisible();
        await expect(page.getByText('Nähere Informationen', { exact: false })).toBeVisible();
        const playButton = page.getByRole('button', { name: 'Summer Spins spielen' });
        
        await expect(playButton).toBeVisible();
    });

     test('should content of help page be equal to content of in-game help', async ({ page }) => {
        await page.goto('/games/summerspins');

        const inGameHelpLink = page.locator('svg path');
        await inGameHelpLink.click();
        const inGameHelpContent = await page.locator('.help').locator('p').textContent();
        const helpLink = page.locator('[data-gtm-id="iwg.game.help.show"]');
        await helpLink.click();

        await expect(page).toHaveURL(/\/hilfe\/games\/summerspins/);
        const helpContent = await page.locator('.help').textContent();
        expect(helpContent).toBe(inGameHelpContent);
    });
});
