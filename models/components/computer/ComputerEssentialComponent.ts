import { Locator } from "@playwright/test";
import ProductEssentialComponent from "../ProductEssentialComponent";

export abstract class ComputerEssentialComponent extends ProductEssentialComponent {

    constructor(component: Locator) {
        super(component);
    }

    public abstract selectProcessor(value: string): Promise<string | null>;
    public abstract selectRAM(value: string): Promise<string | null>;
    public async selectHDD(value: string): Promise<string | null> {
        return this.selectComputerOption(value);
    }


    protected async selectComputerOption(value: string): Promise<string | null> {
        const selectorValue = `//label[contains(text(), "${value}")]`;
        const optionLocator = this.component.locator(selectorValue).first();

        await optionLocator.click();

        return await optionLocator.textContent();
    }

}