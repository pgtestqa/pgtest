import { BasePage } from "../utils/BasePage";
import { Page } from "@playwright/test";
import FieldConfig from '../utils/FieldConfig';



export default class NewPage extends BasePage {
  fieldconfig!: FieldConfig;

  constructor(page: Page, fieldconfig: FieldConfig) {
    super(page);
    this.fieldconfig = fieldconfig;
  }
}