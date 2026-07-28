import { expect, Page } from "@playwright/test";
import HomePage from "../../models/pages/HomePage";
import HeaderComponent from "../../models/components/global/header/HeaderComponent";

export default class HeaderTestFlow {
    constructor(private page: Page) {
        this.page = page;
    }

    async verifyHeaderComponent() {
        const homePage = new HomePage(this.page);
        const header = homePage.headerComponent();

        await this.verifyLogoComponent(header);
        await this.verifyHeaderLinksComponent(header);
        await this.verifySearchBoxComponent(header);
    }

    async verifyLogoComponent(header: HeaderComponent) {
        const logo = header.logo();
        await expect(logo).toBeVisible();
    }

    async verifyHeaderLinksComponent(header: HeaderComponent) {
        const headerLinks = header.headerLinks();
        const expectedTexts = [
            'Register',
            'Log in',
            'Shopping cart',
            'Wishlist'
        ];

        const expectedHrefs = [
            '/register',
            '/login',
            '/cart',
            '/wishlist'
        ];

        const actualTexts = await headerLinks.getTexts();
        const actualHrefs = await headerLinks.getHrefs();

        expect(
            actualTexts, '[Header Links]: Texts are incorrect'
        ).toStrictEqual(expectedTexts);

        expect(
            actualHrefs, '[Header Links]: Hrefs are incorrect'
        ).toStrictEqual(expectedHrefs);
    }

    async verifySearchBoxComponent(header: HeaderComponent) {
        const searchBox = header.searchBox();
        await expect(searchBox).toBeVisible();
    }
}