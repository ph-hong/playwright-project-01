import { Locator } from "@playwright/test";
import FooterColumnComponent from "./FooterColumnComponent";

export default class CustomerServiceColumnCoponent extends FooterColumnComponent{
    public static readonly LOCATOR = '.column.customer-service';

    constructor(component: Locator){
        super(component);
    }
}