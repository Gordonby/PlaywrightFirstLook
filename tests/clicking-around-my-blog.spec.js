const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  // Go to https://gordon.byers.me/
  await page.goto('https://gordon.byers.me/');

  // Click article a
  await page.click('article a');
  await expect(page).toHaveURL('https://gordon.byers.me/azure/application-gateway-mtls-letsencrypt.html');

  // Click img[alt="Gordon Byers"]
  await page.click('img[alt="Gordon Byers"]');
  await expect(page).toHaveURL('https://gordon.byers.me/');

  // Click text=This is where I'll put some words round scripts and code that i write on GitHub,
  await page.click('text=This is where I\'ll put some words round scripts and code that i write on GitHub,');

  // Click text=This is where I'll put some words round scripts and code that i write on GitHub,
  await page.click('text=This is where I\'ll put some words round scripts and code that i write on GitHub,');

  // Click text=Creating empty Azure - AzureDevOps Service connections
  await page.click('text=Creating empty Azure - AzureDevOps Service connections');
  await expect(page).toHaveURL('https://gordon.byers.me/azure/create-empty-azure-azuredevops-serviceconnections.html');

  // Click text=# azure-devops
  await page.click('text=# azure-devops');
  await expect(page).toHaveURL('https://gordon.byers.me/tags#azure-devops');

  // Click :nth-match(:text("Using the edge Azure CLI in a Centos VM | 06 Feb 2019"), 2)
  await page.click(':nth-match(:text("Using the edge Azure CLI in a Centos VM | 06 Feb 2019"), 2)');

  // Click :nth-match(:text("Using the edge Azure CLI in a Centos VM"), 2)
  await page.click(':nth-match(:text("Using the edge Azure CLI in a Centos VM"), 2)');
  await expect(page).toHaveURL('https://gordon.byers.me/azure/using-the-edge-azure-cli-in-a-centos-vm/');

  // Click text=Using the edge Azure CLI in a Centos VM 2019, Feb 06 If you’re wanting to use th
  await page.click('text=Using the edge Azure CLI in a Centos VM 2019, Feb 06 If you’re wanting to use th', {
    button: 'right'
  });

});