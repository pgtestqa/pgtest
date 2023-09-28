import FieldConfig from '../utils/FieldConfig';
import { BasePage } from '../utils/BasePage';
import {Page } from '@playwright/test';
import { integer } from 'aws-sdk/clients/cloudfront';
import { readFromYamlFilePath} from '../utils/YamlReader';
import QuestionCreationLocators from '../locators/IP_Create-Question-locator';


export default class QuestionCreation extends BasePage {
    fieldconfig!: FieldConfig;
    readonly questionCreationLocators: QuestionCreationLocators;
    constructor(page: Page, fieldconfig: FieldConfig) {
        super(page);
        this.questionCreationLocators = new QuestionCreationLocators(page);
        this.fieldconfig = fieldconfig;
    }

public async verifyQuestionPage() {
    await this.locatorShouldBePresent(this.questionCreationLocators.questionPageTitle);
}
public async enterQuestion(question: string) {
    await this.questionCreationLocators.addQuestionField1.fill(question);
}
public async addMaximumQuestions() {
    for (let i = 0; i < 9; i++) {
        await this.questionCreationLocators.addSingleQuestionButton.click();
    }
}
public async verifyAddSingleQuestionButtonNotPresent() {
    await this.locatorShouldNotBePresent(this.questionCreationLocators.addSingleQuestionButton);
}
public async selectQuestionType(questiontype: string) {
    await this.questionCreationLocators.questionTypeDropdown.click();
    await this.page2.locator(this.questionCreationLocators.questionType.replace('questionType', questiontype)).click();
}
public async clickChoiceDropdown(count:string) {
    await this.page1.locator(this.questionCreationLocators.choiceOrderDropdown.replace('Count', count)).click();
}
public async requiredFlagVerify() {
    await this.locatorShouldBePresent(this.questionCreationLocators.requiredFlag);
}
public async addMaximumOptions() {
    for (let i = 4; i < 50; i++) {
        await this.clickAddOptionButton("1");
    }
}
public async verifyAddMultipleOptionButtonNotPresent() { 
    await this.locatorShouldNotBePresent(this.questionCreationLocators.addMultipleOptionButton); 
}
public async  verifyAddMultipleOptionButton() {
    await this.locatorShouldBePresent(this.questionCreationLocators.addMultipleOptionButton);  
}
public async  verifyAddMultipleQuestionButton() {
    await this.locatorShouldBePresent(this.questionCreationLocators.addMultipleQuestion);
}
public async clickAddMultipleQuestionButton() {
    await this.questionCreationLocators.addMultipleQuestion.click();
}
public async clickAddMultipleOptionButton() {
    await this.questionCreationLocators.addMultipleOption.click();
}
public async questionValidationVerify() {
    await this.locatorShouldBePresent(this.questionCreationLocators.questionValidation);
}
public async typeValidationVerify() {
    await this.locatorShouldBePresent(this.questionCreationLocators.typeValidation);
}
public async optionValidationVerify() {
    await this.locatorShouldBePresent(this.questionCreationLocators.optionValidations);
}
public async closeDialog() {
    await this.questionCreationLocators.dialogClose.click();
}
public async mutlipleOptionsValidationVerify() {
    await this.clickAddMultipleOptionButton();
    for (let i = 0; i < 51;i++) {
        await this.questionCreationLocators.optionInputBox.type("input1");
        await this.enterKeyboard();
    }
    await this.clickOptionSubmitButton();
    await this.locatorShouldBePresent(this.questionCreationLocators.multipleOptionValidation);
    await this.closeDialog();
}
public async clickExclusiveToggleButton() {
    await this.questionCreationLocators.exclusiveToggle.click();
    await this.questionCreationLocators.exclusiveToggle.isEnabled();
}
public async requiredToggleClick(count:string) {
    await this.page1.locator(this.questionCreationLocators.requiredButton.replace('count', count)).click(); 
}
public async addQuestionClick() {
    await this.questionCreationLocators.questionSubmitButton.click();
}
public async enterKeyboard() {
    await this.page1.keyboard.press('Enter');
}
public async dialogBoxVerify() {
    await this.locatorShouldBePresent(this.questionCreationLocators.dialogBox);
    await this.closeDialog();  
}
public async clickAddOptionButton(count:string) {
    await this.page1.locator(this.questionCreationLocators.addOptionButton.replace('Count', count)).click();
}
public async clickOptionSubmitButton() {
    await this.questionCreationLocators.optionSubmitButton.click();
}
public async verifyExclusiveToggleButton() {
    await this.locatorShouldBePresent(this.questionCreationLocators.exclusiveToggle);
}
public  async clickSetForReviewButton() {
    await this.waitForSecond(1);
    await this.questionCreationLocators.setForReviewButton.click();
}
public async clickAddQuestionButton() {
    await this.questionCreationLocators.addSingleQuestionButton.click();
}
public async selectChoiceOrder(value:string) {
    await this.page1.locator(this.questionCreationLocators.choiceOrderValue.replace('value', value)).click();
}
public async addMultipleQuestions() {
    const questionData=Object.values(readFromYamlFilePath('questions')) as string[];
    await this.clickAddMultipleQuestionButton();
    for (let i = 0; i <3; i++) {
        const questionDataENValue = questionData[i];
        await this.questionCreationLocators.multipleQuestionInputBox.type(questionDataENValue);
        await this.enterKeyboard();
    }
    const finalQuestion= questionData[3]
    await this.questionCreationLocators.multipleQuestionInputBox.type(finalQuestion); 
}
public async addMultipleOptions() {
    const optionData = Object.values(readFromYamlFilePath('optionMA')) as string[];
    await this.clickAddMultipleOptionButton();
    for (let i = 0; i < 3; i++) {
        const optionDataENValue = optionData[i];
        await this.questionCreationLocators.optionInputBox.type(optionDataENValue);
        await this.enterKeyboard();
    }
    const finalOption= optionData[3]
    await this.questionCreationLocators.optionInputBox.type(finalOption); 
}
public async createMAQuestion(count:string,questionEN:string,questionJP:string,optionCount:integer) {
    const questionFieldText=await this.page1.locator(this.questionCreationLocators.questionField1.replace('Count', count)).getAttribute('placeholder');
    await  this.page1.locator(this.questionCreationLocators.questionTypeDropdown1.replace('Count', count)).click();
    await this.page1.locator(this.questionCreationLocators.questionTypeMA.replace('Count', count)).click();
    if (questionFieldText === "Add question in Japanese" || questionFieldText === "質問の追加（日本語)") { 
      await this.page1.locator(this.questionCreationLocators.questionField1.replace('Count', count)).fill(questionJP);
      await this.page1.locator(this.questionCreationLocators.questionField2.replace('Count', count)).fill(questionEN);
    } else {
        await this.page1.locator(this.questionCreationLocators.questionField1.replace('Count', count)).fill(questionEN);
        await this.page1.locator(this.questionCreationLocators.questionField2.replace('Count', count)).fill(questionJP);
      }
    for (let k=0;k<optionCount;k++) {
        await this.clickAddOptionButton("1");
    }
}
public async createMAQuestionWithDescendingOrder() {
    const MAoptionDataEN = Object.values(readFromYamlFilePath('optionMA')) as string[];
    const MAoptionDataJP = Object.values(readFromYamlFilePath('optionJP_MA')) as string[];
    await this.waitForSecond(2);
    await this.createMAQuestion("0", readFromYamlFilePath('questions')['question_EN0'] as string, readFromYamlFilePath('questionJP')['questionJP0'] as string, 3);
    for (let i = 0; i <= 3; i++) {
        const optionDataENValue = MAoptionDataEN[i];
        const optionDataJPValue = MAoptionDataJP[i];
        await this.createOption("0", optionDataENValue, optionDataJPValue, i.toString());
    }
    await this.clickChoiceDropdown("0");
    await this.selectChoiceOrder("Descending");
}
public async createSAQuestionWithDescendingOrder() {
    const SAoptionDataEN = Object.values(readFromYamlFilePath('optionSA')) as string[];
    const SAoptionDataJP = Object.values(readFromYamlFilePath('optionJP_SA')) as string[];
    await this.createSAQuestion("1", readFromYamlFilePath('questions')['question_EN1'], readFromYamlFilePath('questionJP')['questionJP0'], 3);
    for (let i = 0; i <=3; i++) {
        const optionDataENValue = SAoptionDataEN[i];
        const optionDataJPValue = SAoptionDataJP[i];
        await this.createOption("1", optionDataENValue, optionDataJPValue, i.toString());
    }
    await this.clickChoiceDropdown("1");
    await this.selectChoiceOrder("Descending");
}
public async createSAQuestionWithRandomOrder() {
    const SAoptionDataEN = Object.values(readFromYamlFilePath('optionSA')) as string[];
    const SAoptionDataJP = Object.values(readFromYamlFilePath('optionJP_SA')) as string[];
    await this.createSAQuestion("1", readFromYamlFilePath('questions')['question_EN1'], readFromYamlFilePath('questionJP')['questionJP0'], 3);
    for (let i = 0; i <=3; i++) {
        const optionDataENValue = SAoptionDataEN[i];
        const optionDataJPValue = SAoptionDataJP[i];
        await this.createOption("1", optionDataENValue, optionDataJPValue, i.toString());
    }
    await this.clickChoiceDropdown("1");
    await this.selectChoiceOrder("Random");
}
public async createMAQuestionWithRandomOrder() {
    const MAoptionDataEN = Object.values(readFromYamlFilePath('optionMA')) as string[];
    const MAoptionDataJP = Object.values(readFromYamlFilePath('optionJP_MA')) as string[];
    await this.createMAQuestion("0", readFromYamlFilePath('questions')['question_EN0'] as string, readFromYamlFilePath('questionJP')['questionJP0'] as string, 3);
    for (let i = 0; i <= 3; i++) {
        const optionDataENValue = MAoptionDataEN[i];
        const optionDataJPValue = MAoptionDataJP[i];
        await this.createOption("0", optionDataENValue, optionDataJPValue, i.toString());
    }
    await this.clickChoiceDropdown("0");
    await this.selectChoiceOrder("Random");  
}
public async verifyMADescendingOrder() {
    await this.questionCreationLocators.expandButton.click();
    await this.locatorShouldBePresent(this.page1.locator(this.questionCreationLocators.choiceOrderValueVerify.replace('Order','Descending').replace('Count',"1")));
}
public async verifySADescendingOrder() {
    await this.questionCreationLocators.expandButton.click();
    await this.locatorShouldBePresent(this.page1.locator(this.questionCreationLocators.choiceOrderValueVerify.replace('Order','Descending').replace('Count',"2")));
}
public async verifyMARandomOrder() {
    await this.questionCreationLocators.expandButton.click();
    await this.locatorShouldBePresent(this.page1.locator(this.questionCreationLocators.choiceOrderValueVerify.replace('Order','Random').replace('Count',"1")));
}
public async verifySARandomOrder() {
    await this.questionCreationLocators.expandButton.click();
    await this.locatorShouldBePresent(this.page1.locator(this.questionCreationLocators.choiceOrderValueVerify.replace('Order','Random').replace('Count',"2")));
}
public async createOption(count:string,optionEN:string,optionJP:string,optionNumber:string) {
    const optionFieldText=await this.page1.locator(this.questionCreationLocators.option1.replace('Count', count).replace('OptionNumber', optionNumber)).getAttribute('placeholder');
    if(optionFieldText=="Option in Japanese" || optionFieldText== "選択肢（日本語"){
      await this.page1.locator(this.questionCreationLocators.option1.replace('Count', count).replace('OptionNumber', optionNumber)).fill(optionJP);
      await this.page1.locator(this.questionCreationLocators.option2.replace('Count', count).replace('OptionNumber', optionNumber)).fill(optionEN);
    } else {
        await this.page1.locator(this.questionCreationLocators.option1.replace('Count', count).replace('OptionNumber', optionNumber)).fill(optionEN);
        await this.page1.locator(this.questionCreationLocators.option2.replace('Count', count).replace('OptionNumber', optionNumber)).fill(optionJP);
      }
}
public async createSAQuestion(count:string,questionEN:string,questionJP:string,optionCount:integer) {
    const questionFieldText=await this.page1.locator(this.questionCreationLocators.questionField1.replace('Count', count)).getAttribute('placeholder');
    await  this.page1.locator(this.questionCreationLocators.questionTypeDropdown1.replace('Count', count)).click();
    await this.page1.locator(this.questionCreationLocators.questionTypeSA.replace('Count', count)).click();
    if (questionFieldText === "Add question in Japanese" || questionFieldText === "質問の追加（日本語)") { 
      await this.page1.locator(this.questionCreationLocators.questionField1.replace('Count', count)).fill(questionJP);
      await this.page1.locator(this.questionCreationLocators.questionField2.replace('Count', count)).fill(questionEN);
    } else {
        await this.page1.locator(this.questionCreationLocators.questionField1.replace('Count', count)).fill(questionEN);
        await this.page1.locator(this.questionCreationLocators.questionField2.replace('Count', count)).fill(questionJP);
      }
    for (let k=0;k<optionCount;k++) {
        await this.clickAddOptionButton("2");
    }
}
public async createFAQuestion(count:string,questionEN:string,questionJP:string) {
    const questionFieldText=await this.page1.locator(this.questionCreationLocators.questionField1.replace('Count', count)).getAttribute('placeholder');
    await  this.page1.locator(this.questionCreationLocators.questionTypeDropdown1.replace('Count', count)).click();
    await this.page1.locator(this.questionCreationLocators.questionTypeFA.replace('Count', count)).click();
    if (questionFieldText === "Add question in Japanese" || questionFieldText === "質問の追加（日本語)") { 
      await this.page1.locator(this.questionCreationLocators.questionField1.replace('Count', count)).fill(questionJP);
      await this.page1.locator(this.questionCreationLocators.questionField2.replace('Count', count)).fill(questionEN);
    } else {
        await this.page1.locator(this.questionCreationLocators.questionField1.replace('Count', count)).fill(questionEN);
        await this.page1.locator(this.questionCreationLocators.questionField2.replace('Count', count)).fill(questionJP);
      }
}
public async createMASAFAQuestion() {
    const SAoptionDataEN = Object.values(readFromYamlFilePath('optionSA')) as string[];
    const SAoptionDataJP = Object.values(readFromYamlFilePath('optionJP_SA')) as string[];
    const MAoptionDataEN = Object.values(readFromYamlFilePath('optionMA')) as string[];
    const MAoptionDataJP = Object.values(readFromYamlFilePath('optionJP_MA')) as string[];
    for (let i = 1; i < 3; i++) {
        await this.clickAddQuestionButton();
    }
    await this.createMAQuestion("0", readFromYamlFilePath('questions')['question_EN0'] as string, readFromYamlFilePath('questionJP')['questionJP0'] as string, 3);
    for (let i = 0; i <= 3; i++) {
        const optionDataENValue = MAoptionDataEN[i];
        const optionDataJPValue = MAoptionDataJP[i];
        await this.createOption("0", optionDataENValue, optionDataJPValue, i.toString());
    }
    await this.createSAQuestion("1", readFromYamlFilePath('questions')['question_EN1'], readFromYamlFilePath('questionJP')['questionJP1'], 3);
    for (let i = 0; i <=3; i++) {
        const optionDataENValue = SAoptionDataEN[i];
        const optionDataJPValue = SAoptionDataJP[i];
        await this.createOption("1", optionDataENValue, optionDataJPValue, i.toString());
    }
    await this.createFAQuestion("2",readFromYamlFilePath('questions')['question_EN2'], readFromYamlFilePath('questionJP')['questionJP2']); 
}
public async verifyMASAFAQuestion() {
    
    const questionDataEN=Object.values(readFromYamlFilePath('questions')) as string[];
    const questionDataJP=Object.values(readFromYamlFilePath('questionJP')) as string[];
    for (let i= 1; i<=3;i++) {
        await this.questionCreationLocators.expandButton.click();
    }
    for (let i= 0; i<=2;i++) {
        const questionDataENValue = questionDataEN[i];
        const questionDataJPValue = questionDataJP[i];
        const questionLabelText=await this.questionCreationLocators.questionLabel.getAttribute('placeholder');
        if (questionLabelText === "Add question in Japanese" || questionLabelText === "質問の追加（日本語)"){
            const questionNameJp = await this.getGreyedOutText(this.questionCreationLocators.questionField1.replace('Count', i.toString()));
            await this.compareString(questionNameJp,questionDataJPValue);
            const questionNameEn = await this.getGreyedOutText(this.questionCreationLocators.questionField2.replace('Count', i.toString()));
            await this.compareString(questionNameEn,questionDataENValue);
        } else {
            const questionNameEn = await this.getGreyedOutText(this.questionCreationLocators.questionField1.replace('Count', i.toString()));
            await this.compareString(questionNameEn,questionDataENValue);
            const questionNameJp = await this.getGreyedOutText(this.questionCreationLocators.questionField2.replace('Count', i.toString()));
            await this.compareString(questionNameJp,questionDataJPValue);
        }
        
    }
}
public async dragAndDropMAQuestions() {
    await this.waitForSecond(2);
    await this.dragAndDrop((this.page1.locator(this.questionCreationLocators.options.replace('order',"1"))),(this.page1.locator(this.questionCreationLocators.options.replace('order',"2"))),97,568);
    //await this.clickSetForReviewButton();
}
public async dragAndDropSAQuestions() {
    await this.waitForSecond(1);
    await this.dragAndDrop((this.page1.locator(this.questionCreationLocators.options.replace('order',"9"))),(this.page1.locator(this.questionCreationLocators.options.replace('order',"10"))),97,568);
}

public async verifyDragAndDroppedChoices() {
    for(let i= 1; i<=3;i++) {
        await this.questionCreationLocators.expandButton.click();
    }
    await this.waitForSecond(2);
    const optionMA1 = await this.getGreyedOutText(this.questionCreationLocators.option1.replace('Count',"0").replace('OptionNumber',"0"));
    const optionSA1 = await this.getGreyedOutText(this.questionCreationLocators.option1.replace('Count',"1").replace('OptionNumber',"0"));
    const questionLabelText=await this.questionCreationLocators.questionLabel.getAttribute('placeholder')
    if (questionLabelText === "Add question in Japanese" || questionLabelText === "質問の追加（日本語)"){
        await this.compareString(optionMA1,readFromYamlFilePath('optionJP_MA')['optionJP_MA1']);
        await this.compareString(optionSA1,readFromYamlFilePath('optionJP_SA')['optionJP_SA1']);
    } else {
        await this.compareString(optionMA1,readFromYamlFilePath('optionMA')['optionMA_EN1']);
        await this.compareString(optionSA1,readFromYamlFilePath('optionSA')['optionSA_EN1']); 
    }
}

}
