import { BasePage } from "../utils/BasePage";
import { Page,expect } from "@playwright/test";
import FieldConfig from '../utils/FieldConfig';
import { readFileSync } from "fs";
import * as fs from 'fs';

export default class QRCodePage extends BasePage {
  fieldconfig!: FieldConfig;

  constructor(page: Page, fieldconfig: FieldConfig) {
    super(page);
    this.fieldconfig = fieldconfig;
  }

  public async openURL(url: string){
    await this.page1.goto(url);
  }

private async readDataFromFile(filePath: string): Promise<string[]> {
    const fileContent = await readFileSync(filePath, 'utf-8');
    const lines = fileContent.trim().split('\n');
    return lines;
  }


  public async inputData()
  {
    for (let i = 0; i < 5; i++) {
    await this.page1.locator("//button[text()='Free Text']").click();
    const inputText = await this.readDataFromFile("C:/Users/mary.divya/Downloads/qrcode.csv");
   
      const currentData = inputText[i];
      await this.page1.type('//textarea[1]', currentData);
      const filename = this.generateFilename(currentData);
      await this.page1.locator("//button[@aria-label='Download QR Code']//*[name()='svg']").click();
      await this.page1.locator("//*[text()='Filename']").fill(filename);

      const [ download ] = await Promise.all([
        this.page1.waitForEvent('download'),
        await this.page1.locator("//button[normalize-space()='Download']").click()
      ]);
const filePath = 'qrcode/' + filename
await download.saveAs(filePath)
expect(fs.existsSync(filePath)).toBeTruthy()
await this.page1.reload()   
  }
  
  }
private generateFilename(text: string): string {
    return text.substring(0, 10) + '.png';
  }

}