import { expect } from '@playwright/test';

import { test } from './fixtures';

import { CartPage } from './PageObjects/CartPage';

 

test.describe('Tests de connexion sur SauceDemo', () => {

  test('TC_001 — Login avec credentials valides', async ({ loginPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    expect(loginPage.page.url()).toBe('https://www.saucedemo.com/inventory.html');
  });

  test('TC_002 — Login avec credentials invalides', async ({ loginPage }) => {
      await loginPage.login('invalid_user', 'invalid_password');
      const errorMessage = loginPage.page.getByText('Epic sadface: Username and password do not match any user in this service');
      await expect(errorMessage).toBeVisible();
  });

  test('TC_003 — Login avec username contenant uniquement des espaces', async ({ loginPage }) => {
    await loginPage.login('   ', 'secret_sauce');
    const errorMessage = loginPage.page.getByText('Epic sadface: Username and password do not match any user in this service');
    await expect(errorMessage).toBeVisible();
  });

  test('TC_004 — Login avec mot de passe incorrect', async ({ loginPage }) => {
    await loginPage.login('standard_user', 'wrong_password');
    const errorMessage = loginPage.page.getByText('Epic sadface: Username and password do not match any user in this service');
    await expect(errorMessage).toBeVisible(); 
  });

  test('TC_005 — Login avec mot de passe contenant uniquement des espaces', async ({ loginPage }) => {
    await loginPage.login('standard_user', '   ');
    const errorMessage = loginPage.page.getByText('Epic sadface: Username and password do not match any user in this service');
    await expect(errorMessage).toBeVisible(); 
  });

  test('TC_006 — L\'utilisateur ajoute tous les produits au panier', async ({ authenticatedPage }) => {
    const { page } = authenticatedPage;
    const cartPage = new CartPage(page);
    
    const countProducts = await cartPage.getAllCTAProducts();
    expect(countProducts).toBeGreaterThan(0);
    await cartPage.addAllProductsToCart();
    
    const cartBadge = cartPage.getCartBadge();
    await expect(cartBadge).toBeVisible();
    await expect(cartBadge).toHaveText(`${countProducts}`);

  });
  
});
  





