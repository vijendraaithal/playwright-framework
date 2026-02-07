import { test, expect} from "@playwright/test";

test("Should load home page with correct tile", async ({ page }) => {
  // Go to Home page
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  // Assert if the title is correct
  await expect(page).toHaveTitle("CURA Healthcare Service");

  // Assert header text
  await expect(page.locator("\\h1")).toHaveText("CURA Healthcare Service");
});
