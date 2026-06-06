import { LoginPage } from "./pages/LoginPage.js";
import { BasePage } from "./pages/BasePage.js";
// Import OTHER CLASSES HERE...

/** @typedef {import('./pages/LoginPage.js').LoginPage} LoginPage */
/** @typedef {import('./pages/BasePage.js').BasePage} BasePage */
// ADD YOUR OWN TYPEDEFS HERE...
export class PageManager {

  static page;

  static loginPage;

  static basePage;
  // ADD YOUR OWN PAGE CLASSES & TYPES HERE...



  constructor(page) {
    PageManager.page = page;
    PageManager.loginPage = new LoginPage(page);
    PageManager.basePage = new BasePage(page);
    // INITIALIZE PAGE INSTANCES HERE...


  }

}