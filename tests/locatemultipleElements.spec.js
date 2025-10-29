import{test,expect}from'@playwright/test';

test('locate multiple elements using locator',{tag:'@smoke'},async({page})=>{
    await page.goto('https://dev.whaot.com/');
    const links= page.locator('a'); //locate all anchor tags
    var count= await links.count();
    console.log('Total number of links on the page:', count);
});