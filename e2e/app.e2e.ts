import { MusicWorkshopPage } from './app.po';

describe('music-workshop App', function() {
  let page: MusicWorkshopPage;

  beforeEach(() => {
    page = new MusicWorkshopPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('music-workshop Works!');
  });
});
