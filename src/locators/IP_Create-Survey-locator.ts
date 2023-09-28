import { Locator, Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage';


export default class SurveyCreationLocators extends BasePage {
    readonly addNewButton: Locator;
    readonly defaultLanguageValidation:Locator
    readonly requiredLanguageValidation:Locator
    readonly defaultLanguageDropdown: Locator;
    readonly defaultLanguageValue: string;
    readonly requiredLanguageDropdown: Locator;
    readonly requiredLanguageValue: string;
    readonly titleValidation: Locator;
    readonly descriptionValidation: Locator;
    readonly titleLimitValidation: Locator;
    readonly descriptionLimitValidation: Locator;
    readonly titleFieldLabelEnglish: Locator;
    readonly titleFieldLabelJapanese: Locator;
    readonly descriptionFieldLabelEnglish: Locator;
    readonly descriptionFieldLabelJapanese: Locator;
    readonly firstTitle: Locator;
    readonly secondTitle: Locator;
    readonly firstDescription: Locator;
    readonly secondDescription: Locator;
    readonly saveAndContinueButton: Locator;
    constructor(page: Page) {
      super(page);
      
      this.addNewButton = this.page1.locator("//*[text()='Add new']");
      this.defaultLanguageValidation=this.page1.locator("//p[1]");
      this.requiredLanguageValidation=this.page1.locator("//p[2]");
      this.defaultLanguageDropdown = this.page1.locator("//*[@id='mui-component-select-defaultLanguage']");
      this.defaultLanguageValue = '//li[text()="defaultLanguageValue"]'; 
      this.requiredLanguageDropdown = this.page1.locator("//*[@id='mui-component-select-requiredLanguage']");
      this.requiredLanguageValue ='//li[text()="requiredLanguageValue"]';
      this.titleValidation=this.page1.locator("(//p[text()='Please add title'])[1]");
      this.descriptionValidation=this.page1.locator("(//p[text()='Please add Description'])[1]");
      this.titleLimitValidation=this.page1.locator("//p[text()='Title must not exceed 100 characters.']");
      this.descriptionLimitValidation=this.page1.locator("//p[text()='Description must not exceed 1000 characters.']");
      this.titleFieldLabelEnglish = this.page1.locator("//*[text()='Title in English']/parent::div/div/div/div/input[@name='titleAndDescription.0.title']");
      this.descriptionFieldLabelEnglish = this.page1.locator("//*[text()='Description in English']/parent::div/div/div/div/textarea[@name='titleAndDescription.0.description']");
      this.titleFieldLabelJapanese= this.page1.locator("//*[text()='Title in Japanese']/parent::div/div/div/div/input[@name='titleAndDescription.0.title']");
      this.descriptionFieldLabelJapanese= this.page1.locator("//*[text()='Description in Japanese']/parent::div/div/div/div/textarea[@name='titleAndDescription.0.description']");
      this.firstTitle= this.page1.locator("[name='titleAndDescription.0.title']");
      this.secondTitle= this.page1.locator("[name='titleAndDescription.1.title']");
      this.firstDescription = this.page1.locator("[name='titleAndDescription.0.description']");
      this.secondDescription = this.page1.locator("[name='titleAndDescription.1.description']"); 
      this.saveAndContinueButton = this.page1.locator("//*[@type='submit']");
    }
}