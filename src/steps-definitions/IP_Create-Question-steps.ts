import { ICustomWorld } from '../support/custom-world';
import { Given } from '@cucumber/cucumber';


Given('Verify the question settings page', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.verifyQuestionPage();
            
});

Given('Verify the validation of question', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.clickSetForReviewButton();
       await this.PageObject?.questionCreation.questionValidationVerify();
       
});

Given('Verify the validation of type selection', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.clickSetForReviewButton();
       await this.PageObject?.questionCreation.typeValidationVerify();
});

Given('Add question text as {string}', async function (this: ICustomWorld, question: string) {
       await this.PageObject?.questionCreation.enterQuestion(question);
});

Given('Select the question type as {string}', async function (this: ICustomWorld, questionType: string) {
       await this.PageObject?.questionCreation.selectQuestionType(questionType);
});

Given('Verify the validation of option', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.clickSetForReviewButton();
       await this.PageObject?.questionCreation.optionValidationVerify();
       await this.PageObject?.questionCreation.mutlipleOptionsValidationVerify();
});

Given('verify that multiple option registration button is present', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.verifyAddMultipleOptionButton();
});

Given('Verify the required flag is present', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.requiredFlagVerify();
});

Given('Click add multiple option button', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.clickAddMultipleOptionButton();       
});

Given('Verify the multiple option selection dilog box is present', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.dialogBoxVerify();       
});

Given('Input multiple options', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.addMultipleOptions();  
});

Given('Click on option submit button', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.clickOptionSubmitButton();
});

Given('Verify the exclusive toggle button is present', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.verifyExclusiveToggleButton();       
});

Given('Add maximum number of options', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.addMaximumOptions();
});

Given('Verify that add option button is not present', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.verifyAddMultipleOptionButtonNotPresent();
});

Given('Verify that the multiple question registration button is present', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.verifyAddMultipleQuestionButton();
});

Given('Add maximum number of questions', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.addMaximumQuestions();
});

Given('Verify that add question button is not present', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.verifyAddSingleQuestionButtonNotPresent();
});

Given('Input multiple questions', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.addMultipleQuestions();  
});

Given('Verify multiple questions registration with the given inputs are possible', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.addQuestionClick();
});

Given('Create three question with MA,SA,FA types', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.createMASAFAQuestion();
});

Given('Click set for review button', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.clickSetForReviewButton();
});

Given('Verify that questions MA,SA,FA types created properly', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.verifyMASAFAQuestion();
});

Given('Create MA question with descending order of choices', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.createMAQuestionWithDescendingOrder();
});

Given('Click add question button', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.clickAddQuestionButton();
});

Given('Create SA question with descending order of choices', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.createSAQuestionWithDescendingOrder();
});

Given('Verify that MA choice order is descending', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.verifyMADescendingOrder();
});

Given('Verify that SA choice order is descending', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.verifySADescendingOrder();
});

Given('Create MA question with random order of choices', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.createMAQuestionWithRandomOrder();
});

Given('Create SA question with random order of choices', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.createSAQuestionWithRandomOrder();
});

Given('Verify that MA choice order is random', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.verifyMARandomOrder();
});

Given('Verify that SA choice order is random', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.verifySARandomOrder();
});

Given('Drag and drop the MA question choices', async function (this: ICustomWorld) {
    await this.PageObject?.questionCreation.dragAndDropMAQuestions();
});

Given('Drag and drop the SA question choices', async function (this: ICustomWorld) {
    await this.PageObject?.questionCreation.dragAndDropSAQuestions();
});

Given('Verify that choices drag and dropped properly', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.verifyDragAndDroppedChoices();
});

Given('Click on the exclusive toggle button', async function (this: ICustomWorld) {
       await this.PageObject?.questionCreation.clickExclusiveToggleButton();       
});

Given('Click on the required toggle button of question number {string}', async function (this: ICustomWorld, questionNumber:string) {
       await this.PageObject?.questionCreation.requiredToggleClick(questionNumber);        
});




































