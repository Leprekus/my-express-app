"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
class BaseModel {
    constructor() {
        this._id = 0;
        this._createdAt = '';
        this._updatedAt = '';
        this.name = '';
    }
    get id() { return this._id; }
    get createdAt() { return this._createdAt; }
    get updatedAt() { return this._updatedAt; }
    read(filename) { }
    write(filename) { }
    update(filename) { }
    delete(filename) { }
}
exports.BaseModel = BaseModel;
