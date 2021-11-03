import { expect, Locator, Page } from '@playwright/test';
import { DataTest } from '../utils/data-test';
import { UserDo } from '../data/user.do';
import { BasePo } from './base.po';
import { LoginErrorEnum } from '../enum/login-error.enum';

export class LoginPo extends BasePo {
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginBtn: Locator;
    readonly errorBlock: Locator;

    constructor(readonly page: Page) {
        super(page);
        this.url = '/';
        this.usernameField = this.page.locator(DataTest.exact('username'));
        this.passwordField = this.page.locator(DataTest.exact('password'));
        this.loginBtn = this.page.locator(DataTest.exact('login-button'));
        this.errorBlock = this.page.locator(DataTest.exact('error'));
    }

    public async loginAction(user: UserDo): Promise<void> {
        await this.usernameField.waitFor();
        await this.usernameField.fill(user.username);
        await this.passwordField.fill(user.password);
        await this.loginBtn.click();
    }

    public async seeError(error: LoginErrorEnum): Promise<void> {
        const errorBlock = this.errorBlock;
        await errorBlock.waitFor({ timeout: 300 });
        await expect(errorBlock).toBeVisible();
        await expect(errorBlock).toContainText(error.valueOf());
    }
}
