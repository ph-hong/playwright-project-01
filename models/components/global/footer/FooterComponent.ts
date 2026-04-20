import { Locator } from "@playwright/test";
import CustomerServiceColumnCoponent from "./CustomerServiceComponent";
import InformationColumnComponent from "./InformationColumnComponent";

export default class FooterComponent {
    public static readonly LOCATOR = '.footer';

    constructor(private component: Locator) {
        this.component = component;
    }

    public informationColumnComp(): InformationColumnComponent {
        return new InformationColumnComponent(this.component.locator(InformationColumnComponent.LOCATOR));
    }

    public customerServiceColumnComp(): CustomerServiceColumnCoponent {
        return new CustomerServiceColumnCoponent(this.component.locator(CustomerServiceColumnCoponent.LOCATOR));
    }
    public async powerByText(): Promise<string> {
        return await this.component.locator('.footer-poweredBy').innerText();
    }

}