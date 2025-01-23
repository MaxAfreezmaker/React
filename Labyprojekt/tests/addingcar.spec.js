const { test, expect } = require('@playwright/test');
const { time } = require('console');
const { TIMEOUT } = require('dns');

test('Dodanie samochodu i usuwanie', async ({ page }) => {

  await page.goto('http://localhost:3000/user/login');
  await page.getByLabel('Podaj Adres mailowy').fill('adamskimaksymilian1@gmail.com');
  await page.getByLabel('Wprowadź hasło').fill('ZAQ!2wsx');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('http://localhost:3000/user/login');
  await expect(page).toHaveURL('http://localhost:3000/user/profile'),{timeout: 3000};

  await page.goto('http://localhost:3000/user/cars');

  await page.goto('http://localhost:3000/user/cars');
  await expect(page).toHaveURL('http://localhost:3000/user/cars');


  const addAutoButton = page.getByRole('button', { name: 'Dodaj auto' });
  await expect(addAutoButton).toBeVisible(),{timeout: 7000};  
  await addAutoButton.click();

  await page.getByLabel('Marka').fill('OpelTEST');
  await page.getByLabel('Model').fill('Corsa');
  await page.getByLabel('Rok').fill('2004');
  await page.getByLabel('Przebieg').fill('144000');
  await page.getByRole('button', { name: 'Dodaj Samochód' }).click();

  
  const carList = page.locator('div:has-text("Lista samochodów")'); 
  const addedCar = carList.locator('div', { hasText: 'OpelTEST Corsa' });
  await expect(addedCar).toBeVisible({ timeout: 7000 });
  await page.waitForSelector('button:has-text("Usuń")', { timeout: 5000 });
  const deleteButton = addedCar.locator('button:has-text("Usuń")');
  await expect(deleteButton).toBeVisible({ timeout: 7000 });
  await deleteButton.click();

  
  await expect(addedCar).not.toBeVisible({ timeout: 8500 });
});

