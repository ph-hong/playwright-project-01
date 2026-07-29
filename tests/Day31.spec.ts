import test from "@playwright/test";
import HomePage from "../models/pages/HomePage";

test('POM - List of Components', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const pageBodyComponent = homePage.pageBodyComponent();
    const productItemCompList = await pageBodyComponent.productItems();
    for (const productItemComp of productItemCompList) {
        const productTitle = await productItemComp.getProductTitle();
        const productPrice = await productItemComp.getProductPrice();
        console.log(`${productTitle}: ${productPrice}`);
    }
});

test("POM - Reusing Base Component", async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const footerComp = homePage.footerComponent();
    const informationColumnComp = footerComp.informationColumn();
    const customerServiceColumnComp = footerComp.customerServiceColumn();

    const informationColumnText = await informationColumnComp.getTitleText();
    console.log("Information Column Text: ", informationColumnText);

    const customerServiceText = await customerServiceColumnComp.getTitleText();
    console.log("Customer Service Column Text: ", customerServiceText);

})