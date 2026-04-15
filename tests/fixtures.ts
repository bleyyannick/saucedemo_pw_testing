import { test as base, Page } from '@playwright/test';
import { LoginPage } from './PageObjects/LoginPage';
import { CartPage } from './PageObjects/CartPage';

const VALID_USERNAME = 'standard_user';
const VALID_PASSWORD = 'secret_sauce';

type TestFixtures = {
  loginPage: LoginPage;
  authenticatedPage: { page: Page; loginPage: LoginPage };
  cartPage: CartPage;
};

export const test = base.extend<TestFixtures>({
 
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page, '/');
    await loginPage.navigate();
    await use(loginPage);
  },
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page, '/');
    await loginPage.navigate();
    await loginPage.login(VALID_USERNAME, VALID_PASSWORD);
    await use({ page, loginPage });
  },

  cartPage: async ({ authenticatedPage }, use) => {
    const { page } = authenticatedPage;
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
});

export { expect } from '@playwright/test';
