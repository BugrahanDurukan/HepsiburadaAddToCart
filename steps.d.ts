/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type MainPage = typeof import('./pages/MainPage.js');
type LoginPage = typeof import('./pages/LoginPage.js');
type SearchPage = typeof import('./pages/SearchPage.js');
type ProductPage = typeof import('./pages/ProductPage.js');
type CartFragment = typeof import('./fragments/CartFragment.js');
type CartPage = typeof import('./pages/CartPage.js');
type AssertWrapper = import('codeceptjs-assert');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, MainPage: MainPage, LoginPage: LoginPage, SearchPage: SearchPage, ProductPage: ProductPage, CartFragment: CartFragment, CartPage: CartPage }
  interface Methods extends Playwright, AssertWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<AssertWrapper> {}
  namespace Translation {
    interface Actions {}
  }
}
