import { test as base } from '@playwright/test';
import { LoginPo } from '../page/login.po';
import { InventoryPo } from '../page/inventory.po';

const test = base.extend<{
    loginPage: LoginPo;
    inventoryPage: InventoryPo;
}>({
    loginPage : async ({page}, use) => {
        await use(new LoginPo(page));
    },
    inventoryPage: async ({page}, use) => {
        await use(new InventoryPo(page));
    }
});

export default test;