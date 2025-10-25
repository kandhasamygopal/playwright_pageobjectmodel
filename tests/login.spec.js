import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/login.js';


test('test', async ({ page }) => {

    const login = new loginPage(page);
    await login.loginPage();
    await login.clickSignIn();
    await login.enterPhoneNumber('8056300259');
    await login.proceedButton.click();
    await login.otpInputs(['1','2','3','4','5','6']);   

});    