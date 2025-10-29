import{test,expect}from 'playwright/test';
import path from 'path';

test('set file upload using setInputFiles',async({page})=>{
    await page.goto('https://practice.expandtesting.com/upload');
    await page.getByTestId('file-input').click();
    await page.getByTestId('file-input').setInputFiles(path.resolve('tests/files/image (10).png'));
    await page.getByTestId('file-submit').click();
    
});
