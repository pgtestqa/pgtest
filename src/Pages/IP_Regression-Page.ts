import { BasePage } from "../utils/BasePage";
import FieldConfig from "../utils/FieldConfig";
import { Page} from "@playwright/test";
import RegressionLocators from "../locators/IP_Regression-locator";
import { integer } from 'aws-sdk/clients/cloudfront';
import { readFromYamlFilePath } from "../utils/YamlReader";
import * as fs from 'fs';


export default class Regression extends BasePage {
    fieldconfig!: FieldConfig;
    readonly regressionLocators:RegressionLocators;
    constructor(page: Page, fieldconfig: FieldConfig) {
        super(page);
        this.regressionLocators = new RegressionLocators(page);
        this.fieldconfig = fieldconfig;
    }
public async clickAddOptionButton() {
    await this.regressionLocators.addOptionButton.click();
}
public async clickAddMultipleOptionButton() {
    await this.regressionLocators.addMultipleOption.click();
}
public async create4MA3SA3FA() {
    for (let i = 1; i < 10; i++) {
      await this.regressionLocators.addQuestionButton.click();
    }
    for (let i = 0; i < 4; i++) {
      await this.page2.locator("//input[@name='question."+i+".questionText.0.text']").fill("This is En Question - "+i);
      await  this.page1.locator("//*[@id='mui-component-select-question."+i+".type']").click();
      await this.page1.locator("//*[@id='menu-question."+i+".type']//*[text()='Multiple Choice']").click();
      await this.page1.locator("//input[@name='question."+i+".questionText.1.text']").fill("This is Jp Question - "+i);
      for (let k = 0; k < 49; k++) {
        await this.clickAddOptionButton();
      }
      for (let j = 0; j < 50; j++) {
        await this.page1.locator("//input[@name='question["+i+"].options["+j+"].optionsName[0].text']").fill("Option En- "+j);
        await this.page1.locator("//input[@name='question["+i+"].options["+j+"].optionsName[1].text']").fill("Option Jp- "+j);
      }
    }
    for (let i = 4; i < 7; i++) {
      await this.page1.locator("//input[@name='question."+i+".questionText.0.text']").fill("This is En Question - "+i);
      await  this.page1.locator("//*[@id='mui-component-select-question."+i+".type']").click();
      await this.page1.locator("//*[@id='menu-question."+i+".type']//*[text()='Single Choice']").click();
      await this.page1.locator("//input[@name='question."+i+".questionText.1.text']").fill("This is Jp Question - "+i);
      for (let k = 0; k < 49; k++) {
        await this.regressionLocators.addOptionButton.click();
      }
      for (let j = 0; j < 50; j++) {
        await this.page1.locator("//input[@name='question["+i+"].options["+j+"].optionsName[0].text']").fill("Option En- "+j);
        await this.page1.locator("//input[@name='question["+i+"].options["+j+"].optionsName[1].text']").fill("Option Jp- "+j);
      }
    }
    for (let i = 7; i < 10; i++) {
      await this.page1.locator("//input[@name='question."+i+".questionText.0.text']").fill("This is En Question - "+i);
      await  this.page1.locator("//*[@id='mui-component-select-question."+i+".type']").click();
      await this.page1.locator("//*[@id='menu-question."+i+".type']//*[text()='Long Text']").click();
      await this.page1.locator("//input[@name='question."+i+".questionText.1.text']").fill("This is Jp Question - "+i);
    }
}
public async addMutlipleOptionsSA() {
    await this.clickAddMultipleOptionButton();
    for (let i = 0; i <= 48;i++) {
      await this.regressionLocators.optionInputBox.type("option_SA "+i);
      await this.enterKeyboard();
    }
    await this.regressionLocators.optionInputBox.type("option_SA 49");
    await this.clickOptionSubmitButton();
}
public async create10SA() {
    for (let i = 1; i < 10; i++) {
      await this.regressionLocators.addQuestionButton.click();
    }
    for (let i = 0; i < 10; i++) {
      await this.page1.locator("//input[@name='question."+i+".questionText.0.text']").fill("This is En Question - "+i);
      await  this.page1.locator("//*[@id='mui-component-select-question."+i+".type']").click();
      await this.page1.locator("//*[@id='menu-question."+i+".type']//*[text()='Single Choice']").click();
      await this.page1.locator("//input[@name='question."+i+".questionText.1.text']").fill("This is Jp Question - "+i);
    }
    for (let i = 0; i < 10; i++) {
      await this.addMutlipleOptionsSA();
        for (let j = 0; j < 50; j++) {
          await this.page1.locator("//input[@name='question["+i+"].options["+j+"].optionsName[1].text']").fill("Option Jp- "+j);
        }
    }
}
public async create10FA() {
    for (let i = 1; i < 10; i++) {
      await this.regressionLocators.addQuestionButton.click();
    }
    for (let i = 0; i < 10; i++) {
      await this.page1.locator("//input[@name='question."+i+".questionText.0.text']").fill("This is En Question - "+i);
      await  this.page1.locator("//*[@id='mui-component-select-question."+i+".type']").click();
      await this.page1.locator("//*[@id='menu-question."+i+".type']//*[text()='Long Text']").click();
      await this.page1.locator("//input[@name='question."+i+".questionText.1.text']").fill("This is Jp Question - "+i);
    }
}
public async enterKeyboard() {
    await this.page1.keyboard.press('Enter');
}
public async clickOptionSubmitButton() {
    await this.regressionLocators.optionSubmitButton.click();
}
public async addMutlipleOptionsMA() {
    await this.clickAddMultipleOptionButton();
    for (let i = 0; i <= 48;i++) {
      await this.regressionLocators.optionInputBox.type("option_MA "+i);
      await this.enterKeyboard();
    }
    await this.regressionLocators.optionInputBox.type("option_MA 49");
    await this.clickOptionSubmitButton();
}
public async create10MA() {
    for (let i = 1; i < 10; i++) {
      await this.regressionLocators.addQuestionButton.click();
    }
    for (let i = 0; i < 10; i++) {
      await this.page1.locator("//input[@name='question."+i+".questionText.0.text']").fill("This is En Question - "+i);
      await  this.page1.locator("//*[@id='mui-component-select-question."+i+".type']").click();
      await this.page1.locator("//*[@id='menu-question."+i+".type']//*[text()='Multiple Choice']").click();
      await this.page1.locator("//input[@name='question."+i+".questionText.1.text']").fill("This is Jp Question - "+i);
    }
    for (let i = 0; i < 10; i++) {
      await this.addMutlipleOptionsMA();
      for (let j = 0; j < 50; j++) {
        await this.page1.locator("//input[@name='question["+i+"].options["+j+"].optionsName[1].text']").fill("Option Jp- "+j);
      }
    }
  }
public async verifyMaximumQuestionMA() {
    for (var i = 1; i <11;i++) {
      await this.locatorShouldBePresent(this.page1.locator(this.regressionLocators.textQuestion.replace('count', i.toString())));
    }
}
public async verifyMaximumOptionsMA() {
    for (var i = 1; i <11;i++) {
      await this.page1.locator(this.regressionLocators.textQuestion.replace('count', i.toString()));
      for (var j = 1; j <51;j++) {
        await this.locatorShouldBePresent(this.page1.locator(this.regressionLocators.textOptions.replace('count', j.toString())));
      }
    }
}
public async verifyMaximumQuestionSA() {
    for (var i = 1; i <11;i++) {
      await this.locatorShouldBePresent(this.page1.locator(this.regressionLocators.textQuestion.replace('count', i.toString())));
    }
}
public async verifyMaximumOptionsSA() {
    for (var i = 1; i <1;i++) {
      await this.page1.locator(this.regressionLocators.textQuestion.replace('count', i.toString()));
      for (var j = 1; j <51;j++) {
        await this.locatorShouldBePresent(this.page1.locator(this.regressionLocators.textOptions.replace('count', j.toString())));
      }
    }
}
public async verifyMaximumQuestionFA() {
    for (var i = 1; i <11;i++) {
      await this.locatorShouldBePresent(this.page1.locator(this.regressionLocators.textQuestion.replace('count', i.toString())));
    }
}
public async verifyQuestionsMA() {
    for (var i = 1; i <5;i++) {
      await this.locatorShouldBePresent(this.page1.locator(this.regressionLocators.questionsMA.replace('count', i.toString())));
    }
}
public async verifyOptionsMA() {
    for (var i = 1; i <5;i++) {
      await this.page1.locator(this.regressionLocators.questionsMA.replace('count', i.toString()));
      for (var j = 1; j <51;j++) {
        await this.locatorShouldBePresent(this.page1.locator(this.regressionLocators.textOptions.replace('count', j.toString())));
      }
    }
}
public async verifyQuestionsSA() {
    for (var i = 1; i <4;i++) {
      await this.locatorShouldBePresent(this.page1.locator(this.regressionLocators.questionsSA.replace('count', i.toString())));
    }
}
public async verifyOptionsSA() {
    for (var i = 1; i <4;i++) {
      await this.page1.locator(this.regressionLocators.questionsSA.replace('count', i.toString()));
      for (var j = 1; j <51;j++) {
        await this.locatorShouldBePresent(this.page1.locator(this.regressionLocators.textOptions.replace('count', j.toString())));
      }
    }
}
public async verifyQuestionsFA() {
    for (var i = 1; i <4;i++) {
      await this.locatorShouldBePresent(this.page1.locator(this.regressionLocators.questionsFA.replace('count', i.toString())));
    }
}
public async verifyOptionsFA() {
    for (var i = 1; i <4;i++) {
      await this.page1.locator(this.regressionLocators.questionsFA.replace('count', i.toString()));
      for (var j = 1; j <4;j++) {
        await this.locatorShouldBePresent(this.page1.locator(this.regressionLocators.textBox.replace('count', j.toString())));
      }
    }
  }
public async createOptions(count:string,optionEN:string,optionJP:string,optionNumber:string) {
    const opt=await this.page1.locator(this.regressionLocators.option1.replace('Count', count).replace('OptionNumber', optionNumber)).getAttribute('placeholder');
    if(opt=="Option in Japanese" || opt== "選択肢（日本語"){
      await this.page1.locator(this.regressionLocators.option1.replace('Count', count).replace('OptionNumber', optionNumber)).fill(optionJP);
      await this.page1.locator(this.regressionLocators.option2.replace('Count', count).replace('OptionNumber', optionNumber)).fill(optionEN);
    } else {
        await this.page1.locator(this.regressionLocators.option1.replace('Count', count).replace('OptionNumber', optionNumber)).fill(optionEN);
        await this.page1.locator(this.regressionLocators.option2.replace('Count', count).replace('OptionNumber', optionNumber)).fill(optionJP);
      }
  }
public async createMAQuestions(count:string,questionEN:string,questionJP:string,optionCount:integer) {
    
    await this.waitForSecond(2);
    const def=await this.page1.locator(this.regressionLocators.questionField1.replace('Count', count)).getAttribute('placeholder');
    await  this.page1.locator(this.regressionLocators.questionTypeDropdown1.replace('Count', count)).click();
    await this.page1.locator(this.regressionLocators.questionTypeMA.replace('Count', count)).click();
    if (def === "Add question in Japanese" || def === "質問の追加（日本語)") { 
      await this.page1.locator(this.regressionLocators.questionField1.replace('Count', count)).fill(questionJP);
      await this.page1.locator(this.regressionLocators.questionField2.replace('Count', count)).fill(questionEN);
    } else {
        await this.page1.locator(this.regressionLocators.questionField1.replace('Count', count)).fill(questionEN);
        await this.page1.locator(this.regressionLocators.questionField2.replace('Count', count)).fill(questionJP);
      }
    for (let k=0;k<optionCount;k++) {
      await this.clickAddOptionButton();
    }
}

public async questionCreate() {
    await this.createMAQuestions("0", readFromYamlFilePath('questions')['question_EN0'] as string, readFromYamlFilePath('questionJP')['questionJP0'] as string, 3)
    for (let i = 0; i <= 3; i++) {
      const MAoptionDataEN = Object.values(readFromYamlFilePath('optionMA')) as string[];
      const MAoptionDataJP = Object.values(readFromYamlFilePath('optionJP_MA')) as string[];
      const optionDataENValue = MAoptionDataEN[i];
      const optionDataJPValue = MAoptionDataJP[i];
      await this.createOptions("0", optionDataENValue, optionDataJPValue, i.toString());
    }
}





////////////////////////// Drag and Drop In A Demo Site //////////////////////////





public async dragAndDropDemo(){

/////////////drag and drop //////////////////////////

await this.page1.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
await this.page1.locator("//div[@id='box1']").dragTo(this.page1.locator("//div[@id='box106']"))


/////////////drag and drop 2 //////////////////////////

await this.page1.goto("https://www.globalsqa.com/demo-site/draganddrop/"); 

const iframeElementHandle = await this.page1.waitForSelector("//iframe[@class='demo-frame lazyloaded']");
const iframe = await iframeElementHandle?.contentFrame();

if (iframe) {
    
    const draggableElement = await iframe.waitForSelector("//img[@alt='The chalet at the Green mountain lake']");

    
    const targetElement = await iframe.waitForSelector("//div[@id='trash']");

   
    const draggableBoundingBox = await draggableElement.boundingBox();

    if (draggableBoundingBox) {
      
      const dragStartX = draggableBoundingBox.x + draggableBoundingBox.width / 2;
      const dragStartY = draggableBoundingBox.y + draggableBoundingBox.height / 2;

    const targetBoundingBox = await targetElement.boundingBox();

    if (targetBoundingBox) {

      const dragEndX = targetBoundingBox.x + targetBoundingBox.width / 2;
      const dragEndY = targetBoundingBox.y + targetBoundingBox.height / 2;
      await this.page1.mouse.move(dragStartX, dragStartY);
      await this.page1.mouse.down();
      await this.page1.mouse.move(dragEndX, dragEndY);
      await this.page1.mouse.up();

    
  }

}

  }

/////////////file upload using drag and drop //////////////////////////


await this.page1.goto(" https://css-tricks.com/examples/DragAndDropFileUploading/");
await this.page1.setInputFiles('#file', "C:/Users/mary.divya/Pictures/Screenshots/Screenshot (113).png");


}








/////////////////////////////Multiple file upload in a demo site //////////////////////////


public async uploadMultipleFiles(){

await this.page1.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
const fileChooserPromise = this.page1.waitForEvent('filechooser');
await this.page1.locator("//input[@id='filesToUpload']").click();
const fileChooser = await fileChooserPromise;
const file1Path = 'C:/Users/mary.divya/Pictures/Screenshots/IPPOC2-59.png';
const file2Path = 'C:/Users/mary.divya/Pictures/Screenshots/IPPOC2-60.png';
const file3Path = 'C:/Users/mary.divya/Pictures/Screenshots/IPPOC2-63.png';
const file4Path = 'C:/Users/mary.divya/Pictures/Screenshots/IPPOC2-64.png';
const filesToUpload = [file1Path, file2Path, file3Path, file4Path];
await fileChooser.setFiles(filesToUpload);

}



/////////////////////////////Multiple file upload in IPPOC1 //////////////////////////

public async uploadFileInPOC1(){
  await this.page1.goto("https://front.ip-poc.com/");
  await this.page1.locator("//input[@type='text']").fill('Demo1');
  await this.page1.locator("//button[@data-testid='join-button']").click();
  await this.page1.locator("//input[@name='chatUser']").fill("TestUser");
  await this.page1.locator("//button[@name='chat-channel-join-btn']").click();
  await this.page1.locator("//input[@id='chk-MON1']").click();
  const fileChooserPromise = this.page1.waitForEvent('filechooser');
  await this.page1.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall css-v3t5pj']//*[name()='svg']").click();
  const fileChooser = await fileChooserPromise;
  const file1Path = 'C:/Users/mary.divya/Pictures/Screenshots/IPPOC2-59.png';
  const file2Path = 'C:/Users/mary.divya/Pictures/Screenshots/IPPOC2-60.png';
  const file3Path = 'C:/Users/mary.divya/Pictures/Screenshots/IPPOC2-63.png';
  const file4Path = 'C:/Users/mary.divya/Pictures/Screenshots/IPPOC2-64.png';
  const filesToUpload = [file1Path, file2Path, file3Path, file4Path];
  await fileChooser.setFiles(filesToUpload);

}





///////////////////////////////////Token Generation/////////////////////////////////

public async captureConsoleToText(): Promise<string> {

   

    const data1="Warning: React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.%s activeElement activeelement";
    const data2="at http://10.10.17.99:3000/static/js/bundle.js:2329:66";
    const data3="at Box (http://10.10.17.99:3000/static/js/bundle.js:8404:72)";
    const data4="at div";
    const data5="at PaymentBillingForm (http://10.10.17.99:3000/static/js/src_pages_payment-summary_PaymentSummary_tsx.chunk.js:112:83)";
    const data6="at RenderedRoute (http://10.10.17.99:3000/static/js/bundle.js:51977:5)";
    const data7='at PaymentSummary (http://10.10.17.99:3000/static/js/src_pages_payment-summary_PaymentSummary_tsx.chunk.js:2294:82)';
    const data8="at ThemeProvider (http://10.10.17.99:3000/static/js/bundle.js:7047:5)";
    const data9="%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools font-weight:bold";
    const data10="at form";
    const data11="at Outlet (http://10.10.17.99:3000/static/js/bundle.js:52526:26)";
    const data12="at ContextProvider (http://10.10.17.99:3000/static/js/bundle.js:1027:3)";
    const data13="Warning: React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.%s";
    const data14="at ThemeProvider (http://10.10.17.99:3000/static/js/bundle.js:7634:5)";
    const data15="at ThemeProvider (http://10.10.17.99:3000/static/js/bundle.js:5444:14)";
    const data16="at ThemeProvider (http://10.10.17.99:3000/static/js/bundle.js:481:3)"; 
    const data17="at BrowserRouter (http://10.10.17.99:3000/static/js/bundle.js:50650:5)";
    const data18="at Router (http://10.10.17.99:3000/static/js/bundle.js:52547:15)";
    const data19="at StyledEngineProvider (http://10.10.17.99:3000/static/js/bundle.js:7226:5)";
    const data20="at App (http://10.10.17.99:3000/static/js/bundle.js:45:77)";

    

    return new Promise((resolve) => {

    this.page1.on('console', async (consoleMessage) => {  
    
    const message =(consoleMessage).text();
    const messageText= message
    .replaceAll(data1,"")
    .replaceAll(data2,"")
    .replaceAll(data3,"")
    .replaceAll(data4,"")
    .replaceAll(data5,"")
    .replaceAll(data6,"")
    .replaceAll(data7,"")
    .replaceAll(data8,"")
    .replaceAll(data9,"")
    .replaceAll(data10,"")
    .replaceAll(data11,"")
    .replaceAll(data12,"")
    .replaceAll(data13,"")
    .replaceAll(data14,"")
    .replaceAll(data15,"")
    .replaceAll(data16,"")
    .replaceAll(data17,"")
    .replaceAll(data18,"")
    .replaceAll(data19,"")
    .replaceAll(data20,"")
    .replaceAll("at DefaultLayout","")
    .replaceAll("at Suspense","")
    .replaceAll('[DOM] Input elements should have autocomplete attributes (suggested: "current-password"): (More info: https://goo.gl/9p2vKq) %o',"")
    .replaceAll("isSmallDevice issmalldevice","")
    .replaceAll("isActive isactive","")
    .replaceAll("Failed to load resource: the server responded with a status of 400 (Bad Request)","")
    .replaceAll("{data: Object, status: 400, statusText: Bad Request, headers: AxiosHeaders, config: Object}","")
    .replaceAll("Failed to load resource: net::ERR_CONNECTION_REFUSED","")
    .replaceAll("undefined","")
    .trim();

    if (messageText) {
       
        resolve(messageText);
           
       }
    
 });
 });
}



public async tokenRequest(url: string): Promise<void> 
 {
     const filePath="D:/ippoc2/ip-poc-automation/Output.txt";
    const cardNumber= Object.values(readFromYamlFilePath('cardnumbers')) as string[];
    const cardCVVNumber = Object.values(readFromYamlFilePath('cvvnumbers')) as string[];

 for(let i=0; i<1; i++) {
     
    const cardNumberValue = cardNumber[i];
    const cardCVVNumberValue = cardCVVNumber[i]; 

    await this.page1.goto(url);
    await this.page1.locator("//input[@id='fullName']").fill("Ajay Jang");
    await this.page1.locator("//input[@placeholder='Address Line 1']").fill("ABC Building");
    await this.page1.locator("//input[@placeholder=' Address Line 2']").fill("Street 8");
    await this.page1.locator("//input[@placeholder='Address Line 3']").fill("Floor 2");
    await this.page1.locator("//input[@name='email']").fill("ajayjang1@gmail.com");
    await this.page1.locator("//input[@name='city']").fill("Kanagawa");
    await this.page1.locator("//div[@id='demo-simple-select']").click();
    await this.page1.locator("//li[contains(text(),'栃木県')]").click();
    await this.page1.locator("//input[@id='zio']").fill("1102024");
    await this.page1.locator("//input[@name='phoneNumber']").fill("4282147936");
    await this.page1.locator("//button[normalize-space()='Proceed']").click();
    await this.page1.locator("//*[@id='cardNumber']").fill(cardNumberValue);
    await this.page1.locator("//*[@id='cardName']").fill("Ajay Jang");
    await this.page1.selectOption("//select[@id='cardMonth']", "10");
    await this.page1.selectOption("//select[@id='cardYear']", "2027");
    await this.page1.locator("//*[@id='cardCvv']").fill(cardCVVNumberValue);
    await this.page1.locator("//button[@class='lg-input ']").click();

   const messageText=await this.captureConsoleToText();
    if (messageText) {
       
        //console.log("Token : "+messageText);
        await fs.appendFileSync(filePath, "Token of card - "+ i +" - "+ cardNumberValue  +" : " + messageText + '\n\n');
        
       }
   
    
  }

  }




}
