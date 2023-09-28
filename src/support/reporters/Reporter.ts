import { IFormatterOptions } from '@cucumber/cucumber';
import { CucumberJSAllureFormatter, AllureRuntime } from 'allure-cucumberjs';

export default class Reporter extends CucumberJSAllureFormatter {
  constructor(options: IFormatterOptions) {
    super(options, new AllureRuntime({ resultsDir: './reports/allure-results' }), {
      labels: [
        {
          pattern: [/@feature:(.*)/],
          name: 'epic',
        },
        {
          pattern: [/@severity:(.*)/],
          name: 'severity',
        },
      ],
      links: [
        {
          pattern: [/@issue=(.*)/],
          type: 'issue',
          urlTemplate: 'http://localhost:8080/issue/%s',
        },
        {
          pattern: [/@tms=(.*)/],
          type: 'tms',
          urlTemplate: 'http://localhost:8080/tms/%s',
        },
      ],
    });
  }
}
