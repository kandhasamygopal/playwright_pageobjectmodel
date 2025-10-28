import{test,expect} from '@playwright/test';

test(async ({ page }) => {
await page.route('**/captcha', route => {
  route.fulfill({
    status: 200,
    body: JSON.stringify({ token: 'mocked-captcha-token' }),
  });
});

await page.goto('https://example.com/form-with-captcha');   
await page.fill('#name', 'Test User');
await page.fill('#email', 'test@fexbox.org');
await page.click('#submit');    
await expect(page.locator('#success-message')).toBeVisible();
});
