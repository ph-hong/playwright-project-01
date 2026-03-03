import { expect, Page, test } from '@playwright/test';
import { scrollToBottom } from '../utils/PageUtils';
import { getAdvertisingParams } from '../utils/AdUtils';

test.describe('Handle Alerts', () => {

    test('Handle JS Popup', async ({ page }) => {
        await page.goto('/javascript_alerts');
        const jsAlertLoc = page.locator("//button[text()='Click for JS Alert']");

        // Must define event handler
        page.on("dialog", async dialog => {
            await dialog.accept();
        });

        // Trigger the JS alert
        await jsAlertLoc.click();
    })

    test('Handle JS Confirm', async ({ page }) => {
        await page.goto('/javascript_alerts');
        const jsConfirmLoc = page.locator("button[onclick='jsConfirm()']")

        // Must define event handler
        page.on("dialog", async dialog => {
            await dialog.dismiss();
        });

        // Trigger the JS alert
        await jsConfirmLoc.click();
    })

    test('Handle JS Prompt', async ({ page }) => {
        await page.goto('/javascript_alerts');
        const jsPromptLoc = page.locator("button[onclick='jsPrompt()']");
        const resultLoc = page.locator("#result");

        // Must define even handler
        page.on('dialog', async dialog => {
            await dialog.accept("text JS prompt");
        })

        // Trigger the JS alert
        await jsPromptLoc.click();

        // Get the result text
        const resultText = await resultLoc.innerText();
        console.log(resultText.split(":")[1].trim());
    })
})

test.describe('Execute JS snippet', () => {
    test('Execute without params', async ({ page }) => {
        await page.goto('/floating_menu');
        await scrollToBottom(page);

        await page.evaluate(() => {
            const elementsToRemove = document.querySelectorAll('h3');
            elementsToRemove.forEach(element => element.remove());
        });
    })

    test('Execute with params and get return values', async ({ page }) => {
        await page.goto('https://www.foodandwine.com');
        const adId = "leaderboard-flex-1";
        const leaderBoardFlexLoc = `#${adId}`;
        await page.waitForSelector(leaderBoardFlexLoc, { timeout: 10 * 1000 });
        await scrollToBottom(page);
        const adParams = await getAdvertisingParams(page, adId);
        console.log(JSON.stringify(adParams.docId));
        expect(adParams.docId[0]).toBe("6361217");
    })

})







