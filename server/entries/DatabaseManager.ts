import { Post } from "../models/Post.model";
import { User } from "../models/User.model";


//sole purpose is CRUD operations
export class DatabaseManager {
    user: User;
    post: Post;

    constructor() {
        this.user = new User()
        this.post = new Post()
    }
}