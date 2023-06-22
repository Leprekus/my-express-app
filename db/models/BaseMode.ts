export class BaseModel {

    id : number;
    createdAt: string;
    updatedAt: string;

    name: string;

    constructor() {
        this.id  = 0;
        this.createdAt  = '';
        this.updatedAt  = '';

        this.name = '';
    }

    get current() { return this.id }

    set current(newValue: number ) { this.id = newValue } 
}