import { Locator } from "@playwright/test";
import CustomerServiceColumn from "./CustomerServiceColumn";
import InformationColumn from "./InformationColumn";
import MyAccountColumn from "./MyAccountColumn";

export default class FooterComponent {
    public static readonly LOCATOR = '.footer';

    constructor(private component: Locator) {
        this.component = component;
    }

    public informationColumn(): InformationColumn {
        return new InformationColumn(
            this.component.locator(InformationColumn.LOCATOR)
        );
    }

    public customerServiceColumn(): CustomerServiceColumn {
        return new CustomerServiceColumn(
            this.component.locator(CustomerServiceColumn.LOCATOR));
    }

    public myAccountColumn(): MyAccountColumn {
        return new MyAccountColumn(
            this.component.locator(MyAccountColumn.LOCATOR));
    }

    public async poweredByText(): Promise<string> {
        return await this.component
            .locator('.footer-poweredBy')
            .innerText();
    }
}