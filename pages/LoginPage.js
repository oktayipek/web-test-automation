export class LoginPage {

  constructor(page) {
    this.page = page;

    this.emailInput = page.getByRole("textbox", { name: "User" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "LOGIN" });
  }

  /**
   * Enters an email into the email input field.
   *
   * @param {string} email
   */
  async enterEmail(email) {
    await this.emailInput.fill(email);
  }

  /**
   * Enters a password into the password input field.
   *
   * @param {string} password
   */
  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  /**
   * Clicks the login button.
   */
async clickLoginButton() {
  await this.loginButton.click();
  await this.page.waitForLoadState("networkidle");
}

  /**
   * Logs in with email and password.
   *
   * @param {string} email
   * @param {string} password
   */
  async login(email, password) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}