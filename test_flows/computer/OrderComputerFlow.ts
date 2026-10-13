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
        const { processorType, hdd, ram, software, os } = this.computerData
        const ramOptionFullTex = await computerComponent.selectRAM(ram);
        console.log(`ramOptionFullText: ${ramOptionFullTex}`);

        // DEBUG purpose only
        await this.page.waitForTimeout(3 * 1000);
    }
}