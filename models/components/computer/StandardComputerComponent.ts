import { Locator } from "@playwright/test";
import { ComputerEssentialComponent } from "./ComputerEssentialComponent";

export default class StandardComputerComponent extends ComputerEssentialComponent {

    private allDropdownSelector = 'select[id^="product_attribute"]';

    constructor(component: Locator) {
        super(component);
    }

    public async selectRAM(value: string) {
        const RAM_DROPDOWN_INDEX: number = 1;

        const ramDropdown = this.component
            .locator(this.allDropdownSelector)
            .nth(RAM_DROPDOWN_INDEX);

        const allOptionLocators = await ramDropdown.locator('option').all();

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

        await ramDropdown.selectOption({
            index: optionIndex
        });
    }
}