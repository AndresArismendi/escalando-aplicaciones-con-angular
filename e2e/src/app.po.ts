import { browser, by, element } from 'protractor';

export class AppPage {
  selectors = {
    'title' : 'app-root h1',
    'dash-titles': 'app-dash mat-card-title'
  };

  navigateTo() {
    return browser.get('/');
  }

  getDashboardTitles() {
    return element.all(by.css(this.selectors['dash-titles']));
  }

  getTitleText() {
    return element(by.css(this.selectors['title'])).getText();
  }
}
