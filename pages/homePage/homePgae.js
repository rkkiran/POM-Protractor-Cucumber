'use strict';
var waitFor = require('../../helpers/helper');
var protractor = require('../../ProtractorElements/elementClass');

class HomePage {
  /**
   *
   * @param {*} url - need to pass the home page url or base url
   */
  async gotToHomePage(url) {
    await protractor.getBrowser(url);
  }
  /**
   * @onHomePageOrNot will verify that we or on home page or not
   */
  async onHomePageOrNot() {
    const searchBox = './/*[@class= "styles__c-sc-1wid7j1-2 hkCtph"]';
    await waitFor.elementToBePresent(searchBox);
    return await protractor.xpath(searchBox, 'isPresent');
  }
  /**
   * @searchForFestival function will search for the given Festival text
   * @param {*} musicFestival - Musical Festival text to search for in the search box
   */
  async searchForFestival(musicFestival) {
    return await protractor.css(
      '.styles__c-sc-1wid7j1-2.hkCtph',
      'sendKeys',
      musicFestival,
    );
  }
  /**
   * @festivalInSearchResult function will select the given festival from the drop down
   * @param {*} musicFestival - Musical Festival text, will wait for the festival to be present in the search result and
   *                            will click on the given festival,
   */
  async festivalInSearchResult(musicFestival) {
    const xpathValue = `.//*[@class="styles__c-sc-1nwh6zh-0 cvLvVT"]//*[contains(text(), "${musicFestival}")]`;
    await waitFor.elementToBePresent(xpathValue);
    const isFestivalPresent = await protractor.xpath(
      xpathValue,
      'isPresent',
    );
    return isFestivalPresent;
  }
}
module.exports = new HomePage();
