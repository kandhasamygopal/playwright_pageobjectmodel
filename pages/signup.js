export class SignupPage {

  constructor(page) { 
    this.page = page;

    // Navigation
    this.signupPageLink = page.getByRole('link', { name: 'Sign Up / Sign In' });

    // Step 1: Phone & OTP
    this.phoneNumberInput = page.getByRole('textbox');
    this.proceedButton = page.getByRole('button', { name: 'Proceed' });
    this.otpInputs = ['#otp-0', '#otp-1', '#otp-2', '#otp-3', '#otp-4', '#otp-5'];

    // Step 2: Email & password
    this.emailInput = 'input[name="email"]';
    this.passwordInput = 'input[name="password"]';
    this.confirmPasswordInput = 'input[name="confirmPassword"]';
    this.continueButton = 'button[name="continue"]'; 

    // Step 3: Child info
    this.childFirstNameInput = 'input[name="childFirstName"]';
    this.childLastNameInput = 'input[name="childLastName"]';
    this.childDobInput = 'input[name="childDob"]';
    this.genderSelect = 'select[name="gender"]';
    this.gradeSelect = 'select[name="grade"]';

    // Step 4: Parent info
    this.parentFirstNameInput = 'input[name="parentFirstName"]';    
    this.parentLastNameInput = 'input[name="parentLastName"]';
    this.parentDobInput = 'input[name="parentDob"]';
    this.addressInput = 'input[name="address"]';
    this.cityInput = 'input[name="city"]';
    this.zipCodeInput = 'input[name="zipCode"]';   
    this.submitButton = 'button[name="submit"]';
  } 

  async loginPage() {
    await this.page.goto('https://dev.whaot.com/');
  }

  async clickSignupLink() {
    await this.signupPageLink.click();
  }

  async enterPhoneNumber(phoneNumber) {
    await this.phoneNumberInput.fill(phoneNumber);
  }

  async enterOtp(otp) {
    for (let i = 0; i < otp.length; i++) {
      await this.page.fill(this.otpInputs[i], otp[i]);
    }
  }

  async enterEmail(email) {
    await this.page.fill(this.emailInput, email);
  }

  async enterEmailOtp(otp) {
    for (let i = 0; i < otp.length; i++) {
      await this.page.fill(this.otpInputs[i], otp[i]);
    }
  }

  async enterPassword(password) {
    await this.page.fill(this.passwordInput, password);
  }

  async enterConfirmPassword(confirmPassword) {
    await this.page.fill(this.confirmPasswordInput, confirmPassword);
  }

  async clickContinue() {
    await this.page.click(this.continueButton);
  }

  async enterChildFirstName(firstName) {
    await this.page.fill(this.childFirstNameInput, firstName);
  }

  async enterChildLastName(lastName) {
    await this.page.fill(this.childLastNameInput, lastName);
  }

  async selectChildDob(dob) {
    await this.page.fill(this.childDobInput, dob);
  }

  async selectChildGender(gender) {
    await this.page.selectOption(this.genderSelect, gender);
  }

  async selectChildGrade(grade) {
    await this.page.selectOption(this.gradeSelect, grade);
  }

  async enterParentFirstName(firstName) {
    await this.page.fill(this.parentFirstNameInput, firstName);
  }

  async enterParentLastName(lastName) {
    await this.page.fill(this.parentLastNameInput, lastName);
  }

  async enterParentDob(dob) {
    await this.page.fill(this.parentDobInput, dob);
  }

  async enterAddress(address) {
    await this.page.fill(this.addressInput, address);
  }

  async enterCity(city) {
    await this.page.fill(this.cityInput, city);
  }

  async enterZipCode(zipCode) {
    await this.page.fill(this.zipCodeInput, zipCode);
  }

  async clickSubmit() {
    await this.page.click(this.submitButton);
  }
}
