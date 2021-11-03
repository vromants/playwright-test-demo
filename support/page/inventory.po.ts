import { Locator, Page } from '@playwright/test';
import { BasePo } from './base.po';

export class InventoryPo extends BasePo {
    readonly cartIcon: Locator;

    constructor(readonly page: Page) {
        super(page);
        this.url = '/inventory.html';
        this.cartIcon = this.page.locator('#shopping_cart_container a');
    }
}
