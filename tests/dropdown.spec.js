import {test, expect } from "@playwright/test";

test('Dropdown handling in Playwright', async({page}) =>{

    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = page.locator('#dropdown');
    await dropdown.selectOption('1'); //select by value
    await expect(dropdown).toHaveValue('1');
    console.log('Selected option with value 1')
    await dropdown.selectOption({label: 'Option 2'});
    await expect(dropdown).toHaveValue('2');
    console.log('Selected option with label Option 2')
    
});
