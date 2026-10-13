import { ComputerEssentialComponent } from "./ComputerEssentialComponent";

export default class ExpensiveComputerComponent extends ComputerEssentialComponent {

    public selectRAM(value: string): Promise<string | null> {
        throw new Error("RAM selection is not implemented for value: ${value}");
    }

}