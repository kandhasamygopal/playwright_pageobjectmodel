import { test, expect } from '@playwright/test';
import { generateUserData } from '../utils/dataGenerator.js'; 
import { SignupPage } from '../pages/signup.js';

test('testsignup', async ({ page }) => {
  const signup = new SignupPage(page);
  const user = generateUserData();

  // Step 1: Navigate to signup
  try{
    await signup.loginPage();
    await signup.clickSignupLink();
  }
  catch (error) {
    console.error('Navigation to signup page failed:', error);
    throw error;
  }
  
  

  // Step 2: Phone + OTP
  try{  
  await signup.enterPhoneNumber(user.phone);
  }
  catch (error) {
    console.error('Entering phone number failed:', error);
    throw error;
  }
  await page.keyboard.press('Enter');
  await signup.enterOtp(['1', '2', '3', '4', '5', '6']);

  // Step 3: Email + OTP
  await signup.enterEmail(user.email);
  await page.keyboard.press('Enter');
  await signup.enterEmailOtp(['1', '2', '3', '4', '5', '6']);

  // Step 4: Password
  await signup.enterPassword(user.password);
  await signup.enterConfirmPassword(user.password);
  await signup.clickContinue();

  // Step 5: Child info
  await signup.enterChildFirstName(user.childFirstName);
  await signup.enterChildLastName(user.childLastName);
  await signup.selectChildDob('2015-03-25');
  await signup.selectChildGender('Male');
  await signup.selectChildGrade('Pre-Kindergarten');

  // Step 6: Parent info
  await signup.enterParentFirstName(user.parentFirstName);
  await signup.enterParentLastName(user.parentLastName);
  await signup.enterParentDob('1985-05-10');
  await signup.enterAddress(user.address);
  await signup.enterCity(user.city);
  await signup.enterZipCode(user.zip);

  // Step 7: Submit
  await signup.clickSubmit();

  // Step 8: Verify success toast
  const toastMessage = page.locator("text=Congratulations! You've been");
  await expect(toastMessage).toBeVisible();
  await expect(toastMessage).toBeHidden({ timeout: 5000 });
});
