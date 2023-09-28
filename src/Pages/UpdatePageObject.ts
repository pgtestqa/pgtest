import { BasePage } from "../utils/BasePage";
import { Page } from "@playwright/test";
import FieldConfig from '../utils/FieldConfig';
import * as fs from 'fs';
import * as path from 'path';
import { readFromYamlFilePath } from "../utils/YamlReader";

export default class UpdatePage extends BasePage {
  fieldconfig!: FieldConfig;

  constructor(page: Page, fieldconfig: FieldConfig) {
    super(page);
    this.fieldconfig = fieldconfig;
  }

  public async updatePageObject() {
    const pagesFolderPath = "src/Pages";
    const pageObjectPath = "src/utils/PageObjects.ts"
    const pageFiles = fs.readdirSync(pagesFolderPath);
    let className: string = '';
    const classNameFromYaml = readFromYamlFilePath('Class')['className'];
    
    if (typeof classNameFromYaml === 'string') {
    className = classNameFromYaml;
    }

    for (const fileName of pageFiles) {
      if (fileName.endsWith('.ts')) {
        const filePath = path.join(pagesFolderPath, fileName);
        let pageContent = fs.readFileSync(filePath, 'utf-8');
        if (pageContent.includes(className)) {
          const pageObjectName = fileName.replace('.ts', '');
          const pageObjectContent = fs.readFileSync(pageObjectPath, 'utf-8');
          if (!pageObjectContent.includes(pageObjectName)) {
            const exportIndex = pageObjectContent.lastIndexOf('export');
            const newImportStatement = `import ${className} from '../Pages/${pageObjectName}';`;
            const updatedPageObjectContent = pageObjectContent.slice(0, exportIndex - 1) + newImportStatement + '\n' + pageObjectContent.slice(exportIndex);
            fs.writeFileSync(pageObjectPath, updatedPageObjectContent);

            const pageObjectContent1 = fs.readFileSync(pageObjectPath, 'utf-8');
            const thisIndex = pageObjectContent1.lastIndexOf(';');
            const pageObjectInstance = `this.${className.toLowerCase()} = new ${className}(page, fieldConfig);`;
            const updatedInstance = pageObjectContent1.slice(0, thisIndex + 2) + '\n' + '\t'+ pageObjectInstance + '\n' + pageObjectContent1.slice(thisIndex + 2);
            fs.writeFileSync(pageObjectPath, updatedInstance);

            const pageObjectContent2 = fs.readFileSync(pageObjectPath, 'utf-8');
            const constructorIndex = pageObjectContent2.indexOf('constructor');
            const newObjectLine = `${className.toLowerCase()}: ${className};`;
            const final = pageObjectContent2.slice(0, constructorIndex - 1) +'\t'+newObjectLine + '\n' + pageObjectContent2.slice(constructorIndex);
            fs.writeFileSync(pageObjectPath, final);
          }
        }
      }
    }
  }
}
