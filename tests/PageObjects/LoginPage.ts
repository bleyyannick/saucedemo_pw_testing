import { Page } from "@playwright/test";

  
  export class LoginPage {
    
    page: Page;
    url: string = '';

    constructor(page: Page, url: string) {
      this.page = page;
      this.url = url; 
    }

    async navigate() {
      await this.page.goto(this.url);}

    async login(username: string, password: string) {
      await this.page.getByPlaceholder('Username').fill(username);
      await this.page.getByPlaceholder('Password').fill(password);
      await this.page.getByRole('button', { name: 'Login' }).click();
    }
  }