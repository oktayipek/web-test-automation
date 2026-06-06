import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { BrowserUtility } from "../utilities/BrowserUtility.js";
import { PageManager } from "../globalPagesSetup.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

Given(
  "user logs in with email from env {string} and password from env {string}",
  async function (emailKey, passwordKey) {
    await PageManager.loginPage.login(
      process.env[emailKey] || "",
      process.env[passwordKey] || ""
    );
  }
);

When("user clicks logout button", async function () {
  await BrowserUtility.sleep(1);
  await PageManager.basePage.logout();
});

Then("user should see {string}", async function (expectedResult) {
  await this.page.waitForLoadState("networkidle");

  expect(expectedResult).toBe("Login Page");
  await expect(PageManager.loginPage.loginButton).toBeVisible();
});