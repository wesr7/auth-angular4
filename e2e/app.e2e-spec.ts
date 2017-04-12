import { AuthAngularPage } from './app.po';

describe('auth-angular App', () => {
  let page: AuthAngularPage;

  beforeEach(() => {
    page = new AuthAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
