import { TvguideapirestPage } from './app.po';

describe('tvguideapirest App', function() {
  let page: TvguideapirestPage;

  beforeEach(() => {
    page = new TvguideapirestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
