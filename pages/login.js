class loginPage {

    constructor(page) {
        this.page = page;
        this.signInLink = page.getByRole('link', { name: 'Sign Up / Sign In' });
        this.phoneNumberInput = page.getByRole('textbox');
        this.proceedButton = page.getByRole('button', { name: 'Proceed' });
        this.otpInputs = [
            page.locator('#otp-0'),
            page.locator('#otp-1'),
            page.locator('#otp-2'),
            page.locator('#otp-3'),
            page.locator('#otp-4'),
            page.locator('#otp-5')
        ];
    }
    async navigateTologinPage() {
        await this.page.goto('https://dev.whaot.com/');
    }
    async clickSignIn() {
        await this.signInLink.click();
    }
    async enterPhoneNumber(phoneNumber) {
        await this.phoneNumberInput.click();
        await this.phoneNumberInput.fill(phoneNumber);
    }   
    async otpInputs(otp) {
        for (let i = 0; i < otp.length; i++) {
            await this.otpInputs[i].fill(otp[i]);
        }  
    } 
    async savelocalstorage() {
        await this.page.context().storagestate({ path: 'storageState.json' });
    }
}
module.exports = { loginPage };