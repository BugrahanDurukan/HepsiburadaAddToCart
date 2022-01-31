const { I } = inject();

module.exports = {
  buttons: {
    continueShoppingButton: {
      xpath: "//*[contains(text(), 'Alışverişe devam et')]",
    },
    goToCartButton: {
      xpath: "//*[contains(text(), 'Sepete git')]",
    },
    closeButton: ".checkoutui-Modal-2iZXl",
  },
  clickContinueShoppingButton() {
    I.forceClick(this.buttons.continueShoppingButton);
  },
  clickGoToCartButton() {
    I.forceClick(this.buttons.goToCartButton);
  },
  clickCloseButton() {
    I.forceClick(this.buttons.closeButton);
  },
};
