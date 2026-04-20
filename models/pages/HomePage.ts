import { Page } from "@playwright/test";
import PageBodyComponent from "../components/PageBodyComponent";
import FooterComponent from "../components/global/footer/FooterComponent";

export default class HomePage {
    constructor(private page: Page) {
        this.page = page
    }

    footerComponent(): FooterComponent {
        return new FooterComponent(this.page.locator(FooterComponent.LOCATOR));
    }

    pageBodyComponent(): PageBodyComponent {
        return new PageBodyComponent(this.page.locator(PageBodyComponent.LOCATOR));
    }
}