import { Locator } from "@playwright/test";
import Footer from "./Footer";

export default class MyAccountColumn extends Footer {
    public static readonly LOCATOR = '.column.my-account';

    // constructor(component: Locator) {
    //     super(component);
    // }
}