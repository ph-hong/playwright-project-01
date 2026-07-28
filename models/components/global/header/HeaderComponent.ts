import { Locator } from "@playwright/test";
import HeaderLinks from "./HeaderLinks";

export default class HeaderComponent {
    public static readonly LOCATOR = '.header';

    private logoSelector = '.header-logo img';
    private searchBoxSelector = '#small-searchterms';

    constructor(private component: Locator) {
        this.component = component;
    }

    public headerLinks(): HeaderLinks {
        return new HeaderLinks(
            this.component.locator(HeaderLinks.LOCATOR)
        );
    }

    public logo(): Locator {
        return this.component.locator(this.logoSelector);
    }

    public searchBox(): Locator {
        return this.component.locator(this.searchBoxSelector);
    }

}