import { test as base, Page } from '@playwright/test';
import { LoginPage } from './PageObjects/LoginPage';

const BASE_URL = 'https://www.saucedemo.com/';
const VALID_USERNAME = 'standard_user';
const VALID_PASSWORD = 'secret_sauce';

type TestFixtures = {
  loginPage: LoginPage;
  authenticatedPage: { page: Page; loginPage: LoginPage };
};

export const test = base.extend<TestFixtures>({
 
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page, BASE_URL);
    await loginPage.navigate();
    await use(loginPage);
  },


  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page, BASE_URL);
    await loginPage.navigate();
    await loginPage.login(VALID_USERNAME, VALID_PASSWORD);
    await use({ page, loginPage });
  },
});

export { expect } from '@playwright/test';
