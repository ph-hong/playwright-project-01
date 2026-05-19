import { Page } from "@playwright/test";
import FooterColumnComponent from "../../models/components/global/footer/FooterColumnComponent";
import FooterComponent from "../../models/components/global/footer/FooterComponent";
import HomePage from "../../models/pages/HomePage";

export default class FooterTestFlow {

    constructor(private page: Page) {
        this.page = page;
    }

    async verifyFooterComponent() {
        const homePage = new HomePage(this.page);
        const footerComponent = homePage.footerComponent();
        await this.verifyInformationColumnComponent(footerComponent);
        await this.verifyCustomerServiceColumnComponent(footerComponent);
        // await this.verifyMyAccountColumnComponent();
        // await this.verifyFollowUsColumnComponent();
    }

    async verifyInformationColumnComponent(footerComponent: FooterComponent) {
        const informationColumnComponent = footerComponent.informationColumnComp();
        const expectedTexts = ['Sitemap', 'Shipping & Returns', 'Privacy Notice',
            'Conditions of Use', 'About us', 'Contact us'];
        const expectedHrefs = ['/sitemap', '/shipping-returns', '/privacy-notice',
            '/conditions-of-use', '/about-us', '/contact-us'];

        await this.verifyFooterColumnComponent(informationColumnComponent, expectedTexts, expectedHrefs);
    }

    async verifyCustomerServiceColumnComponent(footerComponent: FooterComponent) {
        const customerServiceColumnComponent = footerComponent.customerServiceColumnComp();
        const expectedTexts = [''];
        const expectedHrefs = [''];

        await this.verifyFooterColumnComponent(customerServiceColumnComponent, expectedTexts, expectedHrefs);
    }

    private async verifyFooterColumnComponent(
        footerColumnComponent: FooterColumnComponent,
        expectedTexts: string[],
        expectedHrefs: string[]) {

        // Logic to verify

    }
}