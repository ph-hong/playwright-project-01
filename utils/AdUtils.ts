import { Page } from "@playwright/test";

export async function getAdvertisingParams(page: Page, adSlotId: String): Promise<any> {
    // Using binding to provide arg for the callback function
    return await page.evaluate(adSlotId => {
        const slot = googletag.pubads().getSlots().find(({ getSlotElementId }) => getSlotElementId() === adSlotId);
        return slot.getTargetingMap();
    }, adSlotId);
}