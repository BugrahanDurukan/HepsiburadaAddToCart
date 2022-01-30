Feature("AddToCart");

Scenario(
  "Add something to the cart as a logged in user",
  ({ I, MainPage, LoginPage, Data, SearchPage, ProductPage, CartFragment }) => {
    I.amOnPage("/");
    /*MainPage.hoverOverLoginButton();
    MainPage.clickOnLoginButton();
    LoginPage.fillTheEmailField(Data.credentials.email);
    LoginPage.clickOnLoginButton();
    LoginPage.fillThePasswordField(Data.credentials.password);
    LoginPage.clickOnEmailSelectButton();
    I.see(Data.credentials.username); //login check*/
    MainPage.fillTheSearchBar(SearchPage.fields.productName);
    MainPage.clickOnSearchButton();
    SearchPage.goToProductPage();
    I.switchToNextTab();
    I.wait(2);
    ProductPage.clickOnAddToCartButton();
    I.wait(2);
    pause();
    CartFragment.clickContinueShoppingButton();
  }
).injectDependencies({ Data: require("../secret.json") });
