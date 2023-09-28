
import FieldConfig from '../utils/FieldConfig';
import { BasePage } from '../utils/BasePage';
import { Page} from '@playwright/test';
import DashboardLocators from '../locators/IP_Dashboard-locator';


export default class Dashboard extends BasePage {
    fieldconfig!: FieldConfig;
    readonly dashboardLocators: DashboardLocators;
    constructor(page: Page, fieldconfig: FieldConfig) {
        super(page);
        this.dashboardLocators = new DashboardLocators(page);
        this.fieldconfig = fieldconfig;
    }
 
public async verificationInJapanese() {
    await this.locatorShouldBePresent(this.dashboardLocators.pageHeaderInJapanese);
    await this.locatorShouldBePresent(this.dashboardLocators.addNewButtonInJapnese);
    // if( await this.locatorShouldBePresent(this.dashboardLocators.readyForPublishInJapanese)) {
    //     console.log("The status is : 公開");
    // } else if ( await this.locatorShouldBePresent(this.dashboardLocators.stopInJapanese)) {
    //     console.log("The status is: 停止");
    //   } else if ( await this.locatorShouldBePresent(this.dashboardLocators.draft)) {
    //     console.log("The status is: Draft");
    //   } else {
    //     console.log("Status not available");
    //   }
}
public async verificationInEnglish() {
    await this.locatorShouldBePresent(this.dashboardLocators.pageHeader);
    await this.locatorShouldBePresent(this.dashboardLocators.addNewButton);
    // if( await this.locatorShouldBePresent(this.dashboardLocators.readyForPublishInEnglish)) {
    //     console.log("The status is : Ready for publish");
    // } else if ( await this.locatorShouldBePresent(this.dashboardLocators.stopInEnglish)) {
    //     console.log("The status is: Stop");
    //   } else if ( await this.locatorShouldBePresent(this.dashboardLocators.draft)) {
    //     console.log("The status is: Draft");
    //   } else {
    //     console.log("Status not available");
    //   }   
}
public async verifyTitleInEnglish(title: string) {
    await this.locatorShouldBePresent(this.page2.locator(this.dashboardLocators.titleInEnglish.replace('englishTitle', title)));
}
public async verifyTitleInJapanese(title: string) {
    await this.locatorShouldBePresent(this.page1.locator(this.dashboardLocators.titleInJapanese.replace('japaneseTitle', title)));
}
public async surveyStart(description: string) {
    if( await this.locatorShouldBePresent(this.page1.locator(this.dashboardLocators.startButton.replace('description', description)))) {
        await this.page1.locator(this.dashboardLocators.startButton.replace('description', description)).click();
    }
}
public async surveyStartVerification() {
    await this.locatorShouldBePresent(this.dashboardLocators.startPopup);
}
public async surveyStop(description: string) {
    if( await this.locatorShouldBePresent(this.page1.locator(this.dashboardLocators.stopButton.replace('description', description)))) {
        await this.page1.locator(this.dashboardLocators.stopButton.replace('description', description)).click();
    }
    await this.dashboardLocators.stopConfirm.click();  
}
public async surveyStopVerification() {
    await this.locatorShouldBePresent(this.dashboardLocators.stopPopup);
}
public async buttonsVerify(title:string) {
    await this.page1.locator(this.dashboardLocators.copyLinkButton.replace('title', title)).isDisabled();
    await this.locatorShouldBePresent(this.dashboardLocators.stopInEnglish);
    await this.locatorShouldBePresent(this.page1.locator(this.dashboardLocators.viewButton.replace('title', title)));
}
public async surveyDeleteClick(title:string) {
    if( await this.locatorShouldBePresent(this.page1.locator(this.dashboardLocators.deleteButton.replace('title', title)))) {
        await this.page1.locator(this.dashboardLocators.deleteButton.replace('title',title)).click();
    }
        await this.dashboardLocators.deleteConfirm.click();
}
public async surveyDeleteVerify() {
    await this.locatorShouldBePresent(this.dashboardLocators.closePopup);
    await this.dashboardLocators.closePopup.click();
}
public async verifySurveyDetails(title: string, description: string){
    await this.locatorShouldBePresent(this.page1.locator(this.dashboardLocators.titleInEnglish.replace('englishTitle', title)));
    await this.locatorShouldBePresent(this.page1.locator(this.dashboardLocators.descriptionInEnglish.replace('englishDescription', description)));
    await this.locatorShouldBePresent(this.dashboardLocators.dateField);
    await this.locatorShouldBePresent(this.dashboardLocators.statusField);
}
public async copySurveyLink(title: string) {
    await this.page1.locator(this.dashboardLocators.copyLinkButton.replace('title', title)).isEnabled();
    if( await this.locatorShouldBePresent(this.page1.locator(this.dashboardLocators.copyLinkButton.replace('title', title)))) {
        await this.page1.locator(this.dashboardLocators.copyLinkButton.replace('title', title)).click();
    }
}
public async responseButtonClick(description: string) {
    await this.page1.locator(this.dashboardLocators.responseButton.replace('description', description)).isEnabled();
    if( await this.locatorShouldBePresent(this.page1.locator(this.dashboardLocators.responseButton.replace('description', description)))) {
        await this.page1.locator(this.dashboardLocators.responseButton.replace('description', description)).click();
    }
}
public async responseVerify() {
    await this.locatorShouldBePresent(this.dashboardLocators.responsePageTitle);
    await this.page1.goBack();
}
public async switchToJapanese() {
    await this.dashboardLocators.languageSwitchButton.click();
    await this.dashboardLocators.japaneseLanguage.click();
}
public async switchToEnglish(){
    await this.dashboardLocators.languageSwitchButton.click();
    await this.dashboardLocators.englishLanguage.click();
}
public async createSurveyVerify() {
    await this.locatorShouldBePresent(this.dashboardLocators.surveyCreatePageTitle);
    await this.page1.goBack();
}
public async editSurveyClick(title: string) {
    if( await this.locatorShouldBePresent(this.page1.locator(this.dashboardLocators.editButton.replace('title', title)))) {
        await this.page1.locator(this.dashboardLocators.editButton.replace('title', title)).click();
    }
}
public async editSurveyVerify() {
    await this.locatorShouldBePresent(this.dashboardLocators.editPageTitle);
    await this.page1.goBack();
}
public async viewSurveyClick(title: string) {
    if( await this.locatorShouldBePresent(this.page1.locator(this.dashboardLocators.viewButton.replace('title', title)))) {
        await this.page1.locator(this.dashboardLocators.viewButton.replace('title', title)).click();
    }
}
public async viewSurveyVerify() {
    await this.locatorShouldBePresent(this.dashboardLocators.viewPageTitle);
    await this.page1.goBack();
}

}
