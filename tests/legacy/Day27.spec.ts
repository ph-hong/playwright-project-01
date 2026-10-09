import { expect, test } from '@playwright/test';

const CUSTOM_TIMEOUT = { timeout: 15 * 1000 };

test('Link Text - XPATH', async ({ page }) => {
    await page.goto('/');

    const footEle = await page.waitForSelector("//a[contains(text(), 'Elemental Selenium')]", CUSTOM_TIMEOUT);
    await footEle.click();

})

test('Link Text - CSS', async ({ page }) => {
    await page.goto('/');

    const footEle = await page.waitForSelector("a:has-text('Elemental Selenium')", CUSTOM_TIMEOUT);
    await footEle.click();

})

test('Link Text - Filtering', async ({ page }) => {
    await page.goto('/');

    const footEle = page.locator("a").filter({ hasText: 'Elemental Selenium' });
    await footEle.click();

})

test('Handle multiple matching', async ({ page }) => {
    await page.goto('/');

    const items = page.locator("a");
    const matchItemNumbers = await items.count();
    console.log('Total Items:', matchItemNumbers);

    // Interact on a specific index item
    // await items.nth(2).click();

    // Interact on the last first item
    // await items.first().click();

    // Interact on the last item
    await items.last().click();

    // Debug purpose only
    await page.waitForTimeout(3 * 1000);
})

test('Fill form authen', async ({ page }) => {
    await page.goto('/');

    // 1. Navigate to Form Authentication page
    const loginPageEle = page.locator("a").filter({ hasText: 'Form Authentication' })
    await loginPageEle.click();


    //2. Fill the form
    await page.locator("#username").fill("tomsmith");
    await page.locator("#password").fill("SuperSecretPassword!");
    // await page.locator("button[type='submit']").click();
    await page.locator("button:has-text('Login')").click();

    //3. Get the heading text on dashboard page
    const dashBoardHeadingLoc = "h2";
    let textContent = await page.locator(dashBoardHeadingLoc).textContent();
    console.log(textContent);
    console.log(textContent?.trim);

    let innerText = await page.locator(dashBoardHeadingLoc).innerText();
    console.log(innerText);

    expect(innerText).toBe("Secure Area");




})

