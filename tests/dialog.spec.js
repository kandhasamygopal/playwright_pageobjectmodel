
import {test,expect}from'@playwright/test';
import { type } from 'os';
test('dialog handling in webpage',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    //Handling alert dialog box
    page.on('dialog',async(dialog)=>{ 
        console.log('Dialog message is:', dialog.message());
        await dialog.accept().catch(()=>{
            console.log('Dialog closed');
        }); 
        
    }); 
    await page.locator("//button[normalize-space()='Click for JS Alert']").click();

    //Handling confirm dialog box yes/cancel    

    page.on('dialog', async(dialog)=>{
        console.log('Dialog message is:', dialog.message());
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('I am a JS Confirm');
        await dialog.accept();  
        
    });
    await page.locator("//button[normalize-space()='Click for JS Confirm']").click();  
    page.waitForTimeout(5000);

    //Handling prompt dialog box
    page.on('dialog', async(dialog)=>{
        expect(dialog.type()).toContain('prompt');
        const prompt='prompt';
         
    
        console.log('Dialog message is:', dialog.message());
        await dialog.accept().catch(()=>{
            dialog.accept(prompt);
            console.log('Dialog closed');
        });
    }); 
    await page.locator("//button[normalize-space()='Click for JS Prompt']").click();
     await pagetimeout(5000);
    await page.locator('#result').textContent().then(async(pagetext)=>{
        console.log('Page text after prompt dialog is:', pagetext);
        expect(pagetext).toBe('You entered: prompt');

   
    });
    
});