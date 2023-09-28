
import FieldConfig from '../utils/FieldConfig';
import { BasePage } from '../utils/BasePage';
import { Page} from '@playwright/test';
//import { ICustomWorld } from '../support/custom-world'
import {readFromYamlFilePath} from '../utils/YamlReader';
import SurveyResponseLocators from '../locators/IP_Survey-Response-locator';
export default class SurveyResponse extends BasePage {
        fieldconfig!: FieldConfig;
        readonly surveyResponseLocators: SurveyResponseLocators;
        constructor(page: Page, fieldconfig: FieldConfig) {
                super(page);
                this.surveyResponseLocators = new SurveyResponseLocators(page);
                this.fieldconfig = fieldconfig;
}
public async verifyUserId() {

        await this.locatorShouldBePresent(this.surveyResponseLocators.userId);
}
public async verifyDate() {
        await this.locatorShouldBePresent(this.page2.locator(this.surveyResponseLocators.date.replace('currentDate',await this.getCurrentDate())));
}
public async clickViewButton() {
        await this.page1.locator(this.surveyResponseLocators.viewButton.replace('currentDate',await this.getCurrentDate())).click();
}
public async verifySurveyTitle(surveyTitle:string) {
        await this.locatorShouldBePresent(this.page1.locator(this.surveyResponseLocators.answer.replace('answer', surveyTitle)));
}
public async verifyMAResults() {
        await this.locatorShouldBePresent(this.page1.locator(this.surveyResponseLocators.answer.replace('answer',readFromYamlFilePath('optionMA')['optionMA_EN0'])));
        //await this.locatorShouldBePresent(this.page1.locator(this.surveyResponseLocators.answer.replace('answer',readFromYamlFilePath('option')['optionMA_EN1'])));
}
public async verifySAResults() {
        await this.locatorShouldBePresent(this.page1.locator(this.surveyResponseLocators.answer.replace('answer',readFromYamlFilePath('optionSA')['optionSA_EN0'])));
}
public async verifyFAResults(answer: string) {
        await this.locatorShouldBePresent(this.page1.locator(this.surveyResponseLocators.answer.replace('answer', answer)));
}

}




















