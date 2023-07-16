export class BaseModel {

    _id : number;
    _createdAt: string;
    _updatedAt: string;

    name: string;

    constructor() {
        this._id  = 0;
        this._createdAt  = '';
        this._updatedAt  = '';

        this.name = '';
    }

    get id() { return this._id }
    get createdAt() { return this._createdAt }
    get updatedAt() { return this._updatedAt }


    get(filename: 'post' | 'user') {}
    create(filename: 'post' | 'user') {}
    update(filename: 'post' | 'user') {}
    delete(filename: 'post' | 'user') {}
}