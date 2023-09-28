import { BasePage } from "../utils/BasePage";
import { Page } from "@playwright/test";
import FieldConfig from '../utils/FieldConfig';
import * as fs from 'fs';
import * as path from 'path';
import { readFromYamlFilePath } from "../utils/YamlReader";
export default class DemoPage extends BasePage {
  fieldconfig!: FieldConfig;

  constructor(page: Page, fieldconfig: FieldConfig) {
    super(page);
    this.fieldconfig = fieldconfig;
  }


  public async getIndex(indexstring: string) {
  let className: string = '';
  const classNameFromYaml = readFromYamlFilePath('Class')['className'];

  if (typeof classNameFromYaml === 'string') {
    className = classNameFromYaml;
  }

  const pagesFolderPath = "src/Pages";
  const pageObjectPath = "src/utils/PageObjects.ts";
  const pageFiles = fs.readdirSync(pagesFolderPath);

  for (const fileName of pageFiles) {
    if (fileName.endsWith('.ts')) {
      const filePath = path.join(pagesFolderPath, fileName);
      let pageContent = fs.readFileSync(filePath, 'utf-8');
      if (pageContent.includes(className)) {
        const pageObjectName = fileName.replace('.ts', '');
        const pageObjectContent = fs.readFileSync(pageObjectPath, 'utf-8');
        if (!pageObjectContent.includes(pageObjectName)) {
          const index = pageObjectContent.lastIndexOf(indexstring);
          return index;
        }
      }
    }
  }

  
  return -1;
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
        
       // const filePath = path.join(pagesFolderPath, fileName);
       // let pageContent = fs.readFileSync(filePath, 'utf-8');
        //if (pageContent.includes(className)) {
         const pageObjectName = fileName.replace('.ts', '');
         let pageObjectContent = fs.readFileSync(pageObjectPath, 'utf-8');
         if (!pageObjectContent.includes(pageObjectName)) {
            //const exportIndex = pageObjectContent.lastIndexOf('export');
          
            const newImportStatement = `import ${className} from '../Pages/${pageObjectName}';`;
            pageObjectContent = pageObjectContent.slice(0, await this.getIndex("export") - 1) + newImportStatement + '\n' + pageObjectContent.slice(await this.getIndex("export"));
            fs.writeFileSync(pageObjectPath, pageObjectContent);

            const pageObjectContent1 = fs.readFileSync(pageObjectPath, 'utf-8');
            const thisIndex = pageObjectContent1.lastIndexOf(';');
            const pageObjectInstance = `this.${className.toLowerCase()} = new ${className}(page, fieldConfig);`;
            pageObjectContent = pageObjectContent1.slice(0, thisIndex + 2) + '\n' + '\t'+ pageObjectInstance + '\n' + pageObjectContent1.slice(thisIndex + 2);
            fs.writeFileSync(pageObjectPath, pageObjectContent);

            const pageObjectContent2 = fs.readFileSync(pageObjectPath, 'utf-8');
            //const constructorIndex = pageObjectContent2.indexOf('constructor');
            const newObjectLine = `${className.toLowerCase()}: ${className};`;
            pageObjectContent = pageObjectContent2.slice(0,  await this.getIndex("constructor") - 1) +'\t'+newObjectLine + '\n' + pageObjectContent2.slice(await this.getIndex("constructor"));
            fs.writeFileSync(pageObjectPath, pageObjectContent);
          }
        }
      }
    }
  }
//}
