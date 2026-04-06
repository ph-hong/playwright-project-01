import { Page } from "@playwright/test";
import ProductItemComponent from "../components/ProductItemCoponent";

export default class HomePage {
    constructor(private page: Page) {
        this.page = page
    }

    async productItemComponentList(): Promise<ProductItemComponent[]> {
        const productItemCompList = await this.page.locator(ProductItemComponent.LOCATOR).all();
        return productItemCompList.map(locator => new ProductItemComponent(locator));
    }
}