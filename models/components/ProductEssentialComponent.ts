import { Locator } from "@playwright/test";

export default class ProductEssentialComponent {

    private allOptionSelector = '.option-list input';
    protected constructor(protected component: Locator) {
        this.component = component;
    }

    public async unselectAllOptions() {
        const allOptionLocator: Locator[] = await this.component.locator(this.allOptionSelector).all();
        
        for (const optionLocator of allOptionLocator) {
            const isOptionSelected = await optionLocator.getAttribute("checked");
            if (isOptionSelected) {
                await optionLocator.click();
            }
        }
    }
}