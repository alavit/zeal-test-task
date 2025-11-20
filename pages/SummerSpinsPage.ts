import { type Locator, type Page, type FrameLocator } from '@playwright/test';

export class SummerSpinsPage {
    readonly page: Page;
    readonly helpLink: Locator;
    readonly iframe: FrameLocator;
    readonly inGameHelpLink: Locator;
    readonly inGameHelpContent: Locator;

    constructor(page: Page) {
        this.page = page;
        this.helpLink = page.locator('[data-element-id="iwg.game.help.show"]');
        this.iframe = page.getByRole('region', { name: 'Game Spielfläche: Dieser' }).frameLocator('iframe');
        this.inGameHelpLink = this.iframe.getByRole('link', { name: 'Information' });
        this.inGameHelpContent = this.iframe.locator('.help').locator('p');
    }

    async goto() {
        await this.page.goto('/games/summerspins');
    }

    async openHelpPage() {
        await this.helpLink.click();
    }

    async openInGameHelp() {
        await this.inGameHelpLink.click();
    }

    async getInGameHelpContent() {
        return await this.inGameHelpContent.textContent();
    }
}
