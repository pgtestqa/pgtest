import { ICustomWorld } from '../support/custom-world';
import { Given } from '@cucumber/cucumber';


Given('Update survey title as {string}', async function (this: ICustomWorld, title:string) {
  await this.PageObject?.editSurvey.updateSurveyTitle(title);
});

Given('Update survey description as {string}', async function (this: ICustomWorld, description:string) {
  await this.PageObject?.editSurvey.updateSurveyDescription(description);
});

Given('Update question title as {string}', async function (this: ICustomWorld, title:string) {
  await this.PageObject?.editSurvey.updateQuestionTitle(title);
});

Given('Update option title as {string}', async function (this: ICustomWorld, title:string) {
  await this.PageObject?.editSurvey.updateOptionTitle(title);
});

Given('Click publish button', async function (this: ICustomWorld) {
  await this.PageObject?.editSurvey.clickPublishButton();
});

Given('Verify that survey title is updated as {string}', async function (this: ICustomWorld, title:string) {
  await this.PageObject?.editSurvey.verifySurveyTitle(title);
});

Given('Verify that survey description is updated as {string}', async function (this: ICustomWorld, description:string) {
  await this.PageObject?.editSurvey.verifySurveyDescription(description);
});

Given('Verify the title validation in edit page', async function (this: ICustomWorld) {
  await this.PageObject?.editSurvey.titleEditValidationVerify();
});

Given('Verify the description validation in edit page', async function (this: ICustomWorld) {
  await this.PageObject?.editSurvey.descriptionEditValidationVerify();
});

Given('Verify the question validation in edit page', async function (this: ICustomWorld) {
  await this.PageObject?.editSurvey.questionValidationVerify();
});

Given('Verify the option validation in edit page', async function (this: ICustomWorld) {
  await this.PageObject?.editSurvey.optionValidationVerify();
});

Given('Drag and drop the questions', async function (this: ICustomWorld) {
  await this.PageObject?.editSurvey.dragAndDropAquestions();
});

Given('Verify that questions are drag and dropped properly', async function (this: ICustomWorld) {
  await this.PageObject?.editSurvey.VerifydragAndDropQuestions();
});

Given('Expand all questions', async function (this: ICustomWorld) {
  await this.PageObject?.editSurvey.expandAllQuestions();
});

Given('Click edit button of survey with title {string} in second tab', async function (this: ICustomWorld, titleText:string) {
  await this.PageObject?.editSurvey.clickEditButtonInSecondTab(titleText);
});

Given('Input the tilte as {string},description as {string}', async function (this: ICustomWorld, title:string, description:string) {
  await this.PageObject?.editSurvey.inputTitleAndDescription(title,description);
});

Given('Click on set for review button in multiple tab', async function (this: ICustomWorld) {
  await this.PageObject?.editSurvey.setForReviewInEdit();
});

Given('Verify the error response', async function (this: ICustomWorld) {
  await this.PageObject?.editSurvey.errorResponse();
});






