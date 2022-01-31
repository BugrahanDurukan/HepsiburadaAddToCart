const { I } = inject();

module.exports = {
  fields: {
    searchBar: ".desktopOldAutosuggestTheme-input",
  },
  buttons: {
    login: "//*[@id='login']",
    searchButton: ".SearchBoxOld-buttonContainer",
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
