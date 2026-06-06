import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { PageManager } from "../globalPagesSetup.js";
import { BrowserUtility } from "../utilities/BrowserUtility.js";

Then("Home button should be visible", async function () {
  await BrowserUtility.sleep(1);
  await expect(PageManager.basePage.homeButton).toBeVisible();
});

When("user clicks Home button", async function () {
  await PageManager.basePage.clickHomeButton();
  await BrowserUtility.sleep(1);
});

Then("Products button should be visible", async function () {
  await BrowserUtility.sleep(1);
  await expect(PageManager.basePage.productsButton).toBeVisible();
});

When("user clicks Products button", async function () {
  await PageManager.basePage.clickProductsButton();
  await BrowserUtility.sleep(1);
});

Then("Contact button should be visible", async function () {
  await BrowserUtility.sleep(1);
  await expect(PageManager.basePage.contactButton).toBeVisible();
});

When("user clicks Contact button", async function () {
  await PageManager.basePage.clickContactButton();
  await BrowserUtility.sleep(1);
});

Then("page URL should contain {string}", async function (urlPart) {
  await expect(PageManager.page).toHaveURL(new RegExp(urlPart, "i"));
});

Then("profile icon should be visible", async function () {
  await BrowserUtility.sleep(1);
  await expect(PageManager.basePage.profileIcon).toBeVisible();
});

When("user clicks profile icon", async function () {
  await PageManager.basePage.clickProfileIcon();
  await BrowserUtility.sleep(1);
});

Then("Sign Out button should be visible", async function () {
  await expect(PageManager.basePage.signOutButton).toBeVisible();
});