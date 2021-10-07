const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  // Go to https://gordon.byers.me/
  await page.goto('https://gordon.byers.me/');

  // Click article a
  await page.click('article a');
  await expect(page).toHaveURL('https://gordon.byers.me/azu');

});