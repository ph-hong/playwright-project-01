import { Locator } from "@playwright/test";

export default class HeaderLinks {
    public static readonly LOCATOR = '.header-links';

    private readonly registerSelector = '.ico-register';
    private readonly loginSelector = '.ico-login';
    private readonly cartSelector = '.ico-cart';
    private readonly cartLabelSelector = '.ico-cart .cart-label';
    private readonly wishlistSelector = '.ico-wishlist';
    private readonly wishlistLabelSelector = '.ico-wishlist .cart-label';

    component: Locator;

    constructor(component: Locator) {
        this.component = component;
    }

    public register(): Locator {
        return this.component.locator(this.registerSelector);
    }

    public login(): Locator {
        return this.component.locator(this.loginSelector);
    }

    public shoppingCartLabel(): Locator {
        return this.component.locator(this.cartLabelSelector);
    }

    public wishlistLabel(): Locator {
        return this.component.locator(this.wishlistLabelSelector);
    }

    public async getTexts(): Promise<string[]> {
        return [
            await this.register().innerText(),
            await this.login().innerText(),
            await this.shoppingCartLabel().innerText(),
            await this.wishlistLabel().innerText()
        ];
    }

    public async getHrefs(): Promise<string[]> {
        const hrefs: string[] = [];
        const linkLocators = [
            this.component.locator(this.registerSelector),
            this.component.locator(this.loginSelector),
            this.component.locator(this.cartSelector),
            this.component.locator(this.wishlistSelector)
        ];

        for (const link of linkLocators) {
            const href = await link.getAttribute("href");
            hrefs.push(href || '');
        }

        return hrefs;
    }
}