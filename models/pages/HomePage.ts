import { Page } from "@playwright/test";
import PageBodyComponent from "../components/PageBodyComponent";

export default class HomePage {
    constructor(private page: Page) {
        this.page = page
    }

    pageBodyComponent(): PageBodyComponent {
        return new PageBodyComponent(this.page.locator(PageBodyComponent.LOCATOR));
    }
}