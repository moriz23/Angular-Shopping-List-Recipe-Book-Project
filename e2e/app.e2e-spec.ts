import { ShoppingRecipieProjectPage } from './app.po';

describe('shopping-recipie-project App', () => {
  let page: ShoppingRecipieProjectPage;

  beforeEach(() => {
    page = new ShoppingRecipieProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
