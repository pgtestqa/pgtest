import { ICustomWorld } from '../support/custom-world';
import {Given} from '@cucumber/cucumber';

Given('Click the exclusive toggle button of SA question', async function (this: ICustomWorld) {
        await this.PageObject?.surveyDisplay.clickExclusiveToggleButtonSA();       
});

Given('Click the exclusive toggle button of MA question', async function (this: ICustomWorld) {
        await this.PageObject?.surveyDisplay.clickExclusiveToggleButtonMA();       
});

Given('Open the url of questionnaire answer screen of survey with title {string}', async function (this: ICustomWorld, title:string) {
        await this.PageObject?.surveyDisplay.screenRedirect(title)
});

Given('Verify the validation for required fields', async function (this: ICustomWorld) {
        await this.PageObject?.surveyDisplay.requiredFieldValidation();   
});

Given('Verify the validation of maximum character for FA question', async function (this: ICustomWorld) {
        await this.PageObject?.surveyDisplay.limitExceedValidation();
});

Given('Switch to japanese in answer screen', async function (this: ICustomWorld) {
        await this.PageObject?.surveyDisplay.switchToJapanese();
});

Given('Verify the answer screen in japanese', async function (this: ICustomWorld) {
        await this.PageObject?.surveyDisplay.verifyInJapanese()
});

Given('Verify the question in japanese', async function (this: ICustomWorld) {
        await this.PageObject?.surveyDisplay.questionInJapanese()
});

Given('Verify the options in japanese', async function (this: ICustomWorld) {
        await this.PageObject?.surveyDisplay.optionsInJapanese()
});

Given('Switch to english in answer screen', async function (this: ICustomWorld) {
        await this.PageObject?.surveyDisplay.switchToEnglish();
});

Given('Verify the answer screen in english', async function (this: ICustomWorld) {
        await this.PageObject?.surveyDisplay.verifyInEnglish()
});

Given('Verify the question in english', async function (this: ICustomWorld) {
        await this.PageObject?.surveyDisplay.questionInEnglish()
});

Given('Verify the options in english', async function (this: ICustomWorld) {
        await this.PageObject?.surveyDisplay.optionsInEnglish()
});

Given('Verify the choices of SA question {string} are displayed in ascending order', async function (this: ICustomWorld, question: string) {
        await this.PageObject?.surveyDisplay.ascendingOrderSA(question);
});

Given('Verify the choices of MA question {string} are displayed in ascending order', async function (this: ICustomWorld, question: string) {
        await this.PageObject?.surveyDisplay.ascendingOrderMA(question);
});

Given('Verify the question and options of SA question {string}', async function (this: ICustomWorld, question: string) {
        await this.PageObject?.surveyDisplay.verifySA(question)
});

Given('Verify the question and options of MA question {string}', async function (this: ICustomWorld, question: string) {
        await this.PageObject?.surveyDisplay.verifyMA(question)
});

Given('Verify the question of FA question {string}', async function (this: ICustomWorld, question: string) {
        await this.PageObject?.surveyDisplay.verifyFA(question)
});

Given('Verify the excluisve choices of SA question {string}', async function (this: ICustomWorld, question: string) {
        await this.PageObject?.surveyDisplay.exclusiveSA(question);
});

Given('Verify the exclusive choices of MA question {string}', async function (this: ICustomWorld, question: string) {
        await this.PageObject?.surveyDisplay.exclusiveMA(question);
});

Given('Verify the choices of SA question {string} are displayed in descending order', async function (this: ICustomWorld, question: string) {
        await this.PageObject?.surveyDisplay.descendingOrderSA(question);
});

Given('Verify the choices of MA question {string} are displayed in descending order', async function (this: ICustomWorld, question: string) {
        await this.PageObject?.surveyDisplay.descendingOrderMA(question);
});

Given('Verify the choices of SA question {string} are displayed in random order', async function (this: ICustomWorld, question: string) {
        await this.PageObject?.surveyDisplay.randomOrderSA(question);
});

Given('Verify the choices of MA question {string} are displayed in random order', async function (this: ICustomWorld, question: string) {
        await this.PageObject?.surveyDisplay.randomOrderMA(question);
});

Given('Answer question 1', async function (this: ICustomWorld) {
        await this.PageObject?.surveyDisplay.answerQuestion1();
});

Given('Answer question 2', async function (this: ICustomWorld) {
        await this.PageObject?.surveyDisplay.answerQuestion2();
});

Given('Answer question 3 as {string}', async function (this: ICustomWorld, freeAnswer: string) {
        await this.PageObject?.surveyDisplay.answerQuestion3(freeAnswer);
});

Given('Click on the submit button', async function (this: ICustomWorld) {
        await this.PageObject?.surveyDisplay.submitButtonClick()
});

Given('Verify the response message', async function (this: ICustomWorld) {
        await this.PageObject?.surveyDisplay.submissionVerification()
});

