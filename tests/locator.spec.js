import{test,expect}from'@playwright/test';

test('locater strategies in Playwright',async({page})=>{
    await page.goto('https://dev.whaot.com/');  
    //locater by text
    await page.locator("//a[normalize-space()='Sign Up / Sign In']").click();
    await page.locator("//input[@type='tel']").click();
    await page.locator("//input[@type='tel']").fill('8056300259');
    await page.locator("//button[normalize-space()='Proceed']").click();
    await page.locator("//input[@id='otp-0']").fill('1');
    await page.locator("//input[@id='otp-1']").fill('2');
    await page.locator("//input[@id='otp-2']").fill('3');
    await page.locator("//input[@id='otp-3']").fill('4');
    await page.locator("//input[@id='otp-4']").fill('5');
    await page.locator("//input[@id='otp-5']").fill('6');
    await page.close();


});