/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type MainPage = typeof import('./pages/MainPage.js');
type LoginPage = typeof import('./pages/LoginPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, MainPage: MainPage, LoginPage: LoginPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
