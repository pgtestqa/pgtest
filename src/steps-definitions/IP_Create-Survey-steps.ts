import { ICustomWorld } from '../support/custom-world';
import { Given } from '@cucumber/cucumber';


Given('Launch the application', async function (this: ICustomWorld) {
    await this.PageObject?.surveycreation.launchApplication();
});

Given('Launch application in multiple tab', async function (this: ICustomWorld) {
    await this.PageObject?.surveycreation.launchApplicationInMultipleTab();
});

Given('Click on the add new button', async function (this: ICustomWorld) {
    await this.PageObject?.surveycreation.clickAddNewButton();
});

Given('Verify the validation of default language', async function (this: ICustomWorld) {
    await this.PageObject?.surveycreation.clickSaveAndContinueButton();
    await this.PageObject?.surveycreation.defaultLanguageVerify();
});

Given('Verify the validation of required language', async function (this: ICustomWorld) {
    await this.PageObject?.surveycreation.clickSaveAndContinueButton();
    await this.PageObject?.surveycreation.requiredLanguageVerify();
}); 

Given('Select the default language as {string}',async function (this: ICustomWorld, defaultLanguage: string) {
    await this.PageObject?.surveycreation.selectDefaultLanguage(defaultLanguage);
});

Given('Select the required language as {string}',async function (this: ICustomWorld, requiredLanguage: string) {
    await this.PageObject?.surveycreation.selectRequiredLanguage(requiredLanguage);
});

Given('Verify the validation of title', async function (this: ICustomWorld) {
    await this.PageObject?.surveycreation.clickSaveAndContinueButton();
    await this.PageObject?.surveycreation.titleValidationVerify();
});

Given('Verify the validation of description', async function (this: ICustomWorld) {
    await this.PageObject?.surveycreation.clickSaveAndContinueButton();
    await this.PageObject?.surveycreation.descriptionValidationVerify();
});

Given('Verify the maximum character validation in title', async function (this: ICustomWorld) {
    await this.PageObject?.surveycreation.titleMaximumLimitInput();
    await this.PageObject?.surveycreation.clickSaveAndContinueButton();
    await this.PageObject?.surveycreation.titleLimitValidationVerify();
});

Given('Verify the maximum character validation in description', async function (this: ICustomWorld) {
    await this.PageObject?.surveycreation.descriptionMaximumLimitInput();
    await this.PageObject?.surveycreation.clickSaveAndContinueButton();
    await this.PageObject?.surveycreation.descriptionLimitValidationVerify();
});

Given('Fill the english title as {string}',async function (this: ICustomWorld, title: string) {
    await this.PageObject?.surveycreation.enterTitleInEnglish(title);
   
});

Given('Fill the english description as {string}',async function (this: ICustomWorld, description: string) {
    await this.PageObject?.surveycreation.enterDescriptionInEnglish(description);
   
});

Given('Fill the japanese title as {string}',async function (this: ICustomWorld, title: string) {
    await this.PageObject?.surveycreation.enterTitleInJapanese(title);
    
});

Given('Fill the japanese description as {string}',async function (this: ICustomWorld, description: string) {
    await this.PageObject?.surveycreation.enterDescriptionInJapanese(description);
   
});

Given('Click on the save and continue button',async function (this: ICustomWorld) {
    await this.PageObject?.surveycreation.clickSaveAndContinueButton();
});

