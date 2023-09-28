import { ICustomWorld } from '../support/custom-world';
import { Given} from '@cucumber/cucumber';


Given('Switch to japanese language', async function (this: ICustomWorld) {
        await this.PageObject?.dashboard.switchToJapanese();
});

Given('Verify the survey in japanese', async function (this: ICustomWorld) {
        await this.PageObject?.dashboard.verificationInJapanese();
});

Given('Switch to english language', async function (this: ICustomWorld) {
        await this.PageObject?.dashboard.switchToEnglish();
});

Given('Verify the survey in english', async function (this: ICustomWorld) {
        await this.PageObject?.dashboard.verificationInEnglish();
});

Given('Verify that the survey create page is displayed properly', async function (this: ICustomWorld) {
        await this.PageObject?.dashboard.createSurveyVerify();
});

Given('Click on the edit button of a survey with title {string}', async function (this: ICustomWorld, title: string) {
        await this.PageObject?.dashboard.editSurveyClick(title);
});

Given('Verify that the survey edit page is displayed properly', async function (this: ICustomWorld) {
        await this.PageObject?.dashboard.editSurveyVerify();
});
Given('Click on the start button of a survey with description {string}', async function (this: ICustomWorld, description:string) {
        await this.PageObject?.dashboard.surveyStart(description);
});

Given('Verify that the survey is started', async function (this: ICustomWorld) {
        await this.PageObject?.dashboard.surveyStartVerification();
});

Given('Click on the copy link button of a survey with title {string}', async function (this: ICustomWorld, title:string) {
        await this.PageObject?.dashboard.copySurveyLink(title);
});

Given('Click on the response button of a survey with description {string}', async function (this: ICustomWorld, description:string) {
        await this.PageObject?.dashboard.responseButtonClick(description);
});

Given('Verify that the response screen is displayed properly', async function (this: ICustomWorld) {
        await this.PageObject?.dashboard.responseVerify();
});

Given('Click on the stop button of a survey with description {string}', async function (this: ICustomWorld, description:string) {
        await this.PageObject?.dashboard.surveyStop(description);
});

Given('Verify that the survey is stopped', async function (this: ICustomWorld) {
        await this.PageObject?.dashboard.surveyStopVerification();
});

Given('Verify the status of all buttons of survey with title {string} after survey stop', async function (this: ICustomWorld, title:string) {
        await this.PageObject?.dashboard.buttonsVerify(title);
});

Given('Verify the survey title {string} in english', async function (this: ICustomWorld, title:string) {
        await this.PageObject?.dashboard.verifyTitleInEnglish(title);
});

Given('Verify the survey title {string} in japanese', async function (this: ICustomWorld, title: string) {
        await this.PageObject?.dashboard.verifyTitleInJapanese(title);
});

Given('Verify the survey details title {string},description {string},date and status is displyed properly', async function (this: ICustomWorld, title:string, description:string) {
        await this.PageObject?.dashboard.verifySurveyDetails(title,description);
});

Given('Click on the view button of a survey with title {string}', async function (this: ICustomWorld, title: string) {
        await this.PageObject?.dashboard.viewSurveyClick(title);
});

Given('Verify that the survey view page is displayed properly', async function (this: ICustomWorld) {
        await this.PageObject?.dashboard.viewSurveyVerify()
});

Given('Click on the delete button of a survey with title {string}', async function (this: ICustomWorld, title:string) {
        await this.PageObject?.dashboard.surveyDeleteClick(title);
});

Given('Verify that the survey is deleted', async function (this: ICustomWorld) {
        await this.PageObject?.dashboard.surveyDeleteVerify();
});
















