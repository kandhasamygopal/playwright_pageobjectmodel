import { SignupPage } from "./SignupPage.js";

export class POManager{

   constructor(page)
    {
      this.page = page ;
      this.signupPage = new SignupPage(this.page);

    }

getSignupPage() {

    return this.signupPage;
}

}

