import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParaageText() {
    return element(by.css('app-root h1')).getText();
  }
}
