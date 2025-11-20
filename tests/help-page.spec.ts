import { test, expect } from '@playwright/test';
import { SummerSpinsPage } from '../pages/SummerSpinsPage';
import { HelpPage } from '../pages/HelpPage';

test.describe('Summer Spins Help Page', () => {
    let summerSpinsPage: SummerSpinsPage;
    let helpPage: HelpPage;

    test.beforeEach(async ({ page }) => {
        summerSpinsPage = new SummerSpinsPage(page);
        helpPage = new HelpPage(page);
        await summerSpinsPage.goto();
    });

    test('should navigate to help page and verify content', async () => {
        await summerSpinsPage.openHelpPage();

        await helpPage.verifyUrl();
        await helpPage.verifyContentVisible();
    });

     test('should content of help page be equal to content of in-game help', async () => {
        await summerSpinsPage.openInGameHelp();
        const inGameHelpContent = await summerSpinsPage.getInGameHelpContent();
        
        await summerSpinsPage.openHelpPage();

        await helpPage.verifyUrl();
        const helpContent = await helpPage.getHelpContent();
        expect(helpContent).toBe(inGameHelpContent);
    });
});
