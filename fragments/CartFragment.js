const { I } = inject();

module.exports = {
  buttons: {
    continueShoppingButton: {
      xpath: "//*[contains(text(), 'Alışverişe devam et')]",
    },
    goToCartButton: {
      xpath: "//*[contains(text(), 'Sepete git')]",
    },
  },
  clickContinueShoppingButton() {
    I.forceClick(this.buttons.continueShoppingButton);
  },
  clickGoToCartButton() {
    I.forceClick(this.buttons.goToCartButton);
  },
};
