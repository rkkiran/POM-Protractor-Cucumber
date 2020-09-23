'use strict';
var waitFor = require('../../helpers/helper');
var protractor = require('../../ProtractorElements/elementClass');

class SalePage {
  /**
   * @clickFestivals below function will click on homepage nav
   */
  async clickFestivals() {
    await protractor.xpath(
      '(.//*[@class="styles__c-sc-135r2i6-0 cBLnDx"]//a[contains(@href,"/festivals")])[1]',
      'click',
    );
    return await waitFor.elementToBeDisplayed(
      '(.//*[contains(text(), "Show More")])[1]',
    );
  }
  /**
   * @clickOnFestival function will return the festival text and then clicks Book Now
   * This function will check if fesiival is not present then it will click show more button
   * then it will check the given festival is on sale or not if yes then it will click on festival
   *
   */
  async clickOnSaleFestival(festival) {
    const saleFestivalXpath = `//a[contains(@href,"${festival}")]//*[@class="sc-eNQAEJ euziCO"]`;
    const isFestivalOnSale = `.//a[contains(@href, "${festival}")]//*[@class="sc-cLQEGU dsLBrL"]`;
    await this.clickFestivals();
    const isFestivalPresent = await protractor.xpath(
      saleFestivalXpath,
      'isPresent',
    );
    if (isFestivalPresent === false) {
      await this.clickShowMore();
    }
    await waitFor.elementToBeDisplayed(saleFestivalXpath);
    const onSale = await protractor.xpath(
      isFestivalOnSale,
      'isPresent',
    );
    if (onSale === true) {
      const getFestivalText = await protractor.xpath(
        saleFestivalXpath,
        'getText',
      );
      await protractor.xpath(saleFestivalXpath, 'click');
      return getFestivalText;
    } else {
      console.log('This festival is not on sale');
    }
  }
  /**
   * @clickShowMore function will click show more button on Festivals page
   */
  async clickShowMore() {
    return await protractor.xpath(
      '(.//*[contains(text(), "Show More")])[1]',
      'click',
    );
  }
  /**
   * @clickBookNow will click book now
   */
  async clickBookNow() {
    return await protractor.xpath(
      './/*[@class="styles__c-koz3wc-0 juQoNd"]//*[@class="sc-hmzhuo hCmmB"]',
      'click',
    );
  }
}
module.exports = new SalePage();
