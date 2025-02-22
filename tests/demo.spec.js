// @ts-check

import { test, expect } from '@playwright/test';

test('Add to card from catalog', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('text="Sauce Labs Backpack"')).toBeEnabled();
});

test('Add to card from product page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="item-0-title-link"]').click();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('text="Sauce Labs Bike Light"')).toBeEnabled();
  });