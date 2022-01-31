const { within } = require("codeceptjs");

const { I } = inject();

module.exports = {
  fields: {
    productTitle: ".product-name",
    otherMerchantName: ".merchantStore",
    merchantName: {
      xpath: "//span[contains(text(), 'Satıcı')]/following-sibling::span/a",
    },
  },
  buttons: {
    addToCartButton: { id: "addToCart" },
    addToCartFromAnotherSellerButton: ".add-to-basket",
    cartPageButton: { id: "cartItemCount" },
  },
  clickOnAddToCartButton() {
    I.forceClick(this.buttons.addToCartButton);
  },
  clickOnAnotherSellersAddToCart() {
    I.forceClick(this.buttons.addToCartFromAnotherSellerButton);
  },
  async grabProductName() {
    return await I.grabTextFrom(this.fields.productTitle);
  },
  async grabMerchantName() {
    return await I.grabTextFrom(this.fields.merchantName);
  },
  async grabOtherMerchantName() {
    return await I.grabTextFrom(this.fields.otherMerchantName);
  },
  goToCartPage() {
    I.forceClick(this.buttons.cartPageButton);
  },
};
