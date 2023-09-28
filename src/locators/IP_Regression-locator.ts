import { Locator,Page } from "@playwright/test";
import { BasePage } from "../utils/BasePage";

export default class RegressionLocators extends BasePage {
    readonly questionField1: string;
    readonly questionField2: string;
    readonly questionTypeDropdown1: string;
    readonly questionTypeMA: string;
    readonly questionTypeSA: string;
    readonly questionTypeFA: string;
    readonly option1: string;
    readonly option2: string;
    readonly addQuestionButton: Locator
    readonly addOptionButton:Locator;
    readonly addMultipleOption:Locator;
    readonly optionInputBox:Locator;
    readonly optionSubmitButton:Locator;
    readonly dragable :Locator;
    readonly dropable :Locator;
    readonly textQuestion:string;
    readonly textOptions:string;
    readonly textBox:string;
    readonly questionsMA:string;
    readonly questionsSA:string;
    readonly questionsFA:string;
    readonly questionsField1: string;
    readonly questionsField2: string;
    readonly questionsTypeDropdown1: string;
    readonly questionsTypeMA: string;
    constructor(page:Page) {
        super(page);
        
        this.questionField1 ="//*[@name='question.Count.questionText.0.text']";
        this.questionTypeDropdown1 ="//*[@id='mui-component-select-question.Count.type']";
        this.questionTypeMA = "//*[@id='menu-question.Count.type']//*[text()='Multiple Choice']";
        this.questionTypeSA = "//*[@id='menu-question.Count.type']//*[text()='Single Choice']";
        this.questionTypeFA = "//*[@id='menu-question.Count.type']//*[text()='Long Text']";
        this.questionField2="//*[@name='question.Count.questionText.1.text']"; 
        this.option1 ="//*[@name='question[Count].options[OptionNumber].optionsName[0].text']";
        this.option2 ="//*[@name='question[Count].options[OptionNumber].optionsName[1].text']";
        this.addQuestionButton=this.page1.locator("//*[@data-testid='AddCircleOutlineIcon']");
        this.addOptionButton = this.page1.locator("(//*[text()=' Add option'])[1]")
        this.addMultipleOption=this.page1.locator("(//*[@class='MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1m009h6'])[1]");
        this.optionInputBox=this.page1.locator("//textarea[@placeholder='Enter your options']");
        this.optionSubmitButton=this.page1.locator("//button[text()='Add']");
        this.dragable=this.page1.locator("//img[@alt='The chalet at the Green mountain lake']");
        this.dropable= this.page1.locator("//div[@id='trash']");
        this.textQuestion='//h6[@data-language="en"][contains(text(),"")][count]';
        this.textOptions='(//label[@data-language="en"][contains(text(),"")])[count]';
        this.textBox='(//*[@id="exampleFormControlTextarea1"])[count]'
        this.questionsMA='(//*[@question-type="1"])[count]';
        this.questionsSA='(//*[@question-type="2"])[count]';
        this.questionsFA='(//*[@question-type="3"])[count]';
        this.questionsField1 ="//*[@name='question.Count.questionText.0.text']";
        this.questionsTypeDropdown1 ="//*[@id='mui-component-select-question.Count.type']";
        this.questionsTypeMA = "//*[@id='menu-question.Count.type']//*[text()='Multiple Choice']";
        this.questionsField2="//*[@name='question.Count.questionText.1.text']"; 
    }
}