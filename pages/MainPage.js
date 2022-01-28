const { I } = inject();

module.exports = {
  fields: {
    searchBar: "//*[contains(@class, 'desktopOldAutosuggestTheme-input')]",
  },
  buttons: {
    login: "//*[@id='login']",
    searchButton: "//*[contains(@class, 'SearchBoxOld-buttonContainer')]",
  },
  unClickableElements: {
    login: "//span[contains(@title, 'Giriş Yap')]",
  },
  hoverOverLoginButton() {
    I.moveCursorTo(this.unClickableElements.login);
  },
  clickOnLoginButton() {
    I.forceClick(this.buttons.login);
  },
  fillTheSearchBar(searchPhrase) {
    I.fillField(this.fields.searchBar, searchPhrase);
  },
  clickOnSearchButton() {
    I.forceClick(this.buttons.searchButton);
  },
};
