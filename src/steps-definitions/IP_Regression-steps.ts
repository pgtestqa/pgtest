import { Given} from "@cucumber/cucumber";
import { ICustomWorld } from "../support/custom-world";


Given('Create ten questions with MA type and 50 options', async function (this: ICustomWorld) {
       await this.PageObject?.regression.create10MA();
});

Given('Verify the number of questions in the MA survey', async function (this: ICustomWorld) {
       await this.PageObject?.regression.verifyMaximumQuestionMA();
});

Given('Verify the number of options under each MA question', async function (this: ICustomWorld) {
       await this.PageObject?.regression.verifyMaximumOptionsMA();
});

Given('Create ten questions with SA type and 50 options',async function (this: ICustomWorld) {
       await this.PageObject?.regression.create10SA();
});

Given('Verify the number of questions in the SA survey', async function (this: ICustomWorld) {
       await this.PageObject?.regression.verifyMaximumQuestionSA();
});

Given('Verify the number of options under each SA question', async function (this: ICustomWorld) {
       await this.PageObject?.regression.verifyMaximumOptionsSA();
});

Given('Create ten questions with FA type',async function (this: ICustomWorld) {
       await this.PageObject?.regression.create10FA();
});

Given('Verify the number of questions in the FA survey', async function (this: ICustomWorld) {
       await this.PageObject?.regression.verifyMaximumQuestionFA();
});

Given('Verify the number of options under each FA question', async function (this: ICustomWorld) {
       await this.PageObject?.regression.verifyMaximumOptionsSA();
});

Given('Create ten questions with 4MA,3SA,3FA types',async function (this: ICustomWorld) {
       await this.PageObject?.regression.create4MA3SA3FA();
});

Given('Verify the number of MA questions in the survey', async function (this: ICustomWorld) {
       await this.PageObject?.regression.verifyQuestionsMA();
});

Given('Verify the number of options under the MA questions', async function (this: ICustomWorld) {
       await this.PageObject?.regression.verifyOptionsMA();
});

Given('Verify the number of SA questions in the survey', async function (this: ICustomWorld) {
       await this.PageObject?.regression.verifyQuestionsSA();
});

Given('Verify the number of options under the SA questions', async function (this: ICustomWorld) {
       await this.PageObject?.regression.verifyOptionsSA();
});

Given('Verify the number of FA questions in the survey', async function (this: ICustomWorld) {
       await this.PageObject?.regression.verifyQuestionsFA();
});

Given('Verify the number of options under the FA questions', async function (this: ICustomWorld) {
       await this.PageObject?.regression.verifyOptionsFA();
});

Given('Create an MA question', async function (this: ICustomWorld) {
       await this.PageObject?.regression.questionCreate();
})







////////////////// Drag and drop in a demo site //////////////////////////


Given('Drag and drop the file to the site',async function (this: ICustomWorld) {
       await this.PageObject?.regression.dragAndDropDemo();
     
})


//////////////// Multiple file upload in a demo site //////////////////

Given('Open the url of the site and input multiple files',async function (this:ICustomWorld) {
       await this.PageObject?.regression.uploadFileInPOC1();
})
