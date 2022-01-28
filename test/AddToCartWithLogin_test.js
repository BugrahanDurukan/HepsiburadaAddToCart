Feature("AddToCartWithLogin");

Scenario("test something", ({ I, MainPage, LoginPage, Data }) => {
  I.amOnPage("/");
  MainPage.hoverOverLoginButton();
  I.wait(2);
  MainPage.clickOnLoginButton();
  LoginPage.fillTheEmailField(Data.credentials.email);
  LoginPage.clickOnLoginButton();
  LoginPage.fillThePasswordField(Data.credentials.password);
  LoginPage.clickOnEmailSelectButton();
  I.see(Data.credentials.username); //login check
  MainPage.fillTheSearchBar("logitech");
  MainPage.clickOnSearchButton();
  pause();
}).injectDependencies({ Data: require("../secret.json") });
