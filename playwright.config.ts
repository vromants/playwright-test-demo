import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        headless: true,
        baseURL: 'https://www.saucedemo.com',
        browserName: 'chromium',
    },
    reporter: [["junit", { outputFile: 'results.xml' }], ["list"], ["html"]]

};

export default config;
