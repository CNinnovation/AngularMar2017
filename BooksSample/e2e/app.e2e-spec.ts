import { BooksSamplePage } from './app.po';

describe('books-sample App', () => {
  let page: BooksSamplePage;

  beforeEach(() => {
    page = new BooksSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
