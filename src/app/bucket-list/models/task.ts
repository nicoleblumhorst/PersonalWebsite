import {Proof} from'./proof';

export class Task {
    description: string;
    isDone: boolean;
    proof: Proof;

    constructor(description: string, isDone: boolean, proof?: Proof) {
        this.description = description;
        this.isDone = isDone;
    }
}