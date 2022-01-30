/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type MainPage = typeof import('./pages/MainPage.js');
type LoginPage = typeof import('./pages/LoginPage.js');
type SearchPage = typeof import('./pages/SearchPage.js');
type ProductPage = typeof import('./pages/ProductPage.js');
type CartFragment = typeof import('./fragments/CartFragment.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, MainPage: MainPage, LoginPage: LoginPage, SearchPage: SearchPage, ProductPage: ProductPage, CartFragment: CartFragment }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
