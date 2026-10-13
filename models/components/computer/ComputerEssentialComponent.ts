import { Locator } from "@playwright/test";
import ProductEssentialComponent from "../ProductEssentialComponent";

export abstract class ComputerEssentialComponent extends ProductEssentialComponent {

    constructor(component: Locator) {
        super(component);
    }

    public abstract selectRAM(value: string): Promise<string | null>;

    protected async selectComputerOption(type: string): Promise<string | null> {
        const selectorValue = `//label[contains(text(), "${type}")]`;
        const optionLocator = this.component.locator(selectorValue).first();
        await this.component.locator(selectorValue).first().click();
        await optionLocator.click();
        return await optionLocator.textContent();
    }

}