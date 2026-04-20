import test from "@playwright/test";
import HomePage from "../models/pages/HomePage";

test('POM - List of Components', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const pageBodyComponent = homePage.pageBodyComponent();
    const productItemCompList = await pageBodyComponent.productItemComponentList();
    for (const productItemComp of productItemCompList) {
        const productTitle = await productItemComp.getProductTitle();
        const productPrice = await productItemComp.getProductPrice();
        console.log(`Product Title: ${productTitle}, Product Price: ${productPrice}`);
    }
});

test("POM - Reusing Base Component", async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const footerComp = homePage.footerComponent();
    const informationColumnComp = footerComp.informationColumnComp();
    const customerServiceColumnComp = footerComp.customerServiceColumnComp();

    const informationColumnText = await informationColumnComp.getTitleText();
    console.log("Information Column Text: ", informationColumnText);

    const customerServiceText = await customerServiceColumnComp.getTitleText();
    console.log("Customer Service Column Text: ", customerServiceText);

})