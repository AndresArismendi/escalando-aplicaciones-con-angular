import { browser, by, element } from 'protractor';

export class LoginPage {
  selectors = {
    'password' : 'input[name = "password"]',
    'email': 'input[name = "email"]',
    'selectGroup': 'mat-select[name="group"]',
    'form': 'form'
  };

  navigateToLogin() {
    return browser.get('/login');
  }

  setEmail(text) {
    return element(by.css(this.selectors['email'])).sendKeys(text);
  }

  setPassword(text) {
    return element(by.css(this.selectors['password'])).sendKeys(text);
  }
  selectGroupOptionByValue() {
    element(by.css(this.selectors['selectGroup'])).click().then(() => element.all(by.css('mat-option')).last().click());
  }

  logIn() {
    element(by.css(this.selectors['form'])).submit();

  }
}
