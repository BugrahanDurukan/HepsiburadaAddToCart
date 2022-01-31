const { I } = inject();

module.exports = {
  fields: {
    productName: "Logitech M190 Siyah Kablosuz Optik Mouse",
  },
  buttons: {
    product: "//h3[contains(text(),'Logitech M190')]",
  },
  goToProductPage() {
    I.forceClick(this.buttons.product);
  },
};
