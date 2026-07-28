import { Locator } from "@playwright/test";
import ProductEssentialComponent from "../ProductEssentialComponent";

export abstract class ComputerEssentialComponent extends ProductEssentialComponent {

    constructor(component: Locator) {
        super(component);
    }

    public abstract selectRAM(value: string): Promise<void>;

    protected async selectComputerOption(value: string) {
        const selectorValue = `//label[contains(text(), "${value}")]`;
        await this.component.locator(selectorValue).first().click();

    }
}