import { Page } from "@playwright/test";
import PageBodyComponent from "../components/PageBodyComponent";
import FooterComponent from "../components/global/footer/FooterComponent";
import BasePage from "./BasePage";

export default class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    pageBodyComponent(): PageBodyComponent {
        return new PageBodyComponent(
            this.page.locator(PageBodyComponent.LOCATOR));
    };

    footerComponent(): FooterComponent {
        return new FooterComponent(
            this.page.locator(FooterComponent.LOCATOR));
    }

}