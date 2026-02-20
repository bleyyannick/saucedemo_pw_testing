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
        const addToCartButtons = await this.page.getByRole('button', { name: 'Add to cart' }).elementHandles()
        while (addToCartButtons.length > 0) {
            await addToCartButtons[0].click();
            addToCartButtons.shift();
        }
    }



}