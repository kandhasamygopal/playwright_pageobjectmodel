import {test,expect} from '@playwright/test';


test('test portal login form',async({page})=>{
    await page.goto("https://teacher-dev.whaot.com/auth")
    await page.locator('input[type="tel"]').fill("8056300259");
    await page.getByText('Proceed').click();
    await page.getByText('Tutor Terms of Use (MoU)✕').click();

    await page.getByRole('button', { name: 'Agree and Continue' }).click();
    // await page.pause();


});