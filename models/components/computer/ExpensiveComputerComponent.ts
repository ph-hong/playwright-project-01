import { ComputerEssentialComponent } from "./ComputerEssentialComponent";

export default class ExpensiveComputerComponent extends ComputerEssentialComponent {

    public async selectProcessor(value: string): Promise<string | null> {
        throw new Error("Method not implemented.");
    }

    public async selectRAM(value: string): Promise<string | null> {
        throw new Error("RAM selection is not implemented for value: ${value}");
    }

}