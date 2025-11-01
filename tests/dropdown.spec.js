import {test, expect } from "@playwright/test";

test('Dropdown handling in Playwright', async({page}) =>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username = page.locator('input#username');
    const SignIn = page.locator ('#signInBtn');
    const dropdown = page.locator('Select.form-control');
    await dropdown.selectOption('consult'); //select by value
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();


    // assertion
    await page.pause();
    
});
