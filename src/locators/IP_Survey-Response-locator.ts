import { Locator,Page } from "@playwright/test";
import { BasePage } from "../utils/BasePage";

export default class SurveyResponseLocators extends BasePage {
    readonly userId:Locator;
    readonly date:string;
    readonly viewButton:string;
    readonly answer:string;
    constructor(page:Page) {
        super(page);
        
        this.userId = this.page1.locator("(//*[@data-testid='AccountCircleIcon'])[1]");
        this.date = "(//*[text()='currentDate'])[1]";
        this.viewButton = "(//*[text()='currentDate']/parent::div/parent::th/following-sibling::th/button)[1]"
        this.answer = "(//*[text()='answer'])[1]";
    }
}