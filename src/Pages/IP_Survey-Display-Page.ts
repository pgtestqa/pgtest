
import FieldConfig from '../utils/FieldConfig';
import { BasePage } from '../utils/BasePage';
import { Page} from '@playwright/test';
//import { ICustomWorld } from '../support/custom-world'
import { readFromYamlFilePath } from '../utils/YamlReader';
import SurveyDisplayLocators from '../locators/IP_Survey-Display-locator';
export default class SurveyDisplay extends BasePage {
    fieldconfig!: FieldConfig;
    readonly surveyDisplayLocators: SurveyDisplayLocators;
    constructor(page: Page, fieldconfig: FieldConfig) {
        super(page);
        this.surveyDisplayLocators = new SurveyDisplayLocators(page);
        this.fieldconfig = fieldconfig;
    }
public async copyLinkButtonClick(title:string) {
    await this.page2.locator(this.surveyDisplayLocators.copyLinkButton.replace('title', title)).click();
    const url = await this.page1.evaluate(() => navigator.clipboard.readText());
    return String(url);     
}
public async screenRedirect(title:string) {
    const url = await this.copyLinkButtonClick(title);
    await this.page1.goto(url);
}
public async switchToJapanese() {
    await this.surveyDisplayLocators.languageSwitchButton.selectOption('ja');  
}
public async switchToEnglish() {
    await this.surveyDisplayLocators.languageSwitchButton.selectOption('en');
}
public async verifyInJapanese() {
    await this.locatorShouldBePresent(this.surveyDisplayLocators.titleInJapanese);
}
public async verifyInEnglish() {
    await this.locatorShouldBePresent(this.surveyDisplayLocators.titleInEnglish);
}
public async submitButtonClick() {
  if(await this.surveyDisplayLocators.submitButtonEn.isVisible()){
    await this.surveyDisplayLocators.submitButtonEn.click();
  } else {
    await this.surveyDisplayLocators.submitButtonJp.click();
  }
}
public async submissionVerification() {
  if (await this.surveyDisplayLocators.successMessageEn.isVisible()){
    await this.locatorShouldBePresent(this.surveyDisplayLocators.successMessageEn);
  } else {
    await this.locatorShouldBePresent(this.surveyDisplayLocators.successMessageJp);
  }
}
public async questionInJapanese() {
    await this.locatorShouldBePresent(this.surveyDisplayLocators.japaneseQuestion);
}
public async optionsInJapanese() {
    await this.locatorShouldBePresent(this.surveyDisplayLocators.japaneseOptions);
}
public async questionInEnglish() {
    await this.locatorShouldBePresent(this.surveyDisplayLocators.englishQuestion);
}
public async optionsInEnglish() {
    await this.locatorShouldBePresent(this.surveyDisplayLocators.englishOptions);
}
public async verifySA(question: string) { 
    await this.locatorShouldBePresent(this.page1.locator(this.surveyDisplayLocators.questionTextSA.replace('questionSA', question)));
    await this.locatorShouldBePresent(this.surveyDisplayLocators.questionSA);
    await this.locatorShouldBePresent(this.surveyDisplayLocators.optionSA);
    await this.locatorShouldBePresent(this.surveyDisplayLocators.radiobutton);
}
public async verifyMA(question: string) {
    await this.locatorShouldBePresent(this.page1.locator(this.surveyDisplayLocators.questionTextMA.replace('questionMA', question)));
    await this.locatorShouldBePresent(this.surveyDisplayLocators.questionMA);
    await this.locatorShouldBePresent(this.surveyDisplayLocators.optionMA);
    await this.locatorShouldBePresent(this.surveyDisplayLocators.checkbox);
}
public async verifyFA(question: string) {
    await this.locatorShouldBePresent(this.page1.locator(this.surveyDisplayLocators.questionTextFA.replace('questionFA', question)));
    await this.locatorShouldBePresent(this.surveyDisplayLocators.questionFA);
    await this.locatorShouldBePresent(this.surveyDisplayLocators.textboxFA);
}
public async requiredFieldValidation() {
    const required=await this.locatorShouldBePresent(this.surveyDisplayLocators.required);
    if(required==true) {
      await this.submitButtonClick();
      await this.locatorShouldBePresent(this.surveyDisplayLocators.requiredValidation);
      await this.locatorShouldBePresent(this.surveyDisplayLocators.popupMessage);
    }
}
public async limitExceedValidation() {
    await this.surveyDisplayLocators.textareaFA.click();
    await this.surveyDisplayLocators.textareaFA.fill(readFromYamlFilePath('validationdata')['dataFA']);
    await this.submitButtonClick();
    await this.locatorShouldBePresent(this.surveyDisplayLocators.limitValidation);
    await this.locatorShouldBePresent(this.surveyDisplayLocators.popupMessage);
}
public async ascendingOrderSA(question:string) {
    const choiceElements = await this.page1.$$(this.surveyDisplayLocators.choicesSA.replace('question', question));
    const choices: string[] = [];
    for (const element of choiceElements) {
      const choiceText = await element.textContent();
      const choiceText1=await choiceText?.trim() ?? "";
      if (choiceText1 !== "") {
        choices.push(choiceText1);
      }
    }
    if (choices[0] == "option_SA 1" && choices[1] == "option_SA 2") {
      console.log("The choices of question "+question+" is in ascending order");
    }
}
public async ascendingOrderMA(question:string) {
    const choiceElements = await this.page1.$$(this.surveyDisplayLocators.choicesMA.replace('question', question));
    const choices: string[] = [];
    for (const element of choiceElements) {
      const choiceText = await element.textContent();
      const choiceText1=await choiceText?.trim() ?? "";
      if (choiceText1 !== "") {
        choices.push(choiceText1);
      }
    }
    if (choices[0] == "option_MA 1" && choices[1] == "option_MA 2") {
      console.log("The choices of question "+question+" is in ascending order"); 
    }
}
public async descendingOrderSA(question:string) {
    const choiceElements = await this.page1.$$(this.surveyDisplayLocators.choicesSA.replace('question', question));
    const choices: string[] = [];
    for (const element of choiceElements) {
      const choiceText = await element.textContent();
      const choiceText1=await choiceText?.trim() ?? "";
      if (choiceText1 !== "") {
        choices.push(choiceText1);
      }
    }
    if (choices[0] == "option_SA 3" && choices[1] == "option_SA 2") {
      console.log("The choices of question "+question+" is in descending order"); 
    } 
}
public async descendingOrderMA(question:string) {
    const choiceElements = await this.page1.$$(this.surveyDisplayLocators.choicesMA.replace('question',question));
    const choices: string[] = [];
    for (const element of choiceElements) {
      const choiceText = await element.textContent();
      const choiceText1=await choiceText?.trim() ?? "";
      if (choiceText1 !== "") {
        choices.push(choiceText1);
      }
    }
    if (choices[0] == "option_MA 3" && choices[1] == "option_MA 2") {
      console.log("The choices of question "+question+" is in descending order"); 
    } 
}
public async randomOrderSA(question:string) {
    const choiceElements = await this.page1.$$(this.surveyDisplayLocators.choicesSA.replace('question', question));
    const choices: string[] = [];
    for (const element of choiceElements) {
      const choiceText = await element.textContent();
      const choiceText1=await choiceText?.trim() ?? "";
      if (choiceText1 !== "") {
        choices.push(choiceText1);
      }
    }
    if (choices[0] != "option_SA 0" || choices[1] != "option_SA 1") {
      console.log("The choices of question "+question+" is in random order"); 
    }
}
public async randomOrderMA(question:string) {
    const choiceElements = await this.page1.$$(this.surveyDisplayLocators.choicesMA.replace('question', question));
    const choices: string[] = [];
    for (const element of choiceElements) {
      const choiceText = await element.textContent();
      const choiceText1=await choiceText?.trim() ?? "";
      if (choiceText1 !== "") {
        choices.push(choiceText1);
      }
    }
    if (choices[0] != "option_MA 0" || choices[1] != "option_MA 1") {
      console.log("The choices of question "+question+" is in random order"); 
    }
}
public async exclusiveSA(question: string) {
    //await this.locatorShouldBePresent(this.exclusiveChoiceSA);
    const choiceElements = await this.page1.$$(this.surveyDisplayLocators.choicesSA.replace('question',question));
    const choices: string[] = [];
    for (const element of choiceElements) {
      const choiceText = await element.textContent();
      const choiceText1=await choiceText?.trim() ?? "";
      if (choiceText1 !== "") {
        choices.push(choiceText1);
      }
    }
    if (choices[3] == "option_SA 0") {
      console.log("The exclusive option of SA is in last position"); 
    }  
}
public async exclusiveMA(question: string) {
    //await this.locatorShouldBePresent(this.exclusiveChoiceMA);
    const choiceElements = await this.page1.$$(this.surveyDisplayLocators.choicesMA.replace('question',question));
    const choices: string[] = [];
    for (const element of choiceElements) {
      const choiceText = await element.textContent();
      const choiceText1=await choiceText?.trim() ?? "";
      if (choiceText1 !== "") {
        choices.push(choiceText1);
      }
    }
    if (choices[3] == "option_MA 0") {
      console.log("The exclusive option of MA is in last position"); 
    }  
}

public async answerQuestion1() {
    await this.surveyDisplayLocators.checkBox.click();
}
public async answerQuestion2() {
    await this.surveyDisplayLocators.radioButton.click();
}
public async answerQuestion3(freeAnswer:string) {
    await this.surveyDisplayLocators.textBox1.fill(freeAnswer);
}
public async clickExclusiveToggleButtonSA() {
    await this.surveyDisplayLocators.exclusiveToggleSA.click();
}
public async clickExclusiveToggleButtonMA() {
    await this.surveyDisplayLocators.exclusiveToggleMA.click();
}

}
