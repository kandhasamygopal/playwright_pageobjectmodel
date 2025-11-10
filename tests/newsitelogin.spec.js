import { test, expect } from '@playwright/test';
import { POManager } from '../pageObjects/POManager.js';

const dataset = JSON.parse(JSON.stringify(require("../utils/StudentTestData.json")));

test.describe('Signup flow', () => {

  for (const data of [dataset]) {
    test(`Signup test for ${data.email}`, async ({ page }) => {

      const pOManager = new POManager(page);
      const signupPage = pOManager.getSignupPage();

      await signupPage.webiste_url_Page_going(data.Website_Url);
      await signupPage.clickSignupLink();

      await signupPage.enterPhoneNumber(data.phoneNumber);
      await signupPage.enterOtp(data.otp);
      await signupPage.enterEmail(data.email);
      await signupPage.enterEmailOtp(data.otp);
      await signupPage.enterPassword(data.password);
      await signupPage.enterConfirmPassword(data.confirmpassword);
      await signupPage.clickContinue();

      await signupPage.enterChildFirstName(data.children_firstName);
      await signupPage.enterChildLastName(data.children_lastName);
      await signupPage.selectChildDob(data.children_dateOfBirth);
      await signupPage.selectChildGender();
      await signupPage.selectChildGrade();

      await signupPage.enterParentFirstName(data.Parentname);
      await signupPage.enterAddress(data.doorNo, data.address_location);

      await signupPage.clickSubmit_signup_details();

      // Optionally validate final navigation
      await expect(page.getByRole('heading', { name: /successfully registered/i })).toBeVisible();
    });
  }
});
