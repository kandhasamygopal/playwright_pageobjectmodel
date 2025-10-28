import { test, expect } from '@playwright/test';

test('generate random phone and email', async ({ page }) => {
  // Generate random email
  const randomString = Math.random().toString(36).substring(2,10);
  const email = `user_${randomString}@example.com`;

  // Generate random phone number
  const phoneNumber =  `9${Math.floor(100000000 + Math.random() * 900000000)}`;
  
  console.log({ email, phoneNumber });

  await page.goto('https://testyou.in/Login.aspx');
  await page.fill('#email', email);
  await page.fill('#phone', phoneNumber);

  // continue your test...
});
