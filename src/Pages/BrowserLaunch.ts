import { BasePage } from "../utils/BasePage";
import { Page,chromium, Browser } from "@playwright/test";
import FieldConfig from '../utils/FieldConfig';
export default class BrowserLaunch extends BasePage {
  fieldconfig!: FieldConfig;
  private browser: Browser | null = null;

  constructor(page: Page, fieldconfig: FieldConfig) {
    super(page);
    this.fieldconfig = fieldconfig;
  }
  // method to initialize the browser
public async browserLaunch(){
    console.log("Browser launch");
if (!this.browser) {
      this.browser = await chromium.launch({ headless: false });
    }
    this.page = await this.browser.newPage();
  }
public async openURL(url: string){
    await this.page.goto(url);
}

}