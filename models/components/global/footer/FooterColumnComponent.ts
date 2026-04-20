import { Locator } from "@playwright/test";

export default class FooterColumnComponent {

    protected component: Locator;
    private titleSel = 'h3';
    private linkSel = 'li a';

    constructor(component: Locator) {
        this.component = component;
    }

    public async getTitleText(): Promise<string> {
        return await this.component.locator(this.titleSel).innerText();
    }

    public async getLinkText(): Promise<string[]> {
        const linkList = await this.component.locator(this.component).all();
        return Promise.all(linkList.map(link => link.innerText()))
    }
}