import { ICustomWorld } from '../support/custom-world';
import { Given } from '@cucumber/cucumber';


// Given('Open the url {string}, and print the details', async function (this: ICustomWorld,url:string) {

//  await this.PageObject?.regression.tokenRequest(url)
//     .then(() => console.log('Console messages captured and saved to the file.'))
//     .catch((error) => console.error('An error occurred:', error));

    
    
// });

// Given('Update the data {string}', async function (this: ICustomWorld,actualdata:string) {

//  await this.PageObject?.update.updateData(actualdata)   
    
// });

// Given('Append a new data to the next line of actual data', async function (this: ICustomWorld) {

//  await this.PageObject?.append.appendData()   
    
// });

// Given('Update the content of Page Object with given class', async function (this: ICustomWorld) {
   
//  await this.PageObject?.demopage.updatePageObject()   
    
// });

// Given('Launch the browser', async function (this: ICustomWorld) {
   
//  await this.PageObject?.browserlaunch.browserLaunch(); 
    
// });


// Given('Enter the url {string}', async function (this: ICustomWorld,url:string) {
   
//  await this.PageObject?.browserlaunch.openURL(url);   
    
// });

Given('Open the url {string}', async function (this: ICustomWorld,url:string) {
   
  await this.PageObject?.qrcode.openURL(url);   
 });
 Given('Input the text from file and save the QR Code', async function (this: ICustomWorld) {
   
  await this.PageObject?.qrcode.inputData();   
 });
 













