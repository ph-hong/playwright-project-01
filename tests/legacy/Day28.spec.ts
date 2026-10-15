import { expect, test } from '@playwright/test';

const CUSTOM_TIMEOUT = { timeout: 15 * 1000 };

test('Hande Dropdown', async ({ page }) => {
    await page.goto('/dropdown');

    const dropdownLocator = page.locator("#dropdown");

    // 1. Select Option 1 - Index
    await dropdownLocator.selectOption({ index: 1 });
    await page.waitForTimeout(1000);

    // 2. Select Option 2 - Value
    await dropdownLocator.selectOption({ value: '2' });
    await page.waitForTimeout(1000);

    // 3. Select Opetion 1 - Label/VisibleText
    await dropdownLocator.selectOption({ label: 'Option 1' })
    await page.waitForTimeout(1000);
})

test('Hande iFrame', async ({ page }) => {
    await page.goto('/iframe');
    const iframeLocator = page.frameLocator('iframe[id^="mce"]');
    const textEditLocator = iframeLocator.locator('body p');
    await textEditLocator.click({ force: true });
    await page.waitForTimeout(1000);
})

test('Mouse Hover', async ({ page }) => {
    await page.goto('/hovers');

    // Find all the figures locators
    const allFiguresLocators = await page.locator(".figure").all();

    // Loop over all figures elements
    for (const figureLocator of allFiguresLocators) {
        // Scope down searching elements
        const imageLocator = figureLocator.locator("img");
        const userNameLocator = figureLocator.locator("h5");
        const hyperlinkLocator = figureLocator.locator("a");

        // BEFORE MOUSE HOVER
        let usernameText = await userNameLocator.textContent();
        console.log("Before mouse hover username: " + usernameText);

        let isUserNameVisible = await userNameLocator.isVisible();
        let isProfileHyperlinkVisible = await hyperlinkLocator.isVisible();
        console.log("Before mouse hover isUsernameVisible " + isUserNameVisible);
        console.log("Before mouse hover isProfileHyperlinkVisible " + isProfileHyperlinkVisible);

        // MOUSE HOVER
        await imageLocator.hover();
        await page.waitForTimeout(1000);

        // AFTER MOUSE HOVER
        usernameText = await userNameLocator.textContent();
        console.log("After mouse hover username " + usernameText);
        isUserNameVisible = await userNameLocator.isVisible();
        isProfileHyperlinkVisible = await hyperlinkLocator.isVisible();
        console.log("After mouse hover isUserNameVisible: " + isUserNameVisible);
        console.log("After mouse hover isProfileHyperlinkVisible: " + isProfileHyperlinkVisible);
    }
})

test('Checking element states and handle dynamic control', async ({ page }) => {
    await page.goto('/dynamic_controls');

    // Find all parent components
    const checkboxComponent = page.locator("#checkbox-example");

    // Interact with checkbox component's elements
    const checkboxLocator = checkboxComponent.locator("#checkbox input");
    let ischeckboxChecked = await checkboxLocator.isChecked();
    if (!ischeckboxChecked) {
        await checkboxLocator.click();
    }
    await page.waitForTimeout(1000);
    const removeButtonLocator = checkboxComponent.locator("button");
    await removeButtonLocator.click();
    await page.waitForSelector("#checkbox-example #checkbox input", { state: 'hidden' })
})

