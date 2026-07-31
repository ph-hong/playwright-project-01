import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";
import { ComputerEssentialComponent } from "../components/computer/ComputerEssentialComponent";

/**
 * - Tao ra mot "ong tho" de tao ra mot doi tuong tu cai khuon
 * - $: Ky thuat "instersection type" trong TypeScript
 */
export type ComputerComponentConstructor<
    T extends ComputerEssentialComponent
> = (new (component: Locator) => T);
// export type ComputerComponentConstructor<T extends ComputerEssentialComponent> = (new (componentClass: Locator) => T) & {selector: string};

export class ComputerDetailsPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    /**
     * 
     * CO nhieu loai Computer Components: Standaer, Cheap and expensive
     * Chung ta yeu cau dua vao mot cai "khuon", khi nao khoi tao la tuy chung ta
     */

    computerComponent<T extends ComputerEssentialComponent>(
        computerComponentClass: ComputerComponentConstructor<T>
    ): T {

        return new computerComponentClass(this.page.locator(computerComponentClass.selectorValue));

        //         return new computerComponentClass(this.page.locator(".product-essential"));
    }
}