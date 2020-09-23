'use strict';
const { Given, When, Then } = require('cucumber');
var expect = require('chai').expect;
var homePage = require('../../pages/homePage/homePgae');
var salePage = require('../../pages/festivalsSalePage/salePage');
var shopPage = require('../../pages/shopPage/shopPage');

Given(/^I navigate to festicket home page$/, async () => {
  await homePage.gotToHomePage('https://www.festicket.com/');
  const onHomePage = await homePage.onHomePageOrNot();
  expect(onHomePage).to.equal(true);
});
Given(
  /^'(.*)' is displayed on sale page and I click Book Now$/,
  async (festivalText) => {
    const getTextOfFestival = await salePage.clickOnSaleFestival(
      festivalText,
    );
    await salePage.clickBookNow();
    expect(getTextOfFestival.toLowerCase()).to.have.string(
      festivalText.replace(/-/g, ' '),
    );
  },
);
When(/^I search for '(.*)' festival$/, async (festival) => {
  await homePage.searchForFestival(festival);
});
When(
  /^I navigate to '(.*)' shop page and add a '(.*)' to basket$/,
  async (festivalText, item) => {
    const onShopPage = await shopPage.onShopPage();
    await shopPage.addItemToBasket();
    expect(onShopPage.toLowerCase()).to.have.string(
      festivalText.replace(/-/g, ' '),
    );
  },
);
Then(
  /^'(.*)' festival should appears in the results$/,
  async (festivalText) => {
    const isFestivalPresent = await homePage.festivalInSearchResult(
      festivalText,
    );
    expect(isFestivalPresent).to.equal(true);
  },
);
Then(
  /^'(.*)' should be added successfully to Basket$/,
  async (itemAddedToBasket) => {
    const isItemAddedToBasket = await shopPage.checkAddedItemOnBasket();
    expect(isItemAddedToBasket[0]).to.equal(true);
    expect(isItemAddedToBasket[1]).to.have.string(itemAddedToBasket);
  },
);
