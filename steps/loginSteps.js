import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { BrowserUtility } from "../utilities/BrowserUtility.js";
import { PageManager } from "../globalPagesSetup.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

Given("user is on login page", async function () {
  await PageManager.page.goto(process.env.BASE_URL);
  await this.page.waitForLoadState("networkidle");
});

When("user enters email from env {string}", async function (emailKey) {
  await PageManager.loginPage.enterEmail(process.env[emailKey] || "");
});

When("user enters password from env {string}", async function (passwordKey) {
  await PageManager.loginPage.enterPassword(process.env[passwordKey] || "");
});

When("user clicks login button", async function () {
  await PageManager.loginPage.clickLoginButton();
});

Then("login result should be {string}", async function (result) {
  await BrowserUtility.sleep(1);

  if (result === "success") {
    await expect(PageManager.basePage.homePageText).toBeVisible();
  } else {
    await expect(PageManager.loginPage.loginButton).toBeVisible();
  }
});