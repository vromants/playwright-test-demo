import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        headless: true,
        baseURL: 'https://www.saucedemo.com',
        browserName: 'chromium',
    },
};

export default config;
