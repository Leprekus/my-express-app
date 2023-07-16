import { CRUD } from "./CRUD";
import { Post } from "./db/models/Post.model";
import { User } from "./db/models/User.model";
import { UserCall } from "./typings";

export class API {

    private crud: CRUD;

    token: null | string;
    
    secret: 'MY_ENV_VAR';

    constructor() {

        this.crud = new CRUD();
        this.token = null;
        this.secret = 'MY_ENV_VAR'
    }


    private validateToken(token: string) { 
        return token === 'my_access_token' ? true : false
     }
    
    async getUser(data: { username:string, token:string }):Promise<UserCall> { 
        const { username, token } = data

        if(!this.validateToken(token)) return { ok: 401 }

        const user = await this.crud.getUser(username, this.secret)

        return user
     }

    async createUser(data: { 
        username: string, 
        password: string, 
        token: string }):Promise<UserCall> { 

        const { username, password, token } = data

        if(!this.validateToken(token)) {
            return { ok: 401 }
        }

        const newUser = await this.crud.createUser(username, password, this.secret )

       return newUser
    }

    getPost():Post { return 0 }
}