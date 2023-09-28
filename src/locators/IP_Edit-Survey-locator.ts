import { Locator, Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage';


export default class EditSurveyLocators extends BasePage {
    readonly questionDropdown1: Locator;
    readonly questionField1: Locator;
    readonly setForReviewButton: Locator;
    readonly titleBox1:Locator;
    readonly titleBox2:Locator;
    readonly setForReviewButton1:Locator;
    readonly errorMessage:Locator;
    readonly editButton:string;
    readonly editButton2:Locator;
    readonly surveyTitle:Locator;
    readonly surveyDescription:Locator;
    readonly questionTitle:Locator;
    readonly optionTitle:Locator;
    readonly publishButton:Locator;
    readonly surveyTitle2:string;
    readonly surveyDescription2:string;
    readonly descriptionBox1:Locator;
    readonly expandButton1:Locator;
    readonly startButton: string;
    readonly viewButton: Locator;
    readonly firstOption:Locator;
    readonly exclusiveToggle:Locator;
    readonly questionValidation:Locator;
    readonly typeValidation:Locator;
    readonly optionValidation:Locator;
    readonly titleValidation:Locator;
    readonly descriptionValidation:Locator;
    readonly downArrow:Locator;
    readonly expandButton:Locator;
    readonly options: string;
    readonly question1: string;
    readonly question2: string;
    readonly expandButtonInEdit:Locator;
    readonly questionLabel:Locator;
    constructor(page: Page) {
        super(page);
        
        this.questionDropdown1=this.page1?.locator('(//*[@aria-label="add"])[1]');
        this.questionField1=this.page1?.locator('(//*[@id="outlined-basic"])[1]');
        this.setForReviewButton=this.page1?.locator('//*[@id="root"]//*[contains(@type,"submit")]');
        this.setForReviewButton1=this.page2?.locator('//*[@id="root"]//*[contains(@type,"submit")]');
        this.viewButton=this.page1?.locator("(//*[@id='root']//*[contains(@data-testid,'VisibilityIcon')])[1]");
        this.firstOption=this.page1?.locator("//input[@id='option-0']");
        this.exclusiveToggle=this.page1?.locator("//input[@name='question[0].options[0].exclusive_option']");
        this.titleBox1=this.page1?.locator("//input[@name='titleAndDescription.0.title']");
        this.titleBox2=this.page1?.locator("//input[@name='titleAndDescription.1.title']");
        this.descriptionBox1=this.page1?.locator("//textarea[@name='titleAndDescription.0.description']");
        this.errorMessage=this.page1?.locator("//div[contains(text(),'Sorry,another edit is already in progress. Please ')]");
        this.startButton = "//h6[text()='description']//following-sibling::div/div/button";
        this.editButton = "//h6[text()='title']/parent::div/following-sibling::div/button[1]";
        this.editButton2=this.page1?.locator('(//*[@aria-label="copy"])[1]');
        this.surveyTitle = this.page1?.locator("[name='titleAndDescription.0.title']");
        this.surveyDescription = this.page1?.locator("[name='titleAndDescription.0.description']");
        this.questionTitle = this.page1?.locator("//*[@name='question.0.questionText.0.text']");
        this.optionTitle = this.page1?.locator("//*[@name='question[0].options[0].optionsName[0].text']");
        this.publishButton = this.page1?.locator("//*[text()='publish']");
        this.surveyTitle2 ="(//*[text()='title'])[1]";
        this.surveyDescription2 ="(//*[text()='description'])[1]";
        this.expandButton1=this.page1?.locator("(//*[@data-testid='KeyboardDoubleArrowDownIcon'])[1]");
        this.questionValidation=this.page1?.locator("//p[contains(text(),'Please add question')]");
        this.typeValidation=this.page1?.locator("//p[@class='MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-gfw1ro']");
        this.optionValidation=this.page1?.locator("(//p[contains(text(),'Please add option')])[1]");
        this.titleValidation=this.page1?.locator("(//p[contains(text(),'Please add title')])[1]");
        this.descriptionValidation=this.page1?.locator("(//p[contains(text(),'Please add Description')])[1]");
        this.downArrow=this.page1?.locator("(//*[@data-testid='KeyboardDoubleArrowDownIcon'])[1]");
        this.options =  "(//*[@data-testid='DragIndicatorIcon'])[order]";
        this.expandButton =this.page1?.locator("(//*[@data-testid='KeyboardDoubleArrowDownIcon'])[1]");
        this.question1 = "//*[@name='question.Count.questionText.0.text']";
        this.question2 = "//*[@name='question.Count.questionText.1.text']";
        this.expandButtonInEdit =this.page1.locator("(//*[@data-testid='KeyboardDoubleArrowDownIcon'])[1]");
        this.questionLabel=this.page1.locator("//input[@name='question.0.questionText.0.text']");
    }
}