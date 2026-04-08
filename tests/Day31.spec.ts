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