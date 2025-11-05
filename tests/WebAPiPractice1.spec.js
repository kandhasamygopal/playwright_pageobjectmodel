import {test,expect,request} from '@playwright/test';
const { APiUtils } = require('./utils/APiUtils'); 
const loginPayload = {userEmail:"gopalmech28@gmail.com",userPassword:"Test@123"};
const orderPayload = { orders: [{ country: "Cuba", productOrderedId: "68a961459320a140fe1ca57a" }] };
let response;



test.beforeAll(async()=>{

   const apiContext = await request.newContext();
   const apiUtils = new APiUtils(apiContext,loginPayload);
   response = await apiUtils.createOrder(orderPayload);


});




//create the successful order
test('Place the order', async ({ page }) => {
   //js file- Login js, DashboardPage
   page.addInitScript(value=>{
    window.localStorage.setItem('token',value)
   },response.token);
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (response.orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
});







