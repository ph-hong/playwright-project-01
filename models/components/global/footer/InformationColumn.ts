import { Locator } from "@playwright/test";
import FooterColumn from "./FooterColumn";

export default class InformationColumn extends FooterColumn {
    public static readonly LOCATOR = '.column.information';

    // constructor(conponent: Locator) {
    //     super(conponent);
    // }
}