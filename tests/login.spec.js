import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/login.js';


test('testloginUser', async ({ page }) => {

    const login = new loginPage(page);
    
    await login.navigateTologinPage();
    await login.clickSignIn();
    await login.enterPhoneNumber('8056300259');
    await login.proceedButton.click();
    await login.otpInputs(['1','2','3','4','5','6']);   
    await login.savelocalstorage();

    

});    