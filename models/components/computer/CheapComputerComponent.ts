import { Locator } from "@playwright/test";
import { ComputerEssentialComponent } from "./ComputerEssentialComponent";
import { selector } from "../../SelectorDecorator";

@selector('.product-essential')
export default class CheapComputerComponent extends ComputerEssentialComponent {

    constructor(component: Locator) {
        super(component);
    }

    public async selectProcessor(value: string): Promise<string | null> {
        return await this.selectComputerOption(value);
    }

    public async selectRAM(value: string): Promise<string | null> {
        return await this.selectComputerOption(value);
    }

}