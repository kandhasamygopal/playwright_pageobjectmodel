import {test,expect} from '@playwright/test';
import { off } from 'process';

// Function to fill OTP inputs using a loop
async function fillOTP(page, otpValues) {
    for (let i = 0; i < otpValues.length; i++) {
        await page.locator(`#otp-${i}`).fill(otpValues[i]);
    }
}

test('new login site practice',async({page})=>{

    //site go
    await page.goto("https://dev.whaot.com/");
    console.log(await page.title());

    //locators
    const Month = "November";
    const date = "11" ;
    const year = "2025" ;
    const Gender = "Male"
    const Signup = page.locator('a:has-text("Sign Up / Sign In")');
    const Mobilenumber = page.locator('input[type="tel"]');
    const Proceed = page.locator("//button[normalize-space()='Proceed']");

    // const Continue = page.locator("//button[normalize-space()='Continue']")
    const emailaddress= page.locator("//input[contains(@placeholder,'Enter your email address')]");
    const sendOTP = page.locator("//button[normalize-space()='Send OTP']")
    const verifyOTP =page.locator('button:has-text("Verify")');
    const Skippassword = page.locator("//button[normalize-space()='Skip']");
    const Childname = page.getByRole('textbox').first();
    const Submitbutton = page.locator('button:has-text("Submit")');


    //signup
    await Signup.click();
    await Mobilenumber.fill("1235488434");
    await Proceed.click();
    await fillOTP(page, ["1", "2", "3", "4", "5", "6"]);
    // await Continue.click();
    await page.waitForTimeout(4000);
    
    await emailaddress.fill("testjack3@fexbox.org");
    await sendOTP.click();
    await fillOTP(page, ["1", "2", "3", "4", "5", "6"]);
    await Skippassword.click();
    await Childname.fill("yashwanth");
    await page.locator('.react-datepicker__input-container input').click();
    await page.selectOption('.react-datepicker__month-select', { label: Month });
    await page.selectOption('.react-datepicker__year-select', { label: year });
    await page.click(`.react-datepicker__day--0${date.toString().padStart(2, '0')}`);

    // Wait for and click the gender dropdown, then select 'Male'
    const genderdropdowns = page.locator('#react-select-2-placeholder');
    await genderdropdowns.click();
    
    // Select the 'Male' option from the dropdown
    await page.locator('#react-select-2-option-0').click();
    
    // Wait for and click the Grade dropdown, then select 'Pre-Kindergarten'
    
    const Gradedropdowns = page.locator('#react-select-3-placeholder');
    await Gradedropdowns.click();
    
    // Select the 'Pre-Kindergarten' option from the dropdown
    await page.locator('#react-select-3-option-2').click();
    
    
    await page.getByRole('textbox').nth(3).fill('Gopal');
    await page.getByRole('textbox').nth(5).fill('9/11');
    await page.locator('.react-autosuggest__container > .border-\\[\\#BDBDBD\\]').click();
    await page.locator('.react-autosuggest__container > .border-\\[\\#BDBDBD\\]').fill('salem');
    await page.locator('#react-autowhatever-1--item-0').getByText('Salem, Tamil Nadu').click();
    await Submitbutton.click();


    
    //login
    //homepage get content
   
   

});