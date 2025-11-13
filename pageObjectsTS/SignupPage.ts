import { test, expect,Locator,Page} from '@playwright/test';
export class SignupPage {

  signupPageLink : Locator;
  phoneNumberInput :Locator;
  proceedButton :Locator;
  otpInputs :string[];
  emailInput:Locator; 
  sendOTP:Locator; 
  passwordInput:Locator; 
  confirmPasswordInput:Locator; 
  continueButton:Locator; 
  childFirstNameInput:Locator; 
  childLastNameInput:Locator; 
  childDobInput:Locator; 
  genderDropdown:Locator; 
  gradeDropdown:Locator; 
  parentFirstNameInput:Locator; 
  addressDoorNumberInput:Locator; 
  addressSearchBox:Locator; 
  addressSuggestion:Locator; 
  submitButton:Locator; 
  page: Page;
  

  constructor(page: Page) {

    this.page = page;

    // Navigation
    this.signupPageLink = page.locator('a:has-text("Sign Up / Sign In")');

    // Step 1: Phone & OTP
    this.phoneNumberInput = page.locator('input[type="tel"]');
    this.proceedButton = page.locator("//button[normalize-space()='Proceed']");
    this.otpInputs = ['#otp-0', '#otp-1', '#otp-2', '#otp-3', '#otp-4', '#otp-5'];

    // Step 2: Email & password
    this.emailInput = page.locator("//input[contains(@placeholder,'Enter your email address')]");
    this.sendOTP = page.locator("//button[normalize-space()='Send OTP']");
    this.passwordInput = page.locator("(//input[@type='password'])[1]");
    this.confirmPasswordInput = page.locator("(//input[@type='password'])[2]");
    this.continueButton = page.locator("//button[normalize-space()='Continue']");

    // Step 3: Child info
    this.childFirstNameInput = page.getByRole('textbox').first();
    this.childLastNameInput = page.locator("(//input[@type='text'])[2]");
    this.childDobInput = page.locator('.react-datepicker__input-container input');
    this.genderDropdown = page.locator('#react-select-2-placeholder');
    this.gradeDropdown = page.locator('#react-select-3-placeholder');

    // Step 4: Parent info
    this.parentFirstNameInput = page.getByRole('textbox').nth(3);
    this.addressDoorNumberInput = page.getByRole('textbox').nth(5);
    this.addressSearchBox = page.locator('.react-autosuggest__container > .border-\\[\\#BDBDBD\\]');
    this.addressSuggestion = page.locator('#react-autowhatever-1--item-0').getByText('Salem, Tamil Nadu');
    this.submitButton = page.locator('button:has-text("Submit")');
  }

  async webiste_url_Page_going(Website_Url:string) {
    await this.page.goto(Website_Url);
  }

  async clickSignupLink() {
    await this.signupPageLink.click();
  }

  async enterPhoneNumber(phoneNumber:string) {
    await this.phoneNumberInput.fill(phoneNumber);
    await this.proceedButton.click();
  }

  async enterOtp(otp:string | number) {
    const otpString = otp.toString(); //
    for (let i = 0; i < otpString.length; i++) {
      await this.page.locator(this.otpInputs[i]).fill(otpString[i]);
    }
  }

  async enterEmail(email:string) {
    await this.emailInput.fill(email);
    await this.sendOTP.click();
  }

  async enterEmailOtp(otp:number) {
    const otpstring = otp.toString();
    for (let i = 0; i < otpstring .length; i++) {
      await this.page.locator(this.otpInputs[i]).fill(otpstring [i]);
    }
  }

  async enterPassword(password:string) {
    await this.passwordInput.fill(password);
  }

  async enterConfirmPassword(confirmpassword:string) {
    await this.confirmPasswordInput.fill(confirmpassword);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async enterChildFirstName(children_firstName:string) {
    await this.childFirstNameInput.fill(children_firstName);
  }

  async enterChildLastName(children_lastName:string) {
    await this.childLastNameInput.fill(children_lastName);
  }

async selectChildDob(children_dateOfBirth:string) {
  await this.childDobInput.click();
  await this.childDobInput.fill(children_dateOfBirth);

}


  async selectChildGender() {
    // Wait for and click the gender dropdown, then select 'Male'
    const genderdropdowns = this.page.locator('#react-select-2-placeholder');
    await genderdropdowns.click();
    
    // Select the 'Male' option from the dropdown
    await this.page.locator('#react-select-2-option-0').click();


  }
  async selectChildGrade() {
// Wait for and click the Grade dropdown, then select 'Pre-Kindergarten'
    
    const Gradedropdowns = this.page.locator('#react-select-3-placeholder');
    await Gradedropdowns.click();
    
    // Select the 'Pre-Kindergarten' option from the dropdown
    await this.page.locator('#react-select-3-option-2').click();
  }



  async enterParentFirstName(Parentname:string) {
    await this.parentFirstNameInput.fill(Parentname);
    
  }

  async enterAddress(doorNo:string, location:string) {
    await this.addressDoorNumberInput.fill(doorNo);
    await this.addressSearchBox.click();
    await this.addressSearchBox.fill(location);
    await this.addressSuggestion.click();
  }

  async clickSubmit_signup_details() {
    await this.submitButton.click();
  }
}
