const { test, expect } = require('@playwright/test');

test('login and navigate to profile', async ({ page }) => {

  await page.goto('http://localhost:3000/user/login');


  await page.getByLabel('Podaj Adres mailowy').fill('adamskimaksymilian1@gmail.com');
  await page.getByLabel('Wprowadź hasło').fill('ZAQ!2wsx');

  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://localhost:3000/user/login');
  await expect(page).toHaveURL('http://localhost:3000/user/profile');
});
