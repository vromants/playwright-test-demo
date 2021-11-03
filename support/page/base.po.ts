import { Page, Response } from '@playwright/test';

export class BasePo {
    public url: string;

    constructor(readonly page: Page) {
        this.url = '/';
    }

    public async visit(): Promise<Response> {
        return this.page.goto(this.url);
    }
}
