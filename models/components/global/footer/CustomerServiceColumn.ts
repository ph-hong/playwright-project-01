import { Locator } from "@playwright/test";
import FooterColumn from "./FooterColumn";

export default class CustomerServiceColumn extends FooterColumn{
    public static readonly LOCATOR = '.column.customer-service';

    // constructor(component: Locator){
    //     super(component);
    // }
}