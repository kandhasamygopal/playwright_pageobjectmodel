import {test,expect} from "@playwright/test";
const {test: _test} = require('@playwright/test');
const {expect: _expect} = require('@playwright/test');

test('Basic UI interactions', async ({page}) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
    console.log('page title verified',await page.title());
});

test('new testing page url',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();  
    await page.goto('https://example.com');
    await expect(page.url()).toBe('https://example.com/');
    console.log('page url verified:', await page.url());
});