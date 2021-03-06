Feature("AddToCart");

Scenario(
  "Add something to the cart as a logged in user",
  async ({
    I,
    MainPage,
    LoginPage,
    Data,
    SearchPage,
    ProductPage,
    CartFragment,
    CartPage,
  }) => {
    I.amOnPage("/");
    MainPage.hoverOverLoginButton();
    MainPage.clickOnLoginButton();
    LoginPage.fillTheEmailField(Data.credentials.email);
    LoginPage.clickOnLoginButton();
    LoginPage.fillThePasswordField(Data.credentials.password);
    LoginPage.clickOnEmailSelectButton();
    I.see(Data.credentials.username); //login check
    MainPage.fillTheSearchBar(SearchPage.fields.productName);
    MainPage.clickOnSearchButton();
    SearchPage.goToProductPage();
    I.switchToNextTab();
    I.wait(2);
    ProductPage.clickOnAddToCartButton();
    I.wait(2);
    CartFragment.clickCloseButton();
    ProductPage.clickOnAnotherSellersAddToCart();
    CartFragment.clickCloseButton();
    ProductPage.grabProductName();
    let productMerchantName = await ProductPage.grabMerchantName();
    let productOtherMerchantName = await ProductPage.grabOtherMerchantName();
    ProductPage.goToCartPage();
    let cartMerchantName = await CartPage.grabMerchantName();
    let cartOtherMerchantName = await CartPage.grabOtherMerchantName();
    I.assert(productMerchantName, cartMerchantName);
    I.assert(productOtherMerchantName, cartOtherMerchantName);
  }
).injectDependencies({ Data: require("../secret.json") });
