import { Page } from "@playwright/test";

export class CartPage { 

    page:Page;


    constructor(page: Page) {
        this.page = page;
    }

    async addToCart() {
        await this.page.getByRole('button', { name: 'Add to cart' }).click();
    }

    async getAllCTAProducts() {
        return await this.page.getByRole('button', { name: 'Add to cart' }).count();
    }

    getCartBadge() {
        return this.page.locator('.shopping_cart_badge');
    }

    async addAllProductsToCart() {
        const count = await this.page.getByRole('button', { name: 'Add to cart' }).count();
        for (let i = 0; i < count; i++) {
            await this.page.getByRole('button', { name: 'Add to cart' }).first().click();
        }
    }

    getRemoveButtons() {
        return this.page.getByRole('button', { name: 'Remove' });
    }



}