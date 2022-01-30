const { I } = inject();

module.exports = {
  fields: {},
  buttons: {
    addToCart: { id: "addToCart" },
  },
  clickOnAddToCartButton() {
    I.forceClick(this.buttons.addToCart);
  },
};
