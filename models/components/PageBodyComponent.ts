import { Locator } from "@playwright/test";
import ProductItemComponent from "./ProductItemComponent";

export default class PageBodyComponent {
    public static readonly LOCATOR = '.page-body';

    constructor(private component: Locator) {
        this.component = component
    }

    async productItems(): Promise<ProductItemComponent[]> {
        const itemLocators = await this.component
            .locator(ProductItemComponent.LOCATOR)
            .all();

        return itemLocators.map(
            locator => new ProductItemComponent(locator));
    }
}