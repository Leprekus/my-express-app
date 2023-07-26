"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const consts_1 = require("../utils/consts");
const createHTML_1 = __importDefault(require("./createHTML"));
function serveStaticFiles(req, res) {
    const PAGES_DIRECTORY = consts_1.CWD + '/src/pages';
    let filePath = '';
    if (req.path === '/')
        filePath = path_1.default.join(PAGES_DIRECTORY, '/index.html'); // Assuming the files are HTML
    else
        filePath = path_1.default.join(PAGES_DIRECTORY, req.path + '.html');
    if (fs_1.default.existsSync(filePath)) {
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
    else if (req.path) {
        console.log('i shouldnt appear', { request: req.path });
        const pattern = /\[[^\]]+]\.js/;
        const splitPath = req.path.split('/');
        // Calculate the depth of the directory and construct the file path
        // If the directory depth is less than or equal to 2, set the file path as '/'
        // Otherwise, set the file path by joining all directory parts except the last one
        // with a '/' separator
        const reqPath = splitPath.length <= 2 ? '/' : splitPath.slice(0, splitPath.length - 1).join('/') + '/';
        const FOLDER_PATH = path_1.default.join(consts_1.CWD, 'src/pages/' + reqPath);
        try {
            const FILES_IN_FOLDER = fs_1.default.readdirSync(FOLDER_PATH);
            const matches = FILES_IN_FOLDER.filter((file) => pattern.test(file));
            if (matches.length === 0)
                res.status(404).send('404 Not Found');
            const DYNAMIC_FILEPATH = path_1.default.join(FOLDER_PATH, reqPath + matches[0]);
            fs_1.default.readFile(DYNAMIC_FILEPATH, 'utf8', (err, data) => {
                if (err) {
                    // Handle the error if the file cannot be read
                    res.status(500).send('Internal Server Error');
                }
                else {
                    // 'data' contains the contents of the file as a string
                    //console.log('File content:', data);
                    const entryPoint = (0, createHTML_1.default)({ script: data });
                    res.setHeader('Content-Type', 'text/html');
                    entryPoint.pipe(res);
                }
            });
        }
        catch (error) {
            res.status(404).send('404 Not Found');
        }
    }
}
exports.default = serveStaticFiles;
