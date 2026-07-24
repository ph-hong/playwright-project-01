import { Locator } from "@playwright/test";
import Footer from "./Footer";

export default class CustomerServiceColumn extends Footer{
    public static readonly LOCATOR = '.column.customer-service';

    // constructor(component: Locator){
    //     super(component);
    // }
}