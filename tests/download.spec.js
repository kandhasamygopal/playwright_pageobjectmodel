import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'amazon_homepage.png' }).click();
  const download = await downloadPromise;
    const path = await download.path(); 
    console.log('Downloaded file path:', path);
    download.saveAs('downloads/amazon_homepage.png');
    console.log('File saved to downloads/amazon_homepage.png');
    






});