import { BasePage } from "../utils/BasePage";
import { Page } from "@playwright/test";
import { readFromYamlFilePath } from "../utils/YamlReader";
import FieldConfig from '../utils/FieldConfig';
import * as fs from 'fs';
import * as path from 'path';

interface PageInfo {
  name: string;
  filePath: string;
}

export default class Append extends BasePage {
  fieldconfig!: FieldConfig;

  constructor(page: Page, fieldconfig: FieldConfig) {
    super(page);
    this.fieldconfig = fieldconfig;
  }
//method
  public async appendData() {
    const pagesToUpdate: PageInfo[] = Object.entries(readFromYamlFilePath('Pages'))
      .map(([name, filePath]) => ({ name, filePath }));
    const stepDefinitionFolderPath = "D:/ippoc2/ip-poc-automation/src/steps-definitions";
    const stepDefinitionFiles = fs.readdirSync(stepDefinitionFolderPath);
    const config = readFromYamlFilePath('AppendDataInStep');
    const fconfig = readFromYamlFilePath('AppendDataInPage');

    for (const fileName of stepDefinitionFiles) {
      if (fileName.endsWith('.ts')) {
        const filePath = path.join(stepDefinitionFolderPath, fileName);
        let stepDefinitionContent = fs.readFileSync(filePath, 'utf-8');

        if (stepDefinitionContent.includes(config['actualData'])) {
          const index = stepDefinitionContent.indexOf(config['actualData']);
          stepDefinitionContent = stepDefinitionContent.slice(0, index) +
            config['actualData'] + '\n' + 'await this.PageObject?.surveyResponse.' +
            `${fconfig['appendData']}();` +
            stepDefinitionContent.slice(index + config['actualData'].length);
          fs.writeFileSync(filePath, stepDefinitionContent);
        }
      }
    }

    for (const pageData of pagesToUpdate) {
      const pageFilePath = pageData.filePath;
      let pageContent = fs.readFileSync(pageFilePath, 'utf-8');
      if (pageContent.includes(fconfig['actualData'])) {
        const index = pageContent.indexOf(fconfig['actualData']);
        if (index !== -1) {
          let endIndex = pageContent.indexOf('}', index);
          if (endIndex !== -1) {
            endIndex += 1;
            pageContent = pageContent.slice(0, endIndex) + '\n' +
              'public async ' + `${fconfig['appendData']}() { }` + pageContent.slice(endIndex);
            fs.writeFileSync(pageFilePath, pageContent);
          }
        }
      }
    }
  }
}
