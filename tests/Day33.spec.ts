import test from "@playwright/test";
import StandardComputerComponent from "../models/components/computer/StandardComputerComponent";
import CheapComputerComponent from "../models/components/computer/CheapComputerComponent";
import { ComputerDetailsPage } from "../models/pages/ComputerDetailsPage";

test("Cheap Computer Component Test", async ({ page }) => {
    await page.goto("/build-your-cheap-own-computer");
    // await selectRAM(CheapComputerComponent, "8 GB");
    const computerDetailsPage = new ComputerDetailsPage(page);
    // CheapComputerComponent: JUST  A TEMPLATE
    const computerComponent = computerDetailsPage.computerComponent(CheapComputerComponent);
    await computerComponent.selectRAM("8 GB");
    await page.waitForTimeout(3 * 1000);
});

test("Standard Computer Test", async ({ page }) => {
    await page.goto("/build-your-own-computer");
    // await selectRAM(StandardComputerComponent, "8GB");
    const computerDetailsPage = new ComputerDetailsPage(page);
    // StandardComputerComponent: JUST A TEMPLATE
    const computerComponent = computerDetailsPage.computerComponent(StandardComputerComponent);
    await computerComponent.selectRAM("8GB");
    await page.waitForTimeout(3 * 1000;
});

// test("Test annotation - decorator approach", async ({ page }) => {
//     getComponent(CheapComputerComponent);
// });
// const getComponent = (compClass) => console.log(compClass.selectorValue);

