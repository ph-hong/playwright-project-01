import { Locator } from "@playwright/test";
import { ComputerEssentialComponent } from "./ComputerEssentialComponent";
import { selector } from "../../SelectorDecorator";

@selector('.product-essential')
export default class StandardComputerComponent extends ComputerEssentialComponent {

    private allDropdownSelector = 'select[id^="product_attribute"]';

    constructor(component: Locator) {
        super(component);
    }

    public async selectProcessor(value: string): Promise<string | null> {
        const PROCESSOR_DROPDOWN_INDEX: number = 0;
        const allDropdwonOptions: Locator[] = await this.component.locator(this.allDropdownSelector).all();
        const processorDropdown = allDropdwonOptions[PROCESSOR_DROPDOWN_INDEX];
        return this.selectOption(processorDropdown, value);
    }

    public async selectRAM(value: string): Promise<string | null> {
        const RAM_DROPDOWN_INDEX: number = 1;
        const allDropdownOptions: Locator[] = await this.component.locator(this.allDropdownSelector).all()
        const ramDropdown = allDropdownOptions[RAM_DROPDOWN_INDEX];
        return this.selectOption(ramDropdown, value);
    }

    private async selectOption(dropdown: Locator, value: string): Promise<string | null> {
        const allOptionLocators: Locator[] = await dropdown.locator('option').all();
        // const ramDropdown = this.component.locator(this.allDropdownSelector).nth(RAM_DROPDOWN_INDEX);

        let optionIndex: number = -1;
        let optionFullText: string | null = '';

        for (const optionLocator of allOptionLocators) {
            optionFullText = await optionLocator.textContent();

            if (optionFullText?.trim().startsWith(value)) {
                optionIndex = allOptionLocators.indexOf(optionLocator);
                break;
            }
        }

        if (optionIndex === -1) {
            throw new Error(
                `There is no matching option for ${value}`
            );
        }

        await dropdown.selectOption({ index: optionIndex });
        return optionFullText;
    }

}