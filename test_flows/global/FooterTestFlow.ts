import { expect, Page } from "@playwright/test";
import FooterColumn from "../../models/components/global/footer/FooterColumn";
import FooterComponent from "../../models/components/global/footer/FooterComponent";
import HomePage from "../../models/pages/HomePage";

export default class FooterTestFlow {

    constructor(private page: Page) {
        this.page = page;
    }

    async verifyFooterComponent() {
        const homePage = new HomePage(this.page);
        const footer = homePage.footerComponent();

        await this.verifyInformationColumnComponent(footer);
        await this.verifyCustomerServiceColumnComponent(footer);
        await this.verifyMyAccountColumnComponent(footer);
    }

    async verifyInformationColumnComponent(footer: FooterComponent) {
        const informationColumnComponent = footer.informationColumn();

        const expectedTexts = [
            'Sitemap',
            'Shipping & Returns',
            'Privacy Notice',
            'Conditions of Use',
            'About us',
            'Contact us'
        ];

        const expectedHrefs = [
            '/sitemap',
            '/shipping-returns',
            '/privacy-policy',
            '/conditions-of-use',
            '/about-us',
            '/contactus'
        ];

        await this.verifyFooterColumnComponent(
            'Information',
            informationColumnComponent,
            expectedTexts,
            expectedHrefs
        );
    }

    async verifyCustomerServiceColumnComponent(footer: FooterComponent) {
        const customerServiceColumnComponent = footer.customerServiceColumn();

        const expectedTexts = [
            'Search',
            'News',
            'Blog',
            'Recently viewed products',
            'Compare products list',
            'New products'
        ];

        const expectedHrefs = [
            '/search',
            '/news',
            '/blog',
            '/recentlyviewedproducts',
            '/compareproducts',
            '/newproducts'
        ];

        await this.verifyFooterColumnComponent(
            'Customer Service',
            customerServiceColumnComponent,
            expectedTexts,
            expectedHrefs
        );
    }

    async verifyMyAccountColumnComponent(footer: FooterComponent) {
        const myAccountColumnComponent = footer.myAccountColumn();
        const expectedTexts = [
            'My account',
            'Orders',
            'Addresses',
            'Shopping cart',
            'Wishlist',
        ];

        const expectedHrefs = [
            '/customer/info',
            '/customer/orders',
            '/customer/addresses',
            '/cart',
            '/wishlist',
        ];

        await this.verifyFooterColumnComponent(
            'My Account',
            myAccountColumnComponent,
            expectedTexts,
            expectedHrefs
        );
    }
    private async verifyFooterColumnComponent(
        columnName: string,
        footerColumnComponent: FooterColumn,
        expectedTexts: string[],
        expectedHrefs: string[]
    ) {
        // Setup -> Action
        const actualTexts: string[] = await footerColumnComponent.getTexts();
        const actualHrefs: string[] = await footerColumnComponent.getHrefs();

        // Assert
        expect(
            actualTexts, `[${columnName}]: Footer texts are incorrect`
        ).toStrictEqual(expectedTexts);

        expect(
            actualHrefs, `[${columnName}]: Footer hrefs are incorrect`
        ).toStrictEqual(expectedHrefs);



        // deepStrictEqual(actualTexts, expectedTexts, `Actual link texts and expected link texts is not the same
        //     Actual: ${actualTexts}
        //     Expected: ${expectedTexts}`)

    }
}