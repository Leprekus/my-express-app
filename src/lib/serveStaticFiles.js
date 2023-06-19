"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const consts_1 = require("../utils/consts");
function serveStaticFiles(req, res) {
    const cwd = consts_1.CWD + '/src/pages';
    let filePath = '';
    if (req.path === '/')
        filePath = path_1.default.join(cwd, '/index.html'); // Assuming the files are HTML
    else
        filePath = path_1.default.join(cwd, req.path + '.html');
    console.log({ filePath });
    fs_1.default.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // If the file is not found or there's an error, send a fallback response
            res.status(404).send('404 Not Found');
        }
        else {
            res.send(data);
        }
    });
}
exports.default = serveStaticFiles;
