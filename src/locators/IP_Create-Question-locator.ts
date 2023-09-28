import { Locator, Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage';


export default class QuestionCreationLocators extends BasePage {
    readonly questionPageTitle: Locator;
    readonly addQuestionField1: Locator;
    readonly addSingleQuestionButton: Locator;
    readonly questionTypeDropdown: Locator;
    readonly questionType: String;
    readonly addOptionButton: string;
    readonly addMultipleOptionButton: Locator;
    readonly requiredFlag: Locator;
    readonly optionField1: Locator;
    readonly optionError: Locator;
    readonly multipleQuestionInputBox:Locator;
    readonly questionSubmitButton:Locator;
    readonly addMultipleQuestion:Locator;
    readonly addMultipleOption:Locator;
    readonly dialogBox:Locator;
    readonly optionInputBox:Locator;
    readonly optionSubmitButton:Locator;
    readonly exclusiveToggle:Locator;
    readonly questionField1: string;
    readonly questionField2: string;
    readonly questionTypeDropdown1: string;
    readonly questionTypeMA: string;
    readonly expandButton: Locator;
    readonly questionTypeSA: string;
    readonly questionTypeFA: string;
    readonly option1: string;
    readonly option2: string;
    readonly setForReviewButton:Locator;
    readonly textLocator:string;
    readonly options: string;
    readonly questionValidation:Locator;
    readonly typeValidation:Locator;
    readonly optionValidations:Locator;
    readonly multipleOptionValidation:Locator;
    readonly dialogClose:Locator;
    readonly choiceOrderDropdown:string;
    readonly choiceOrderValue:string;
    readonly choiceOrderValueVerify:string;
    readonly requiredButton:string;
    readonly questionLabel:Locator;
    constructor(page: Page) {
      super(page);
      
      this.questionPageTitle = this.page1.locator("//*[text()='Adding Questions and Options']");
      this.addQuestionField1 = this.page1.locator("//*[@name='question.0.questionText.0.text']");
      this.addSingleQuestionButton = this.page1.locator("//*[@data-testid='AddCircleOutlineIcon']");
      this.questionTypeDropdown = this.page1.locator("//*[@id='mui-component-select-question.0.type']");
      this.questionType ="//li[text()='questionType']";
      this.addOptionButton = "(//*[text()=' Add option'])[Count]"
      this.addMultipleOptionButton = this.page1.locator("(//*[text()='Add multiple option'])[1]");
      this.requiredFlag = this.page1.locator("//*[@name='question.0.required']");
      this.optionField1 = this.page1.locator("//*[@id='option-0']");
      this.optionError = this.page1.locator("//*[@id='option-0-helper-text']");
      this.multipleQuestionInputBox=this.page1.locator("//textarea[@placeholder='Enter your questions']");
      this.questionSubmitButton=this.page1.locator("//button[text()='Add']");
      this.addMultipleQuestion=this.page1.locator("(//button[@aria-label='add'])[3]");
      this.addMultipleOption=this.page1.locator("(//a[text()='Add multiple option'])[1]");
      this.dialogBox=this.page1.locator("//h2[@id='customized-dialog-title']");
      this.optionInputBox=this.page1.locator("//textarea[@placeholder='Enter your options']");
      this.optionSubmitButton=this.page1.locator("//button[text()='Add']");
      this.dialogClose=this.page1.locator('//*[@id="customized-dialog-title"]/button');
      this.exclusiveToggle=this.page1.locator("(//*[@type='checkbox'])[1]");
      this.questionField1 ="//*[@name='question.Count.questionText.0.text']";
      this.questionTypeDropdown1 ="//*[@id='mui-component-select-question.Count.type']";
      this.questionTypeMA = "//*[@id='menu-question.Count.type']//*[text()='Multiple Choice']";
      this.questionTypeSA = "//*[@id='menu-question.Count.type']//*[text()='Single Choice']";
      this.questionTypeFA = "//*[@id='menu-question.Count.type']//*[text()='Long Text']";
      this.questionField2="//*[@name='question.Count.questionText.1.text']"; 
      this.option1 ="//*[@name='question[Count].options[OptionNumber].optionsName[0].text']";
      this.option2 ="//*[@name='question[Count].options[OptionNumber].optionsName[1].text']";
      this.setForReviewButton=this.page1.locator("//*[@type='submit']");
      this.textLocator="//*[text()='Text']";
      this.options =  "(//*[@data-testid='DragIndicatorIcon'])[order]";
      this.questionValidation=this.page1.locator("//p[contains(text(),'Please add question')]");
      this.typeValidation=this.page1.locator("//p[@class='MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-gfw1ro']");
      this.optionValidations=this.page1.locator("(//p[contains(text(),'Please add option')])[1]");
      this.multipleOptionValidation=this.page1.locator("//p[text()='Maximum 50 titles are allowed']");
      this.choiceOrderDropdown="//*[@id='mui-component-select-question.Count.order']";
      this.choiceOrderValue="//li[text()='value']";
      this.choiceOrderValueVerify="(//*[text()='Order'])[Count]"
      this.requiredButton="//input[@name='question.count.required']";
      this.expandButton =this.page1.locator("(//*[@data-testid='KeyboardDoubleArrowDownIcon'])[1]");
      this.questionLabel=this.page1.locator("//input[@name='question.0.questionText.0.text']");
    }
}