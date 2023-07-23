import { CWD } from "../src/utils/consts";
import { User } from "./db/models/User.model";
import fs from 'fs'
import { UserCall } from "./typings";

export class CRUD {

    secret: 'MY_ENV_VAR';
    dbPath: string;

    constructor() {

        this.secret = 'MY_ENV_VAR'

        this.dbPath = CWD + '/backend/db'

    }

    private validateSecret(secret: string) { return secret === this.secret ? true : false }

    async getUser(username:string, secret:string ):Promise<UserCall> { 

        if(!this.validateSecret(secret)) return { status: 401, ok: false }

        /////
        try {
            const userFilePath = this.dbPath + '/entries/users/' + username + '.json'

            const user = fs.readFileSync(userFilePath, 'utf-8');
            
            return {
                user,
                status: 200,
                ok: true
            }
        
          } catch (err: any) {

            if (err.code === 'ENOENT') 
                return {
                status: 404,
                ok: false
                }

            else 
                return {
                    status: 500,
                    ok: false
                }
          }
        ////
    }

    async createUser (username: string, password: string, secret: string):Promise<UserCall> {

        if(!this.validateSecret(secret)) return { status: 401, ok: false }

        ////
        try {
            const userFilePath = this.dbPath + '/entries/users/' + username + '.json'

            const data = JSON.stringify({ username, password })

            //returns undefined
            fs.writeFileSync(userFilePath, data, 'utf-8');
            
            return {
                status: 200,
                ok: false
            }
        
          } catch (err: any) {

            return {
                status: 500,
                ok: false
            }
          }
        ////

    }
}