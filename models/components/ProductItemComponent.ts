import { Locator } from "@playwright/test";

export default class ProductItemComponent {
    public static readonly LOCATOR = '.product-item';
    private productTitleSel = '.product-title';
    private productPriceSel = '.price.actual-price';

    constructor(private component: Locator) {
        this.component = component;
    }

    async getProductTitle(): Promise<string> {
        return await this.component.locator(this.productTitleSel).innerText();
    }
    async getProductPrice(): Promise<string> {
        return await this.component.locator(this.productPriceSel).innerText();
    }
}