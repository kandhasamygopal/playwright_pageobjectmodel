import {test,expect} from '@playwright/test';


test.describe('Conditional retry', async ({ page }) => {
  let attempts = 0;
  while (attempts < 3) {
    try {
      await page.goto('https://unstable-site.com');
      // Replace the selector below with the actual selector you expect to appear   
    await expect(page.locator("loaded-element")).toBeVisible({ timeout: 2000 });
    //   await expect(page.locator('#loaded')).toBeVisible({ timeout: 2000 });
      break;
    } catch {
      attempts++;
      console.log(`Retrying... Attempt ${attempts}`);
    }
  }
});
