import { SignupPage } from "./SignupPage.js";
import{Page} from "@playwright/test"

export class POManager{

   signupPage: SignupPage ;
   page : Page;

   constructor(page:any)
    {
      this.page = page ;
      this.signupPage = new SignupPage(this.page);

    }

getSignupPage() {

    return this.signupPage;
}

}

