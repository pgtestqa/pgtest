
import FieldConfig from '../utils/FieldConfig';
import { BasePage } from '../utils/BasePage';
import { config } from '../support/config';
import { Page} from '@playwright/test';
import {readFromYamlFilePath} from '../utils/YamlReader';
import SurveyCreationLocators from '../locators/IP_Create-Survey-locator';


export default class SurveyCreation extends BasePage {
    fieldconfig!: FieldConfig;
    readonly surveyCreationLocators: SurveyCreationLocators;
    constructor(page: Page, fieldconfig: FieldConfig) {
        super(page);
        this.surveyCreationLocators = new SurveyCreationLocators(page);
        this.fieldconfig = fieldconfig;
    }
public async launchApplication() {
    await this.page1.goto(config.BASE_URL);
}
public async clickAddNewButton() {
    await this.surveyCreationLocators.addNewButton.click();
}
public async defaultLanguageVerify() {
    await this.locatorShouldBePresent(this.surveyCreationLocators.defaultLanguageValidation);
}
public async requiredLanguageVerify() {
    await this.locatorShouldBePresent(this.surveyCreationLocators.requiredLanguageValidation);
}
public async selectDefaultLanguage(defaultLanguage: string) {
    await this.surveyCreationLocators.defaultLanguageDropdown.click();
    await this.page1.locator(this.surveyCreationLocators.defaultLanguageValue.replace('defaultLanguageValue', defaultLanguage)).click();
}
public async selectRequiredLanguage(requiredLanguage: string) {
    await this.surveyCreationLocators.requiredLanguageDropdown.click();
    await this.page1.locator(this.surveyCreationLocators.requiredLanguageValue.replace('requiredLanguageValue',requiredLanguage )).click();
    await this.page1.keyboard.press('Escape');
}
public async titleValidationVerify() { 
    await this.locatorShouldBePresent(this.surveyCreationLocators.titleValidation);
}
public async descriptionValidationVerify() {
    await this.locatorShouldBePresent(this.surveyCreationLocators.descriptionValidation);
}
public async titleMaximumLimitInput() {
    await this.surveyCreationLocators.firstTitle.fill(readFromYamlFilePath('validationdata')['titleLimit']); 
}
public async descriptionMaximumLimitInput() {
    await this.surveyCreationLocators.firstDescription.fill(readFromYamlFilePath('validationdata')['descriptionLimit']); 
}
public async titleLimitValidationVerify() {
    await this.locatorShouldBePresent(this.surveyCreationLocators.titleLimitValidation);
}
public async descriptionLimitValidationVerify() {
    await this.locatorShouldBePresent(this.surveyCreationLocators.descriptionLimitValidation);
}
public async enterTitleInEnglish(title: string) {
    if( await this.surveyCreationLocators.titleFieldLabelEnglish.count() > 0) {
        await this.surveyCreationLocators.firstTitle.fill(title);
    } else {
        await this.surveyCreationLocators.secondTitle.fill(title);
      }
}
public async enterTitleInJapanese(title: string) {
    if( await this.surveyCreationLocators.titleFieldLabelJapanese.count() > 0) {
        await this.surveyCreationLocators.firstTitle.fill(title);
    } else {
        await this.surveyCreationLocators.secondTitle.fill(title);
      }
}
public async enterDescriptionInEnglish(description: string) {
    if( await this.surveyCreationLocators.descriptionFieldLabelEnglish.count() > 0) {
        await this.surveyCreationLocators.firstDescription.fill(description);
    } else {
        await this.surveyCreationLocators.secondDescription.fill(description);
      }
}
public async enterDescriptionInJapanese(description: string) {
    if( await this.surveyCreationLocators.descriptionFieldLabelJapanese.count() > 0)  {
        await this.surveyCreationLocators.firstDescription.fill(description);
    } else {
        await this.surveyCreationLocators.secondDescription.fill(description);
      }
}
public async clickSaveAndContinueButton() {
    await this.surveyCreationLocators.saveAndContinueButton.click();
}
public async launchApplicationInMultipleTab() {
    await this.page1.goto(config.BASE_URL);
    await this.page2.goto(config.BASE_URL);
}





 

} 



