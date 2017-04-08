import { CiPage } from './app.po';

describe('ci App', function() {
  let page: CiPage;

  beforeEach(() => {
    page = new CiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
