import { Locator, Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage';

export default class SurveyDisplayLocators extends BasePage {
    readonly copyLinkButton:string;
    readonly languageSwitchButton:Locator;
    readonly titleInJapanese:Locator;
    readonly titleInEnglish:Locator;
    readonly submitButtonEn:Locator;
    readonly submitButtonJp:Locator;
    readonly successMessageEn:Locator;
    readonly successMessageJp:Locator;
    readonly japaneseQuestion:Locator;
    readonly japaneseOptions:Locator;
    readonly englishQuestion:Locator;
    readonly englishOptions:Locator;
    readonly questionSA:Locator;
    readonly questionTextSA:string;
    readonly questionMA:Locator;
    readonly questionTextMA:string;
    readonly questionFA:Locator;
    readonly questionTextFA:string;
    readonly optionSA:Locator;
    readonly optionMA:Locator;
    readonly checkbox:Locator;
    readonly radiobutton:Locator;
    readonly textboxFA:Locator;
    readonly required:Locator;
    readonly requiredValidation:Locator;
    readonly popupMessage:Locator;
    readonly textareaFA:Locator;
    readonly limitValidation:Locator;
    readonly choicesSA:string;
    readonly choicesMA:string;
    readonly exclusiveChoiceSA:Locator;
    readonly exclusiveChoiceMA:Locator;
    readonly textQuestion:string;
    readonly textOptions:string;
    readonly checkBox:Locator;
    readonly radioButton:Locator;
    readonly textBox1:Locator;
    readonly exclusiveToggleSA:Locator;
    readonly exclusiveToggleMA:Locator;
    constructor(page:Page) {
        super(page);
        
        this.copyLinkButton='//h6[text()="title"]/parent::div/following-sibling::div/button[2]';
        this.languageSwitchButton=this.page1.locator('//*[@id="language"]');
        this.titleInJapanese= this.page1.locator('(//h2[@data-language="ja"])[1]');
        this.titleInEnglish= this.page1.locator('(//h2[@data-language="en"])[1]');
        this.submitButtonEn=this.page1.locator('(//input[@type="submit"])[1]');
        this.submitButtonJp=this.page1.locator('(//input[@type="submit"])[2]');
        this.successMessageEn= this.page1.locator("//*[text()='Your Response has been recorded']");
        this.successMessageJp=this.page1.locator("//*[text()='回答を登録しました。']");
        this.japaneseQuestion= this.page1.locator('(//h6[@data-language="ja"])[1]');
        this.japaneseOptions= this.page1.locator('(//label[@data-language="ja"])[1]');
        this.englishQuestion= this.page1.locator('(//h6[@data-language="en"])[1]');
        this.englishOptions=this.page1.locator('(//label[@data-language="en"])[1]');
        this.questionSA= this.page1.locator('(//*[@question-type="2"])[1]');
        this.questionMA= this.page1.locator('(//*[@question-type="1"])[1]');
        this.questionFA= this.page1.locator('(//*[@question-type="3"])[1]');
        this.optionSA= this.page1.locator('(//*[@question-type="2"]/label)[1]');
        this.optionMA= this.page1.locator('(//*[@question-type="1"]/label)[1]');
        this.questionTextSA='(//h6[text()=" questionSA "])[1]';
        this.questionTextMA='(//h6[text()=" questionMA "])[1]';
        this.questionTextFA='(//h6[text()=" questionFA "])[1]';
        this.checkbox=this.page1.locator('(//*[@type="checkbox"])[1]');
        this.radiobutton=this.page1.locator('(//*[@type="radio"])[1]');
        this.textboxFA=this.page1.locator('(//div[@question-type="3"])[1]/textarea');
        this.required=this.page1.locator('(//span[@class="text-danger"])[1]') 
        this.requiredValidation=this.page1.locator('(//*[@id="text-error"])[1]'); 
        this.popupMessage=this.page1.locator("//ul[@id='toaster-notification']");
        this.textareaFA=this.page1.locator('(//textarea[@id="exampleFormControlTextarea1"])[1]');
        this.limitValidation=this.page1.locator('(//div[@error-type="length"])[1]');
        this.choicesSA='//h6[text()="question"][1]/following-sibling::ul/div[@question-type="2"]/label';
        this.choicesMA='//h6[text()="question"][1]/following-sibling::ul/div[@question-type="1"]/label';
        this.exclusiveChoiceSA=this.page1.locator("//input[@type='radio'][@exclusive_option='True'][1]");
        this.exclusiveChoiceMA=this.page1.locator("//input[@type='checkbox'][@exclusive_option='True'][1]");
        this.textQuestion='//h6[@data-language="en"][contains(text(),"")][count]';
        this.textOptions='(//label[@data-language="en"][contains(text(),"")])[count]';
        this.checkBox=this.page1.locator("(//*[@type='checkbox'])[1]");
        this.radioButton=this.page1.locator("(//*[@type='radio'])[1]");
        this.textBox1=this.page1.locator("//*[@id='exampleFormControlTextarea1']");
        this.exclusiveToggleSA=this.page1.locator("(//*[@type='checkbox'])[10]");
        this.exclusiveToggleMA=this.page1.locator("(//*[@type='checkbox'])[1]");

    }
}
