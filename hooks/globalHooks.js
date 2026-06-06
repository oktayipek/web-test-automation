import { Before, After, AfterStep, setWorldConstructor, setDefaultTimeout, World } from "@cucumber/cucumber";
import { chromium, firefox, webkit } from "@playwright/test";
import { PageManager } from "../globalPagesSetup.js";

const BROWSER_TYPE = "chrome"; // Default browser type
const WIDTH = 1920; // Default screen width
const HEIGHT = 1080; // Default screen height
const DEFAULT_TIMEOUT = 30000; // default timeout in milliseconds

const browserSetup = {
  headless: false,
  //slowMo: 500,
};

/**
 * Initializes the browser, context, and page for testing.
 */
Before(async function () {
  await this.init();
});

/**
 * Takes a screenshot after each test step and attaches it to the Cucumber report.
 */
AfterStep(async function () {
  const screenshot = await this.page.screenshot({
    fullPage: true,
  });

  await this.attach(screenshot, "image/png");
});

/**
 * Closes the browser and context after a test scenario.
 *
 * This function is intended to be used as an "After" hook in Cucumber tests.
 * It ensures that the browser and context are properly closed after each test scenario,
 * freeing up system resources and preventing memory leaks.
 */
After(async function () {
  await this.close();
});

// ------------------------Playwright Page & Browser Utility --------------------------

/**
 * CustomWorld class encapsulates the browser, context, and page setup for testing.
 * It provides methods for initializing and closing the testing environment.
 */
class CustomWorld extends World {
  constructor(options) {
    super(options);
  }

  /**
   * Initializes a new browser instance based on the specified browser type.
   */
  async initializeBrowser() {
    let browser;
    switch (BROWSER_TYPE.toLowerCase()) {
      case "chrome":
      case "chromium":
        browser = await chromium.launch({
          ...browserSetup,
          args: ["--start-maximized"],
        });
        break;
      case "firefox":
        browser = await firefox.launch(browserSetup);
        break;
      case "webkit":
      case "safari":
        browser = await webkit.launch(browserSetup);
        break;
      default:
        throw new Error(`Unsupported browser type: ${BROWSER_TYPE}`);
    }
    return browser;
  }

  /**
   * Initializes a new browser context for testing.
   */
  async initializeContext() {
    const context = await this.browser.newContext({
      screen: { width: WIDTH, height: HEIGHT },
      viewport: null,
    });
    return context;
  }

  /**
   * Initializes a new page for testing within the current browser context.
   */
  async intializePage() {
    const page = await this.context.newPage();
    await page.setViewportSize({ width: WIDTH, height: HEIGHT });
    await page.setDefaultTimeout(DEFAULT_TIMEOUT);
    return page;
  }

  /**
   * Initializes the testing environment by creating a new browser instance, context, and page.
   */
  async init() {
    this.browser = await this.initializeBrowser();
    this.context = await this.initializeContext();
    this.page = await this.intializePage();
    new PageManager(this.page);

    if (
      BROWSER_TYPE.toLowerCase() !== "chrome" &&
      BROWSER_TYPE.toLowerCase() !== "chromium"
    ) {
      await this.page.setViewportSize({ width: WIDTH, height: HEIGHT });
    }
  }

  /**
   * Closes the browser and context after a test scenario.
   */
  async close() {
    await this.page.close();
    await this.browser.close();
  }
}

/**
 * Sets the custom world constructor for Cucumber tests.
 */
setWorldConstructor(CustomWorld);

/**
 * Sets the default timeout for Playwright operations.
 */
setDefaultTimeout(DEFAULT_TIMEOUT);