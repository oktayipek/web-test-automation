import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { PageManager } from "../globalPagesSetup.js";
import { BrowserUtility } from "../utilities/BrowserUtility.js";

Then("email field should be visible", async function () {
  await expect(PageManager.loginPage.emailInput).toBeVisible();
  await BrowserUtility.sleep(0.5);
});

Then("password field should be visible", async function () {
  await expect(PageManager.loginPage.passwordInput).toBeVisible();
  await BrowserUtility.sleep(0.5);
});

When("user enters email {string}", async function (email) {
  await PageManager.loginPage.enterEmail(email);
  await BrowserUtility.sleep(0.5);
});

Then("email field should contain {string}", async function (email) {
  await expect(PageManager.loginPage.emailInput).toHaveValue(email);
  await BrowserUtility.sleep(0.5);
});

When("user enters password {string}", async function (password) {
  await PageManager.loginPage.enterPassword(password);
  await BrowserUtility.sleep(0.5);
});

Then("password should be masked", async function () {
  await expect(PageManager.loginPage.passwordInput).toHaveAttribute("type", "password");
  await BrowserUtility.sleep(0.5);
});

Then("login button should be visible", async function () {
  await expect(PageManager.loginPage.loginButton).toBeVisible();
  await BrowserUtility.sleep(0.5);
});