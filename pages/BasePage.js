export class BasePage {

  constructor(page) {
    this.page = page;

    this.homeButton = page.getByText("Home");
    this.productsButton = page.getByText("Products");
    this.contactButton = page.getByText("Contact");
    this.homePageText = page.locator("div").filter({ hasText: "Lorem ipsum egestas posuere" });
    this.profileIcon = page.locator("i").nth(3);
    this.signOutButton = page.getByText("Sign Out");
  }

  /**
   * Clicks the Home button.
   */
  async clickHomeButton() {
    await this.homeButton.click();
  }

  /**
   * Clicks the Products button.
   */
  async clickProductsButton() {
    await this.productsButton.click();
  }

  /**
   * Clicks the Contact button.
   */
  async clickContactButton() {
    await this.contactButton.click();
  }

  /**
   * Clicks the profile icon.
   */
  async clickProfileIcon() {
    await this.profileIcon.click();
  }

  /**
   * Clicks the Sign Out button.
   */
  async clickSignOutButton() {
    await this.signOutButton.click();
  }

  /**
   * Logs out from the application.
   */
  async logout() {
    await this.clickProfileIcon();
    await this.clickSignOutButton();
  }
}