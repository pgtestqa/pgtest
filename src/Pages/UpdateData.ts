import { BasePage } from "../utils/BasePage";
import { Page } from "@playwright/test";
import { readFromYamlFilePath } from "../utils/YamlReader";
import FieldConfig from '../utils/FieldConfig';
import * as fs from 'fs';

interface PageInfo {
  name: string;
  filePath: string;
}

export default class Update extends BasePage {
  fieldconfig!: FieldConfig;

  constructor(page: Page, fieldconfig: FieldConfig) {
    super(page);
    this.fieldconfig = fieldconfig;
  }

  public async updateData(actualdata: string) {
    const pagesToUpdate: PageInfo[] = Object.entries(readFromYamlFilePath('Pages')).map(([name, filePath]) => ({ name, filePath }));
    const stepsToUpdate: PageInfo[] = Object.entries(readFromYamlFilePath('Steps')).map(([name, filePath]) => ({ name, filePath }));
    const config = readFromYamlFilePath('UpdateData');
    
    if (config && config['actualData'] === actualdata) {
      for (const stepsData of stepsToUpdate) {
        const stepsFilePath = stepsData.filePath;
        const stepContent = fs.readFileSync(stepsFilePath, 'utf-8');

        const stepDefinitionContent = stepContent.replaceAll(
          `${config['actualData']}()`,
          `${config['newData']}()`
        );

        fs.writeFileSync(stepsFilePath, stepDefinitionContent);
      }

      for (const pageData of pagesToUpdate) {
        const pageFilePath = pageData.filePath;
        const pageContent = fs.readFileSync(pageFilePath, 'utf-8');
        
        const updatedContent = pageContent.replaceAll(
          `${config['actualData']}()`,
          `${config['newData']}()`
        );

        fs.writeFileSync(pageFilePath, updatedContent);
      }
    }
  }
}
