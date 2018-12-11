import { AppPage } from './app.po';
import { elementStart, element } from '@angular/core/src/render3';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('App');
  });

  it('should have the right title', () => {
    const titles = [
      'What is Lorem Ipsum?',
      'What is Lorem Ipsum?'
    ];
    page.navigateTo();
    const elements = page.getDashboardTitles();
    titles.forEach((title, index ) => {
      expect(elements.get(index).getText()).toEqual(titles[index]);
    });
  });

  it('')

});
