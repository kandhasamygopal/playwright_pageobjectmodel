import {test,expect,request} from '@playwright/test';

const PhoneNumberLoginPayload = {
        areaCode:"+91",
        phoneNumber:"8056300259"
                               };
const OTP_Payload = {
    areaCode:"+91",
    phoneNumber:"8056300259",
    authType:"login",
    otpCode:"123456"
                    };
let authToken;
// Set headers for authenticated requests
const headers = {Authorization: `Bearer ${authToken}`, "Content-Type": "application/json" };


   test.beforeAll(async()=>{

      const apicontext = await request.newContext();
    // Fetch guest access token
      const fetchAccessToken = await apicontext.get("https://api-dev.whaot.com/user/guest/fetch-access-token");
      const tokenResponse = await fetchAccessToken.json();
      const authToken = tokenResponse?.body?.token;

      
      console.log("Fetched Auth Token:",authToken);
      expect(fetchAccessToken.ok()).toBeTruthy();
      


      
       // Check if user exists
      const checkUser = await apicontext.post("https://api-dev.whaot.com/user/account/check-user-exists-by-phone",
       
            {
                headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json"
                },
                data: PhoneNumberLoginPayload
            });
        
        console.log("Check User Response:", await checkUser.json());
        // console.log("Check User:", await checkUser.text());
       
 
        // Validate phone OTP
        const validateOtp = await apicontext.post("https://api-dev.whaot.com/user/account/validate-phone-otp",
       
            {
                headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json"
                },
                data: OTP_Payload
            });
        
        console.log("Validate OTP Response:", await validateOtp.json());
        // console.log("Check User:", await validateOtp.text());
        

         });
      
   test('@Webst Client App login', async ({page}) => {

      // Inject auth token into localStorage before loading the page
      page.addInitScript(value=>{
         window.localStorage.setItem('token',value);
      },authToken);

        // Navigate to target URL
         const url =await page.goto("https://dev.whaot.com/class/spoken-english-for-5-12th-grade-6t1e0riy");

        // Optional: Verify page loaded successfully
        await expect(page).toHaveURL(/spoken-english/);
        console.log("The class title is:" ,url)

     });
      