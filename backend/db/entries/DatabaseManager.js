"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseManager = void 0;
const Post_model_1 = require("../models/Post.model");
const User_model_1 = require("../models/User.model");
//sole purpose is CRUD operations
class DatabaseManager {
    constructor() {
        this.user = new User_model_1.User();
        this.post = new Post_model_1.Post();
    }
}
exports.DatabaseManager = DatabaseManager;
