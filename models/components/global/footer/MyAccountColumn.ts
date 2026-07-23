import { Locator } from "@playwright/test";
import FooterColumn from "./FooterColumn";

export default class MyAccountColumn extends FooterColumn {
    public static readonly LOCATOR = '.column.my-account';

    // constructor(component: Locator) {
    //     super(component);
    // }
}