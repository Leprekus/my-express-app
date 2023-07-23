import { CRUD } from "./CRUD";
import { Post } from "./db/models/Post.model";
import generateToken from "./lib/generateToken";
import writeToken from "./lib/writeToken";
import { IClientCredentials, IToken, UserCall } from "./typings";
import fs from 'fs'

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
    
    private validateClientCredentials(credentials: { client_id: string, client_secret: string}) {
        const { client_id, client_secret} = credentials
        if(
            client_id !== process.env.CLIENT_ID &&
            client_secret !== process.env.CLIENT_SECRET
         ) return false
        
        return true
    }

    
    async getUser(data: { 
        username:string, 
        client_credentials: IClientCredentials
    }):Promise<UserCall> { 
        const { username, client_credentials } = data

        if(!this.validateClientCredentials(client_credentials)) return { 
            ok: false,
            status: 401 
        }

        const user = await this.crud.getUser(username, this.secret)

        delete user.user?.password

        return user
     }

    async createUser(data: { 
        username: string, 
        password: string, 
        client_credentials: IClientCredentials }):Promise<UserCall> { 

        const { username, password, client_credentials } = data

        if(!this.validateClientCredentials(client_credentials)) {
            return { 
                ok: false,
                status: 401 
            }
        }

        const newUser = await this.crud.createUser(username, password, this.secret )

       return newUser
    }

    async signIn(data: {
        username: string,
        password: string,
        client_credentials: IClientCredentials
    }):Promise<IToken> {
        const { username, password, client_credentials } = data

        if(!this.validateClientCredentials(client_credentials)) return { ok: false, status: 401 }
        
        const { user } = await this.crud.getUser(username, this.secret)

        if(
            password === user?.password &&
            username === user.username
        ) {

            delete user?.password
            
            const access_token = generateToken()

            const token = writeToken(access_token, user)

            return token
            
        }
        
        return { ok: false, status: 401 }
        
    }

    getPost():Post { return 0 }
}