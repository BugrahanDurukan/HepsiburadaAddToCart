const { I } = inject();

module.exports = {
  fields: {
    productName: "Logitech M190",
  },
  buttons: {
    product: "//h3[contains(text(),'Logitech M190')]",
  },
  goToProductPage() {
    I.forceClick(this.buttons.product);
  },
};
