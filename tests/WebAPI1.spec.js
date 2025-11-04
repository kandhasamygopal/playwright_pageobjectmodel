import {test,expect,request} from '@playwright/test';

const PhoneNumberLoginpayload = {areaCode:"+91",phoneNumber:"8056300259"};
const OTP_Payload = {areaCode:"+91",phoneNumber:"8056300259",authType:"login",otpCode:"123456"};
let authToken;


   test.beforeAll(async()=>{

      const apicontext = await request.newContext();
    // Fetch guest access token
      const fetchAccessToken = await apicontext.get("https://api-dev.whaot.com/user/guest/fetch-access-token");
      const tokenResponse = fetchAccessToken.json();
      const authToken = tokenResponse?.body?.token;

      
      console.log("Fetched Auth Token:",authToken);
      expect(fetchAccessToken.ok()).toBeTruthy();

      // Set headers for authenticated requests
      const headers = {
                        'Authorization': `Bearer ${authToken}`,
                         'Content-Type': 'application/json'
                      };

      
       // Check if user exists
      const checkUser = await apicontext.post("https://api-dev.whaot.com/user/account/check-user-exists-by-phone",
        {
          data: PhoneNumberLoginpayload,
          headers
        } );
        
        console.log("Check User Response:", await checkUser.json());
        expect(checkUser.ok()).toBeTruthy();
 
        // Validate phone OTP
        const validateOtp = await apicontext.post("https://api-dev.whaot.com/user/account/validate-phone-otp",
        {
          data: OTP_Payload,headers
        });
        
        console.log("Validate OTP Response:", await validateOtp.json());
        expect(validateOtp.ok()).toBeTruthy();

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

     });
      