export class MusicWorkshopPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('music-workshop-app p')).getText();
  }
}
