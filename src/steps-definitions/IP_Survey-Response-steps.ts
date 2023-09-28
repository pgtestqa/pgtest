import { ICustomWorld } from '../support/custom-world';
import {Given} from '@cucumber/cucumber';


Given('Verify that user id is present in the page', async function (this: ICustomWorld) {
        await this.PageObject?.surveyResponse.verifyUserId();

});

Given('Verify that corresponding response date is present in the page', async function (this: ICustomWorld) {
        await this.PageObject?.surveyResponse.verifyDate();
});

Given('Click view button', async function (this: ICustomWorld) {
        await this.PageObject?.surveyResponse.clickViewButton();
});

Given('Verify the survey title is same as {string}', async function (this: ICustomWorld, title:string) {
        await this.PageObject?.surveyResponse.verifySurveyTitle(title);
});

Given('Verify the MA question results', async function (this: ICustomWorld) {
        await this.PageObject?.surveyResponse.verifyMAResults();
});

Given('Verify the SA question results', async function (this: ICustomWorld) {
        await this.PageObject?.surveyResponse.verifySAResults();
});

Given('Verify the FA question results is same as {string}', async function (this: ICustomWorld, answer: string) {
        await this.PageObject?.surveyResponse.verifyFAResults(answer);
});

