import FieldConfig from './FieldConfig';
import { Page} from '@playwright/test';
import SurveyCreation from '../Pages/IP_Create-Survey-Page';
import QuestionCreation from '../Pages/IP_Create-Question-Page';
import Dashboard from '../Pages/IP_Dashboard-Page';
import EditSurvey from '../Pages/IP_Edit-Survey-Page';
import SurveyDisplay from '../Pages/IP_Survey-Display-Page';
import SurveyResponse from '../Pages/IP_Survey-Response-Page';
import Regression from '../Pages/IP_Regression-Page';
import Update from '../Pages/UpdateData';
import UpdatePage from '../Pages/UpdatePageObject';
import Append from '../Pages/AppendData';
import DemoPage from '../Pages/Demo-Pages';
import BrowserLaunch from '../Pages/BrowserLaunch';
import QRCodePage from '../Pages/QRCode';
export class PageObject {
  surveycreation: SurveyCreation;
  questionCreation: QuestionCreation;
  dashboard: Dashboard;
  editSurvey: EditSurvey;
  surveyDisplay: SurveyDisplay;
  surveyResponse: SurveyResponse;
  regression: Regression;
  update: Update;
  append:Append;
  updatePage :UpdatePage;
  demopage: DemoPage;
	browserlaunch: BrowserLaunch;
  qrcode:QRCodePage;
constructor(page: Page, fieldConfig: FieldConfig) {
  this.surveycreation = new SurveyCreation(page, fieldConfig);
  this.questionCreation = new QuestionCreation(page, fieldConfig);
  this.dashboard = new Dashboard(page, fieldConfig);
  this.editSurvey= new EditSurvey(page, fieldConfig);
  this.surveyDisplay= new SurveyDisplay(page,fieldConfig);
  this.surveyResponse = new SurveyResponse(page,fieldConfig);
  this.regression= new Regression(page,fieldConfig);
  this.update= new Update(page,fieldConfig);
  this.append= new Append(page,fieldConfig);
  this.updatePage= new UpdatePage(page,fieldConfig);
	this.demopage = new DemoPage(page, fieldConfig);
	this.browserlaunch = new BrowserLaunch(page, fieldConfig);
  this.qrcode= new QRCodePage(page, fieldConfig);



}
}