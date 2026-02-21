# Node.js Installation(macOS)

## Steps

1. **Check if Node.js. is installed:**

```sh
node -v
```

- If you see a version, skip to step 4

2. **Download Node.js:**
   - Go to [nodejs.org](https://nodejs.org/en/download)
   - CLick `macOS Install (.pkg)` (LTS recommended)

3. **Install:**
   - Run the downloaded `.pkg` and follow prompts

4. **Verify installation**

```sh
node -v     # Check Node version
npm -v      # Check NPM version
```

5. **Find install location:**

```sh
which node
```

6. **Need help?**

```sh
node --help
```

## Troubleshooting

- Use admin privileges if install fails
- Restart terminal if `node` not found

# Visual Studio Code Installation(macOS)

## Steps

1. **Check if VSCode is installed**

```sh
code -v
```

- If you see a version greater than `1.101.1`, then you may skip installation

2. **Download VSCode**
   - Go to [code.visualstudio.com/download](https://code.visualstudio.com/download)
   - Download the macOS installer

3. **Install:**
   - Open the downloaded file and follow the prompts

# Node.js Project Setup

## Steps

1. **Create a project folder:**

```sh
mkdir ~/Users/vijendraaithal/TechStack/Playwright/playwright-framework
cd ~/Users/vijendraaithal/TechStack/Playwright/playwright-framework
```

2. **Open in VS Code:**

```sh
code .
```

3. **Initialize Node.js project:**

```sh
npm init
```

- Complete the wizard. Ensure `package.json` is created.

4. **Create a sample file:**

```ts
// file name: hello.js
console.log("Hello World!");
```

5. **Run the code:**

```sh
node hello.js
# Output: Hello World!
```

# Playwright Installation

## Steps

1. **Check if Node.js is installed:**

```sh
node -v
```

- Returns a valid node version (e.g. `v22.16.0`). If not, install Node.js first.

2. **Navigate to your project directory:**

```sh
cd /path/to/your/project
```

3. **Initialize Playwright:**

```sh
npm init playwright@latest
```

- When prompted:
  - Select `TypeScript` as the language
  - Choose to install **all browsers**

4. **Verify Playwright installation:**

```sh
npx playwright --version
```

- Shows the installed Playwright version.

# Run the Generated Test

## Steps

1. **Run the sample test:**

```sh
npx playwright test --headed
```

- This command runs all Playwright tests in headed mode (browser UI visible).

2. **Show the test report:**

```sh
npx playwright show-report
```

- This command opens the Playwright HTML report for your test run.

---

**Note**: In Windows, If you get an error on running `webkit` browser, add the following config to ignore SSL cert

```ts
use: {
    ignoreHTTPSErrors: true,
  },
```

## Naming Convention - Best Practice:

### File & Code Naming Conventions

| Item                    | Convention                         | Example                                               |
| ----------------------- | ---------------------------------- | ----------------------------------------------------- |
| **Folders / Files**     | kebab-case                         | `page-objects/`, `file-helper.ts`                     |
| **Page and Spec files** | dot-separated                      | `nopcommerce.home.page.ts`, `nopcommerce.e2e.spec.ts` |
| **Class Names**         | PascalCase (each word capitalized) | `LoginPage`, `DashboardActions`                       |
| **Variables**           | camelCase                          | `loginButton`, `userNameInput`                        |
| **Constants**           | UPPER_SNAKE_CASE                   | `BASE_URL`, `API_TIMEOUT_MS`                          |

---

🎯 **Consistent naming improves readability and reduces confusion across teams.**

# Folder Structure Setup

Let's create the following folder structure:

```sh
PLAYWRIGHT-E2E-TESTS/
├── .github/                    # CI Config folder
├── .vscode/                    # Editor-specific settings
│   └── mcp.json                # MCP server config for VS Code
├── config/                     # Environment-specific config files
├── data/                       # Static data and constants
│   └── constants.json          # Common constants used in tests
├── debug/                      # Optional: Debug-related outputs/logs
├── logs/                       # Application/test logs
├── node_modules/               # Auto-generated dependencies
├── playwright-report/          # Playwright HTML test report output
├── resources/                  # Misc test resources (e.g. images, files)
├── tests/                      # All organized test files
│   ├── api/                    # API test specs
│   ├── demo/                   # Demo-related test specs
│   ├── devices/                # Device related scenarios
│   ├── e2e/                    # End-to-end test specs
│   ├── functional/             # Functional test cases
│   ├── helpers/                # Utility functions for tests
│   ├── page-objects/           # Page Object Model files
├── tests-examples/             # Auto-generated sample test scenarios
├── .env.example                # Template for environment files
├── .env                        # Template for environment files
├── .gitignore                  # Git ignored files and folders
├── package-lock.json           # Dependency lock file
├── package.json                # Project metadata and scripts
├── playwright.config.ts        # Playwright configuration file
├── README.md                   # Project overview and instructions
```

---

## Quick Check

1. In the `playwright.config.ts` file, comment out all other browsers and ensure only `chromium` is enabled.

2. Run the following command to verify everything still works:

```sh
npx playwright test --headed
```

If tests execute successfully, you're all set!

🎯 The target project structure is now set up. Let’s keep moving forward... 🚀

# Recommended VS Code Extensions

- vscode-icons
- Prettier - Code formatter
- Path Intellisense
- npm Intellisense
- DotENV
- JavaScript (ES6) code snippets
- .gitignore Generator

---

Install these extensions from the VS Code Extensions Marketplace for a smoother and more productive workflow.

# Git Installation Guide for macOS

Follow these steps to install Git on macOS:

## Steps

1. **Install Git via Xcode Command Line Tools (Recommended & Easiest):**

Open your terminal and run:

```sh
git --version
```

If Git is not installed, this command will prompt you to install the Xcode Command Line Tools. Follow the on-screen instructions.

Once installed, run the command again to confirm:

```sh
git --version
```

You should see the installed Git version.

2. **(Alternative) Install Git using Homebrew:**

First, check if you have Homebrew installed:

```sh
brew --version
```

If you see a version number, Homebrew is installed. If not, install it with:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then install Git:

```sh
brew install git
```

Verify the installation:

```sh
git --version
```

You should see the installed Git version.

# Local Git Setup

1. **Initialize a Local Git repository:**

```sh
git init
```

2. **Check which files are to be staged:**

```sh
git status
```
- This command shows the changes in the current directory.

3. **Add or check project-specific files in the `.gitignore` file.**
   1. You can use the `VS Code` extention to create the content

4. **Stage all files for commit:**

```sh
git add .
```

2. **Check which files are staged or ready to be committed:**

```sh
git status
```

3. **Commit the staged files:**

```sh
git commit -m "Your commit message here"
```
- This command commits all staged changes with a descriptive message.

# Staging, Committing, and Pushing Files with Git

4. **Link your local repository to a remote URL:**

```sh
git branch -M main # To match with remote branch name
git remote add origin <remote-url>
```

5. **Confirm local and remote URLs:**

```sh
git remote -v
```
- This command shows the fetch and push URLs for your remote (they should be the same).

6. **Push your first change to the remote repository:**

```sh
git push -u origin main
```
- The `-u` flag sets the upstream (remote tracking) branch.
- If you see an error like `fatal: repository xx not found`, check your user and permissions with:

```sh
git config --list
```
- Make sure you have the right user and permission to commit. If not, add yourself as a collaborator in the GitHub settings and accept the invitation.
- If you still have issues, you can force push:

```sh
git push -f origin main
```
- Then set the remote tracking branch:

```sh
git branch -u origin/main
```
# Creating a basic test

[💡] Playwright recognizes the following file extensions as valid test specification files:
  - `*.spec.ts`
  - `*.test.ts`

__STEPS__:

1. Create a spec file `first-test.spec.ts` under the `./demo` folder
2. Add the following test code:

<details>
<summary><strong>Sample Playwright Test: Home Page Title and Header</strong></summary>

```ts
import { test, expect } from "@playwright/test";

test("Should load home page with correct title", async ({ page }) => {
    // Go to the home page
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    // Assert if the title is correct
    await expect(page).toHaveTitle("CURA Healthcare Service");

    // Assert header text
    await expect(page.locator('//h1')).toHaveText('CURA Healthcare providr')
});
```
</details>

3. Run this specific test file
   
```sh
npx playwright test tests/demo/first-test.spec.ts --headed
```

[💡] To know more about `playwright test` command, run

```sh
npx playwright test --help
```

🎯 Congrats! We wrote a simple test, now let's understant each line. 

# Common Errors and Resolutions


## 1. Spec/test file not having `.spec or .test` init

**Error:**
- No tests found

**Resolution:**
- Correct the spec file name


## 2. Navigation Timeout Error

**Error:**
```log
Error: page.goto: Test ended.
Call log:
  - navigating to "https://katalon-demo-cura.herokuapp.com/", waiting until "load"
```

**Resolution:**

1. **Increase Navigation Timeout:**

```ts
use: {
    navigationTimeout: 30_000,  // Set timeout to 30 seconds
},
```

2. **Check Async/Await Usage:**
   - Ensure you haven't forgotten the `await` keyword before navigation commands
   - Common places to check:
     - `page.goto()`
     - Navigation actions in page objects

# Running a Test via `package.json` Scripts

1. Add a new script entry named `demo` inside the `scripts` section of your `package.json` file:
```json
"scripts": {
  "demo": "npx playwright test tests/demo/first-test.spec.ts --headed"
}
```
2. Execute the test by running the following command in your terminal:
```sh
npm run demo
```
[💡] This approach helps you avoid typing long commands repeatedly.

🎯 The first BIG step forward ...

# Playwright Test Runner

Test Runner - we write code/playwright script, there has to be something that runs this code
1. Playwright has its own built-in Test Runner ( no external runners like Mocha, Jest, Jasmine)
2. Powerful Config file  (Controls overall test setting including browsers, reports, parallel runs)
3. among all the functions, test, expect and request - are some of the most used functions

- test fn: for writing tests
- expect fn: for assertion
- request fn: for request library, built-in that can be used for API tests, instead of relying on 
external libraries like axios or supertest

## Most used other imports
```ts
export const chromium
export const firefox
export const webkit
export const selectors
export const devices
export const errors
export const request
export const _electron
export const _android
export const test
export const expect
export const defineConfig
export const mergeTests
export const mergeExpects
export default playwright.test
```
- Press CTRL + Spacebar in `import {test, expect}` to see the options
- we can also click on the test, expect etc with CTRL or CMD ( to see how it is built
it take to page from in node_modules to some file where the code is written) 10K+ lines are there
- search export.*, you can see all the thigns that are exported which you can import


## Documentation
- Homepage, Docs and API in playwright website
- In Docs , search Playwright Test, read the sections
- to understand methods, click API
- on right side of the page there will be methods listed
- API > Playwright Library, on right side there will be properties

# The `test()` Function
Declares a test
- test takes two arguments `test(title, body)`
- optionally takes three arguments `test(title, details, body)`
- @param title - Test title
- @param details - Additional test details
- @param body  - test body that take one or two arguments : an object with fixtures and optionally TestInfo.
- note: details as `{<additiioanl detials like tag>}`
- body, we will call a async callback function
- eg: `test('title of the test', async({page}) => {})`
- as part of fn, we have provided page fixture, an object
- page, context, request are fixtures
- inside the function we have tests

## Most common body arguments
A test body can take one of the following args
- page
- context
- request

### Killer Tip:
- inside `async({page, })` , press CMD + spacebar or CTRL + spacebar you will see what else can go
-  baseURL, browser, browserName, context, page, request and many more that preload can go there
- we are using page fixutre so that we can do `page.goto`, `page.locator().toHaveTitle()` will have title check , `page.locator()`page has locator


## testInfo

## details
- `{}`
- only annotation or  tag can go 
- `{tag: "@smoke"}`
- so when we run smoke test, it will run all the tests that has tag as smoke
- always go to API, and check the latest, most of methods are listed

# The page fixtures
- DRY principle , Don't Repeat Yourself, do not repeat same code ( in same or different file)
- by default, fixture are created, these are static or one time config , which we do not have to repeat
- In old times `let chromeBrowser = new ChromeBrowser()`
- In playwright, we put playwright fixture as test fn argument and use goto() and other methods

## page fixtures
- a page is a fixture from playwright test runner's perspective, which is passed as an argument to the test object
- `reqeust, context, browser, baseURL` - can also go as fixtures
- some of the common user methods of page fixtures
- `page.goto(url)` - navigates to URL
- `page.locator(selector)` - create a locator for actions/assertions, css or xpath
- `page.getByRole(), page.getByText(), page.getByLabel()` - semantic locators for accessibility-based selectors
- `page.click(selector)` - clicks on a matching element
- `page.fill(selector, value)` - fills and input field
- `page.evaluate(fn, arg)` - runs javascript in the browser context
- `page.waitForURL(url)` - wait for navigation to a specific URL
- `page.screenshot()` - capture a screenshot
- `page.title()` - Get the page title
- `page.url()` - Get the current url

### NOTES 
the `locator` and `getBy*` methods returns a locator objects
- so page.locator() returns a locator , so we can chain them with other locator methods

- Fixture => static or one time setup , that need not be re-written
- page is a fixture, it has its own methods and properties
- always go to API and search for `page`, to see its methods, properties
- there are deprication , so referring to this document as main soruce of truth

