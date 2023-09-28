/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ICustomWorld } from './custom-world';


import { config } from './config';
import ScenarioContext from './ScenarioContext';

import FieldConfig from '../utils/FieldConfig';
import { PageObject } from '../utils/PageObjects';
import {
  Before,
  After,
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
  Status,
} from '@cucumber/cucumber';
import {
 
  WebKitBrowser,
  // ConsoleMessage,
  // request,
  firefox,
  webkit,
  chromium,
  BrowserContext,
  Page,
   
} from '@playwright/test';
import { ITestCaseHookParameter } from '@cucumber/cucumber/lib/support_code_library_builder/types';
import { ensureDir } from 'fs-extra';

// let browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
const tracesDir = 'traces';
let browser: WebKitBrowser;
let page1: Page;
let page2: Page;
let context1: BrowserContext;
let context2: BrowserContext;
let fieldConfig: FieldConfig;

setDefaultTimeout(process.env.PWDEBUG ? -1 : 600 * 1000);
// const browserlaunched: boolean = process.env.SHOULD_LOGIN === 'false' ? false : true;
BeforeAll(async function (this: ICustomWorld) {
  for (const browsers of config.browsers) {
    // Launch a new browser for each browser type
    switch (browsers) {
      case 'firefox':
        browser = await firefox.launch({ headless: false });
        break;
      case 'webkit':
        browser = await webkit.launch({ headless: false });
        break;
      default:
        browser = await chromium.launch({
          headless: false,
          // args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'],
        });
    }
  }

  context1 = await browser.newContext();
  page1 = await context1.newPage();
  await context1.grantPermissions(['camera', 'microphone','clipboard-read', 'clipboard-write']);
  await ensureDir(tracesDir);
});


Before({ tags: '@ignore' }, async function () {
 
  return 'skipped' as any;
});

Before({ tags: '@debug' }, async function (this: ICustomWorld) {
  this.debug = true;
});

Before(async function (this: ICustomWorld) {
  await context1.tracing.start({ screenshots: true, snapshots: true });
  
  this.page1 = page1;

  ScenarioContext.put('context1', context1);
  
  ScenarioContext.put('page1', page1);
  
  this.fieldConfig = fieldConfig;
  this.PageObject = new PageObject(this.page1, this.fieldConfig);
 
});


Before({ tags: '@editmultiple' }, async function (this: ICustomWorld) {

context2 = await browser.newContext();
page2 = await context2.newPage();
this.page2 = page2;
ScenarioContext.put('context2', context2);
ScenarioContext.put('page2', page2);
this.fieldConfig = fieldConfig;
this.PageObject = new PageObject(this.page2, this.fieldConfig);
});
After({tags:'@editmultiple'},async function (this: ICustomWorld) {
   this.page2?.close();
     this.context2?.close();
})
After(async function (this: ICustomWorld, { result }: ITestCaseHookParameter) {
  // eslint-disable-next-line no-console
  console.log('Result' + result?.status.toString());
  if (result) {
    if (result.status !== Status.PASSED) {
      const image1 = await this.page1?.screenshot();
      image1 && (await this.attach(image1, 'image/png'));

    }

    // }
    // await this.context?.tracing.stop({
    //   path: '../screenshots/image1.png',
    //   //   path: `${tracesDir}/${this.testName}-${this.startTime?.toISOString().split('.')[0]}trace.zip`,
    // });
    // }
    // this.page?.close();
    // this.context?.close();
    ScenarioContext.destroy();
  }
});

AfterAll(async function () {
  // context1?.close();
  // context2?.close();
  // page1.close;
  //page2.close;
  // await browser.close();
});
