import { ManualOrderEntryPocPage } from './app.po';

describe('manual-order-entry-poc App', function() {
  let page: ManualOrderEntryPocPage;

  beforeEach(() => {
    page = new ManualOrderEntryPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
