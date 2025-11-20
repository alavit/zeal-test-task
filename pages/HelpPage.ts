import { type Locator, type Page, expect } from '@playwright/test';

export class HelpPage {
    readonly page: Page;
    readonly headingHilfe: Locator;
    readonly headingSummerSpins: Locator;
    readonly moreInfoText: Locator;
    readonly playButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headingHilfe = page.getByRole('heading', { name: 'Hilfe', exact: true });
        this.headingSummerSpins = page.getByRole('heading', { name: 'Summer Spins', exact: true });
        this.moreInfoText = page.getByText('Nähere Informationen', { exact: false });
        this.playButton = page.getByRole('button', { name: 'Summer Spins spielen' });
    }

    async verifyUrl() {
        await expect(this.page).toHaveURL(/\/hilfe\/games\/summerspins/);
    }

    async verifyContentVisible() {
        await expect(this.headingHilfe).toBeVisible();
        await expect(this.headingSummerSpins).toBeVisible();
        await expect(this.moreInfoText).toBeVisible();
        await expect(this.playButton).toBeVisible();
    }

    async getHelpContent() {
        return await this.moreInfoText.textContent();
    }
}
