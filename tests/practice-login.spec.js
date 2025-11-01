import {test,expect} from "@playwright/test";




test.only('login practice verify validation error',async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

    const username = page.locator('input#username');
    const password = page.locator('#password');
    const SignIn = page.locator ('#signInBtn');
    const CardTitle = page.locator('.card-body a');

    //css
    await username.fill('rahulshetty');
    await password.fill('learning');
    await SignIn.click();
    console.log(await page.locator ("[style*='block']").textContent());
    await expect(page.locator ("[style*='block']")).toContainText("Incorrect");
    
    //use the fill option
    await username.fill("rahulshettyacademy")
    await SignIn.click();
    // console.log(await CardTitle.nth(0).textContent());
    // console.log(await CardTitle.nth(1).textContent());
    const Alltitles = await CardTitle.allTextContents();
    console.log(Alltitles);


});

