'use strict';
var waitFor = require('../../helpers/helper');
var protractor = require('../../ProtractorElements/elementClass');

class ShopPage {
  /**
   * @waitForShopPageToLoad function will wait for page to load and the given element to be present
   */
  async waitForShopPageToLoad() {
    return await waitFor.elementToBeDisplayed(
      './/*[@class="styles__c-i3cvil-5 DiECJ"]',
    );
  }
  /**
   * @onShopPage function will return the festival text of the shop page
   */
  async onShopPage() {
    await this.waitForShopPageToLoad();
    return await protractor.css(
      '.styles__c-i3cvil-5.DiECJ',
      'getText',
    );
  }
  /**
   * @addItemToBasket will add 3 day pass to the basket on shop
   * we can re-use this function for all festivals by just changing last 5 digits
   */
  async addItemToBasket() {
    const addIetmXpathValue =
      './/*[@data-cy="product-card-69088"]//*[@data-cy="quantity-add-button"]';
    await waitFor.elementToBePresent(addIetmXpathValue);
    await protractor.xpath(addIetmXpathValue, 'click');
    const basketButtonXpath =
      './/*[@class="sc-gFaPwZ styles__c-is8ci-0 ilGCmC"]';
    await waitFor.elementToBeClickable(basketButtonXpath);
    return await protractor.xpath(basketButtonXpath, 'click');
  }
  /**
   * @checkAddedItemOnBasket function will check is item aded to basket or not
   */
  async checkAddedItemOnBasket() {
    const getTextOfAddedItem = await protractor.css(
      '.styles__c-sc-1kzwpfw-2.PeLhG',
      'getText',
    );
    const checoutButton = await protractor.css(
      '[data-analytics-event="CTA Clicked"]',
      'isEnabled',
    );
    return [checoutButton, getTextOfAddedItem];
  }
}
module.exports = new ShopPage();
