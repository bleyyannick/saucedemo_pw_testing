import { expect } from '@playwright/test';

import { test } from './fixtures';

 

test.describe('Tests de connexion sur SauceDemo', () => {

  test('TC_001 — Login avec credentials valides', async ({ loginPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(loginPage.page).toHaveURL('/inventory.html');
    await expect(loginPage.getInventoryList()).toBeVisible();
    await expect(loginPage.getInventoryItems()).toHaveCount(6);
  });

  const ERROR_TEXT = 'Epic sadface: Username and password do not match any user in this service';

  test('TC_002 — Login avec credentials invalides', async ({ loginPage }) => {
      await loginPage.login('invalid_user', 'invalid_password');
      await expect(loginPage.getErrorMessage()).toBeVisible();
      await expect(loginPage.getErrorMessage()).toHaveText(ERROR_TEXT);
  });

  test('TC_003 — Login avec username contenant uniquement des espaces', async ({ loginPage }) => {
    await loginPage.login('   ', 'secret_sauce');
    await expect(loginPage.getErrorMessage()).toBeVisible();
    await expect(loginPage.getErrorMessage()).toHaveText(ERROR_TEXT);
  });

  test('TC_004 — Login avec mot de passe incorrect', async ({ loginPage }) => {
    await loginPage.login('standard_user', 'wrong_password');
    await expect(loginPage.getErrorMessage()).toBeVisible();
    await expect(loginPage.getErrorMessage()).toHaveText(ERROR_TEXT);
  });

  test('TC_005 — Login avec mot de passe contenant uniquement des espaces', async ({ loginPage }) => {
    await loginPage.login('standard_user', '   ');
    await expect(loginPage.getErrorMessage()).toBeVisible();
    await expect(loginPage.getErrorMessage()).toHaveText(ERROR_TEXT);
  });


});

test.describe('Tests du panier sur SauceDemo', () => {

  test('TC_006 — L\'utilisateur ajoute tous les produits au panier', async ({ cartPage }) => {
    const countProducts = await cartPage.getAllCTAProducts();
    const cartBadge = cartPage.getCartBadge();

    await cartPage.addAllProductsToCart();
    await expect(cartBadge).toBeVisible();
    await expect(cartBadge).toHaveText(`${countProducts}`);
    await expect(cartPage.getRemoveButtons()).toHaveCount(countProducts);
  });

});
  





