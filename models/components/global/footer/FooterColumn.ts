import { Locator } from "@playwright/test";

export default class FooterColumn {

    protected component: Locator;
    private titleSelector = 'h3';
    private linkSelector = 'li a';

    constructor(component: Locator) {
        this.component = component;
    }

    public async getTitleText(): Promise<string> {
        return await this.component
            .locator(this.titleSelector)
            .innerText();
    }

    public async getTexts(): Promise<string[]> {
        const linkListTexts: string[] = [];
        const linkList = await this.component
            .locator(this.linkSelector)
            .all();

        for (const link of linkList) {
            const linkText = await link.textContent();
            linkListTexts.push(linkText || '');
        }

        return linkListTexts;
    }

    public async getHrefs(): Promise<string[]> {
        const hrefList: string[] = [];
        const linkList = await this.component
            .locator(this.linkSelector)
            .all();

        for (const link of linkList) {
            const href = await link.getAttribute("href");
            hrefList.push(href || '');
        }

        return hrefList;

    }

    // public async getLinkText(): Promise<string[]> {
    //     const linkList = await this.component.locator(this.component).all();
    //     return Promise.all(linkList.map(link => link.innerText()))
    // }
}