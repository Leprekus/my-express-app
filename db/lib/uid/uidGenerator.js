'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const consts_1 = require("../../../src/utils/consts");
function uid() {
    const filename = consts_1.CWD + '/db/lib/uid/indexRegister.txt';
    //the actual error cannot leave db because it may contain sensitive information
    return new Promise((resolve, reject) => {
        fs_1.default.readFile(filename, 'utf-8', (error, data) => {
            if (error)
                reject(error);
            const index = parseInt(data) + 1;
            const id = parseInt(data);
            const stringifiedIndex = index.toString();
            fs_1.default.writeFile(filename, stringifiedIndex, (error) => {
                if (error)
                    reject(error);
                console.log(`updated index ${stringifiedIndex}`);
            });
            resolve(id);
        });
    });
}
exports.default = uid;
