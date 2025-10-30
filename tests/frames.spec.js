import{test, expect} from "@playwright/test";

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/nested_frames');
  await page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-left"]').contentFrame().getByText('LEFT').click();
  console.log('Clicked LEFT frame');
  await page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-middle"]').contentFrame().locator('body').click();
  console.log('Clicked MIDDLE frame');
  await page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-right"]').contentFrame().getByText('RIGHT').click();
  console.log('Clicked RIGHT frame');
  await page.locator('frame[name="frame-bottom"]').contentFrame().getByText('BOTTOM').click();
  console.log('Clicked BOTTOM frame');
  
});