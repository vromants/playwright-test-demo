import { expect } from '@playwright/test';
import test from '../support/fixture';
import { lockedOutUser, standardUser } from '../support/data/user.do';
import { LoginErrorEnum } from '../support/enum/login-error.enum';

test.describe.parallel('Login test', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.visit();
    });

    test('Login as standard user', async ({ loginPage, inventoryPage }) => {
        await loginPage.visit();
        await loginPage.loginAction(standardUser);
        await expect(inventoryPage.page).toHaveURL(inventoryPage.url);
        await expect(await inventoryPage.cartIcon).toBeVisible();
    });

    test('Login as locked out user', async ({ loginPage, inventoryPage }) => {
        await loginPage.visit();
        await loginPage.loginAction(lockedOutUser);
        await loginPage.seeError(LoginErrorEnum.LOCKED_USER);
        await inventoryPage.visit();
        await loginPage.seeError(LoginErrorEnum.NOT_LOGGED_INVENTORY);
    });
});
