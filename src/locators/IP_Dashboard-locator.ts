import { Locator, Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage';

export default class DashboardLocators extends BasePage {
    readonly languageSwitchButton:Locator;
    readonly japaneseLanguage:Locator;
    readonly englishLanguage:Locator;
    readonly addNewButtonInJapnese:Locator;
    readonly addNewButton:Locator;
    readonly pageHeader:Locator;
    readonly pageHeaderInJapanese:Locator;
    readonly readyForPublishInJapanese:Locator;
    readonly readyForPublishInEnglish:Locator;
    readonly stopInJapanese:Locator;
    readonly stopInEnglish:Locator;
    readonly draft:Locator
    readonly titleInEnglish:string;
    readonly titleInJapanese:string;
    readonly descriptionInEnglish:string;
    readonly descriptionInJapanese:string;
    readonly startButton:string;
    readonly startPopup:Locator;
    readonly stopButton:string;
    readonly stopConfirm:Locator;
    readonly stopCancel:Locator;
    readonly stopPopup:Locator;
    readonly deleteButton:string;
    readonly deleteConfirm:Locator;
    readonly deleteCancel:Locator;
    readonly closePopup:Locator;
    readonly dateField:Locator;
    readonly statusField:Locator;
    readonly responseButton:string;
    readonly copyLinkButton:string;
    readonly viewButton:string;
    readonly editButton:string;
    readonly editPageTitle:Locator;
    readonly responsePageTitle:Locator;
    readonly surveyCreatePageTitle:Locator;
    readonly viewPageTitle:Locator;
    constructor(page: Page) {
        super(page);
        
        this.languageSwitchButton= this.page1.locator('//*[@id="language"]');
        this.englishLanguage= this.page1.locator('//*[@data-value="en"]');
        this.japaneseLanguage= this.page1.locator('//*[@data-value="ja"]');
        this.addNewButtonInJapnese= this.page1.locator('//*[text()="新規作成"]');
        this.addNewButton= this.page1.locator('//*[text()="Add new"]');
        this.pageHeader=this.page1.locator('//*[text()="Questionnaire"]');
        this.pageHeaderInJapanese=this.page1.locator('//*[text()="アンケート一覧"]');
        this.readyForPublishInJapanese= this.page1.locator('(//span[text()="公開"])[1]');
        this.readyForPublishInEnglish= this.page1.locator('(//span[text()="Ready for publish"])[1]');
        this.stopInJapanese=this.page1.locator('(//span[text()="停止"])[1]');
        this.stopInEnglish=this.page1.locator('(//span[text()="Stop"])[1]');
        this.draft=this.page1.locator('(//span[text()="Draft"])[1]');
        this.titleInEnglish='(//h6[text()="englishTitle"])[1]';
        this.titleInJapanese='(//h6[text()="japaneseTitle"])[1]';
        this.descriptionInEnglish='(//h6[text()="englishDescription"])[1]';
        this.descriptionInJapanese='(//h6[text()="japaneseDescription"])[1]'
        this.startButton='//h6[(text()="description")]//following-sibling::div/div/button';
        this.startPopup=this.page1.locator('//div[text()="Survey Started"]');
        this.stopButton='//h6[(text()="description")]//following-sibling::div/div/div/following-sibling::button';
        this.stopConfirm=this.page1.locator('//*[@class="swal2-confirm swal2-styled"]');
        this.stopCancel=this.page1.locator('//*[@class"=swal2-cancel swal2-styled"]');
        this.stopPopup=this.page1.locator('//div[text()="Survey Stopped"]');
        this.deleteButton='//h6[text()="title"]/parent::div/following-sibling::div/button[3]';
        this.deleteConfirm=this.page1.locator('//*[@class="swal2-confirm swal2-styled"]');
        this.deleteCancel=this.page1.locator('//*[@class="swal2-cancel swal2-styled"]');
        this.closePopup=this.page1.locator('//*[@class="swal2-confirm swal2-styled"]');
        this.dateField=this.page1.locator('(//*[@class="MuiChip-label MuiChip-labelMedium css-9iedg7"])[1]');
        this.statusField=this.page1.locator('(//*[@class="MuiChip-label MuiChip-labelMedium css-9iedg7"])[1]');
        this.responseButton='//h6[(text()="description")]//following-sibling::div/div/div/button';
        this.copyLinkButton='//h6[text()="title"]/parent::div/following-sibling::div/button[2]';
        this.viewButton='//h6[text()="title"]/parent::div/following-sibling::div/button[1]';
        this.editButton='//h6[text()="title"]/parent::div/following-sibling::div/button[1]';
        this.editPageTitle=this.page1.locator('//*[@class="MuiStack-root css-kku3xr"]/h1');
        this.responsePageTitle=this.page1.locator('//tr/th[2]');
        this.surveyCreatePageTitle=this.page1.locator('//*[@class="MuiStack-root css-kku3xr"]/h1');
        this.viewPageTitle=this.page1.locator('//*[@class="MuiStack-root css-kku3xr"]/h1');
    }
}