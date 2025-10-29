import {test,expect} from 'playwright/test';
import { threadName } from 'worker_threads';


test('homepage navigation and content verification',async({page})=>{
    
    
    await page.goto('https://dev.whaot.com/');
    const PAGETITLE= page.title();
    console.log('Page Title is:', PAGETITLE);
    await expect(page).toHaveTitle(PAGETITLE);
    const PAGEURL = page.url();
    console.log('Current Page URL is:', PAGEURL);
    await expect(page).toHaveURL('Store the expected URL here');
    // expect(page).toHaveTitle('.\check that the page title is correct.');
    await page.close()
    
  


});