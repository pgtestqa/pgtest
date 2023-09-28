import FieldConfig from '../utils/FieldConfig';
import { BasePage } from '../utils/BasePage';
import { Page } from '@playwright/test';
import { readFromYamlFilePath } from '../utils/YamlReader';
import EditSurveyLocators from '../locators/IP_Edit-Survey-locator';

export default class EditSurvey extends BasePage {
    fieldconfig!: FieldConfig;
    readonly editSurveyLocators: EditSurveyLocators;
    constructor(page: Page, fieldconfig: FieldConfig) {
        super(page);
        this.editSurveyLocators = new EditSurveyLocators(this.page2);
        this.fieldconfig = fieldconfig;
    }    
public async inputTitleAndDescription(title:string, description:string) {
    await this.page1?.bringToFront();
    await this.editSurveyLocators.titleBox1.fill(title);
    await this.editSurveyLocators.descriptionBox1.fill(description);
}
public async setForReviewInEdit() {
    await this.editSurveyLocators.setForReviewButton1?.click();
    await this.waitForSecond(2);
    await this.editSurveyLocators.setForReviewButton?.click();
    await this.waitForSecond(1);
}
public async setForReview() {
    await this.waitForSecond(1);
    await this.editSurveyLocators.setForReviewButton.click();
}
public async errorResponse() {
    await this.waitForSecond(1);
    await this.locatorShouldBePresent(this.editSurveyLocators.errorMessage);
}
public async updateSurveyTitle(title:string) {
    await this.editSurveyLocators.surveyTitle.fill(title);
}
public async updateSurveyDescription(description:string) {
    await this.editSurveyLocators.surveyDescription.fill(description);
}
public async updateQuestionTitle(title:string) {
    await this.editSurveyLocators.expandButton1.click();
    await this.editSurveyLocators.questionTitle.fill(title);
}
public async updateOptionTitle(title:string) {
    await this.editSurveyLocators.optionTitle.fill(title);
}
public async clickPublishButton() {
    await this.editSurveyLocators.publishButton.click();
}
public async verifySurveyTitle(title:string) {
    await this.locatorShouldBePresent(this.page1.locator(this.editSurveyLocators.surveyTitle2.replace('title', title)))
}
public async verifySurveyDescription(description:string) {
    await this.locatorShouldBePresent(this.page1.locator(this.editSurveyLocators.surveyDescription2.replace('description', description)));
}
public async titleEditValidationVerify() { 
    await this.editSurveyLocators.surveyTitle.clear();
    await this.setForReview();
    await this.locatorShouldBePresent(this.editSurveyLocators.titleValidation);
}
public async descriptionEditValidationVerify() {
    await this.editSurveyLocators.surveyDescription.clear();
    await this.setForReview();
    await this.locatorShouldBePresent(this.editSurveyLocators.descriptionValidation);
}
public async questionValidationVerify() {
    await this.editSurveyLocators.downArrow.click();
    await this.editSurveyLocators.questionTitle.clear();
    await this.setForReview();
    await this.locatorShouldBePresent(this.editSurveyLocators.questionValidation);
}
public async optionValidationVerify() {
    await this.editSurveyLocators.optionTitle.clear();
    await this.setForReview();
    await this.locatorShouldBePresent(this.editSurveyLocators.optionValidation);
}
public async dragAndDropAquestions() {
    await this.dragAndDrop((this.page1.locator(this.editSurveyLocators.options.replace('order',"1"))),(this.page1.locator(this.editSurveyLocators.options.replace('order',"10"))),97,568);
  //  await this.clickSetForReviewButton();
}
public async VerifydragAndDropQuestions() {
    for(let i= 1; i<=3;i++) {
        await this.editSurveyLocators.expandButton.click();
    }
    const question1 = await this.getGreyedOutText(this.editSurveyLocators.question1.replace('Count',"0"));
    const questionLabelText=await this.editSurveyLocators.questionLabel.getAttribute('placeholder')
    if(questionLabelText === "Add question in Japanese" || questionLabelText === "質問の追加（日本語)"){
        await this.compareString(question1,readFromYamlFilePath('questionJP')['questionJP1']);
    } else {
        await this.compareString(question1,readFromYamlFilePath('questions')['question_EN1']);
    } 
}
public async clickEditButtonInSecondTab(title:string) {
    await this.page2?.locator(this.editSurveyLocators.editButton.replace('title', title)).click();
    await this.waitForSecond(2);
}
public async expandAllQuestions() {
    for(let i= 1; i<=3;i++) {
    await this.editSurveyLocators.expandButtonInEdit.click();
    }
}

}




























