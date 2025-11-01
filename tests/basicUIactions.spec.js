import {test, expect } from "@playwright/test";
import { promises } from "dns";

test('Dropdown handling in Playwright', async({page}) =>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username = page.locator('input#username');
    const SignIn = page.locator ('#signInBtn');
    const documentLink = page.locator("[href*='documents-request']");
    const dropdown = page.locator('Select.form-control');
    await dropdown.selectOption('consult'); //select by value
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect( await page.locator("#terms").isChecked()).toBeFalsy();

    await expect(documentLink).toHaveAttribute("class","blinkingText");


    // // assertion
    // await page.pause();

    
});

test.only("@child window handle",async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const username = page.locator('input#username');
    const documentlink = page.locator("[href*='documents-request']");

    const [newpage] = await Promise.all([
    context.waitForEvent('page'), //liston for any new page pending,rejected,fulfilled
    documentlink.click(),//new page is opened
      ])

    const text = await newpage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain = arrayText[1].split(" ")[0]
    console.log(domain);
    await username.fill(domain);
    await page.pause();
    console.log(await username.textContent());
    

});
