import { TimerPage } from './app.po';

describe('watch App', function() {
  let page: TimerPage;

  beforeEach(() => {
    page = new TimerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
