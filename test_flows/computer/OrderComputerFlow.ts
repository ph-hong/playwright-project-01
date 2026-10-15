import { Page } from "@playwright/test";
import { ComputerDataType } from "../../test_data/computer/ComputerDataType";
import { ComputerDetailsPage } from "../../models/pages/ComputerDetailsPage";

export class OrderComputerFlow {

    constructor(private page: Page, private computerData: ComputerDataType) {
        this.page = page;
        this.computerData = computerData;
    }

    // Steps
    async buildComputerSpecAndAddToCart() {
        const computerDetailsPage = new ComputerDetailsPage(this.page);
        const computerComponent = computerDetailsPage.computerComponent(this.computerData.computerComponentClass);

        // Unselect all default option
        await computerComponent.unselectAllOptions();

        // Build computer spec based on test data
        // this.computerData.ram = '2 GB';
        const { processorType, hdd, ram, software, os } = this.computerData;
        const ramAdditionalPrice = this.getAdditionalPrice(await computerComponent.selectRAM(ram));
        console.log(`ramAdditionalPrice: ${ramAdditionalPrice}`);

        // 8 GB  [+60.00]

        // DEBUG purpose only
        await this.page.waitForTimeout(3 * 1000);
    }

    private getAdditionalPrice(optionFullText: string | null): number {
        if (optionFullText === null) {
            optionFullText = '';
        }

        const regex = /\+\d+\.\d/g;
        const matches = optionFullText.match(regex);
        if (matches) {
            return Number(matches[0].replace('+', '').trim())
        }
        return 0;
    }
}