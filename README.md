# Web Test Automation Framework

This project is designed to automate web application testing using Playwright and Cucumber. Follow the steps below to set up the environment, work on the project, and manage it using Git.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Framework Structure and Usage](#framework-structure-and-usage)
4. [Project and Git Workflow](#project-and-git-workflow)<br>

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js
- npm (included with Node.js)
- Visual Studio Code
- Git
- Playwright Test
- Cucumber
- dotenv

<br>

## Environment Setup

### 1. Clone or Download the Project
Download or clone the "web-test-automation" project from GitHub.

### 2. Open the Project in VS Code
2.1 Open the VS Code App  
2.2 Go to `File` and click `Open Folder`  
2.3 Select the "web-test-automation" project folder

### 3. Install VS Code Extensions
Install the following extensions for a better development experience:
- Better Comments
- Cucumber (Gherkin) Full Support
- Material Icon Theme
- NPM
- npm Intellisense
- NPM Run
- Playwright Snippets

### 4. Create the `.env` File
Create a `.env` file at the project root level.<br>
This file will be used for storing credentials and environment-specific configuration values.

### 5. Add Environment Variables to the `.env` File
Add all required environment variables to the `.env` file.

Example:

```env
BASE_URL=
ADMIN_EMAIL=
ADMIN_PASSWORD=
USER_ONE_EMAIL=
USER_ONE_PASSWORD=
USER_TWO_EMAIL=
USER_TWO_PASSWORD=
```

### 6. Install Project Dependencies

```sh
npm install
```

### 7. Install Playwright Browsers

```sh
npx playwright install
```

### 8. Run Tests

Run all tests:

```sh
npm test
```

Run tests by tag:

```sh
npm run test:tag -- "@loginfunctionality"
```

Open the HTML report:

```sh
npm run Windows-open:report
```

## Framework Structure and Usage

### 1. The `features` folder
This folder is used for storing the feature files. Each feature file can contain one or more tags that can be used to run specific scenarios or features.

### 2. The `hooks` Folder
This folder contains the global hooks for Cucumber step definitions.<br>
It also contains Playwright browser and page initialization logic, screenshot handling, and test setup/cleanup operations.

### 3. The `pages` Folder
This folder is used for storing page objects and web element locators.<br>
Every single page class must be added and initialized in the `globalPagesSetup.js` file to allow access through the shared Playwright page instance.

### 4. The `steps` Folder
This folder is used for storing the step definitions of the features.<br>
The file names of the step definition files should match their corresponding feature files whenever possible.<br>

### 5. The `.env` file
A file used to store and load environment variables required by the automation framework.<br>
You will need to create this file in the project root directory and add all required environment variables.

### 6. `cucumber.cjs` File
A CommonJS configuration file for CucumberJS that manages test execution settings, feature paths, step definition imports, reporting configuration, and output formatting options.

### 7. `package.json` File
The `package.json` file for the "web-test-automation" project includes several key sections:

- **`name`**: Identifies the project as "web-test-automation".
- **`version`**: Marks the current version at "1.0.0".
- **`main`**: Points to the main entry file of the project, "index.js".
- **`scripts`**: Defines custom scripts for the project:
    - **`test`**: Runs all CucumberJS tests.
    - **`test:tag`**: Executes CucumberJS tests filtered by the specified tag.
    - **`Mac-open:report`**: Opens the cucumber report HTML file on macOS.
    - **`Windows-open:report`**: Opens the cucumber report HTML file on Windows.
- **`dependencies`**: Lists project dependencies, including Cucumber, Playwright for testing, and dotenv for environment variable management.
- **`devDependencies`**: Lists development dependencies, including cross-env for cross-platform environment variable support.
- **`type`**: Specifies the module system, set to "module" for ES Module support.

This setup facilitates BDD-style testing with CucumberJS and Playwright and includes cross-platform support for viewing test reports.<br>

## Project and Git Workflow

### 1. Upload the "web-test-automation" Project to GitHub
Create a new repository on GitHub and upload the project.

### 2. Create a "develop" Branch
Create a branch named develop in your GitHub repository.

### 3. Create Feature Branches
Create separate branches for each feature from the develop branch. Use the following naming convention for feature branches: feature/tagname_feature_name.

Note: You must create a unique feature branch for every feature file before you work on them.

### 4. Update the Project
Update your local repository:

```sh
git fetch
git pull
```

### 5. Checkout the Specific Feature Branch
Checkout the specific feature branch you need to work on:

```sh
git checkout feature/branch_name
```

Double-check the checked-out branch. The bottom left corner of VS Code shows the current branch.

### 6. Work on the Feature File
Work on the feature file of the branch you checked out.

### 7. Commit and Push Changes
After fully completing and testing the feature file, commit and push your changes with descriptive commit messages:

```sh
git add .
git commit -m "Descriptive commit message"
git push
```

Note: This will push to the remote feature branch.

### 8. Create a Pull Request
Create a pull request from your remote feature branch to the develop branch.

### 9. Repeat Steps
Repeat from step #3 until you finish all the features. By following these steps, you will be able to set up, work on, and manage your web test automation project efficiently. Happy coding!<br>

## Authors
Oktay Ipek - [oktayipek](https://github.com/oktayipek)