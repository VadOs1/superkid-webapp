import { SuperkidWebappPage } from './app.po';

describe('superkid-webapp App', function() {
  let page: SuperkidWebappPage;

  beforeEach(() => {
    page = new SuperkidWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
