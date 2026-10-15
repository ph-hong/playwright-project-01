import { test } from '@playwright/test'

test('Link text - Xpath', async ({ page }) => {
    await page.goto('/');

    // Debug purpose only
    await page.waitForTimeout(3 * 1000);
})