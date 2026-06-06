import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { BrowserUtility } from "../utilities/BrowserUtility.js";
import { PageManager } from "../globalPagesSetup.js";

Then("email field should be empty", async function () {
  await this.page.waitForLoadState("networkidle");
  await BrowserUtility.sleep(1);

  await expect(PageManager.loginPage.emailInput).toHaveValue("");
});

Then("password field should be empty", async function () {
  await expect(PageManager.loginPage.passwordInput).toHaveValue("");
});