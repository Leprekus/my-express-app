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

        if(!this.validateSecret(secret)) return { ok: 401 }

        /////
        try {
            const userFilePath = this.dbPath + '/entries/users/' + username + '.json'

            const user = fs.readFileSync(userFilePath, 'utf-8');
            
            return {
                user,
                ok: 200,
            }
        
          } catch (err: any) {

            if (err.code === 'ENOENT') 
                return {
                ok: 404
                }

            else 
                return {
                    ok: 500
                }
          }
        ////
    }

    async createUser (username: string, password: string, secret: string):Promise<UserCall> {

        if(!this.validateSecret(secret)) return { ok: 401 }

        ////
        try {
            const userFilePath = this.dbPath + '/entries/users/' + username + '.json'

            const data = JSON.stringify({ username, password })

            //returns undefined
            fs.writeFileSync(userFilePath, data, 'utf-8');
            
            return {
                ok: 200,
            }
        
          } catch (err: any) {

            return {
                ok: 500
            }
          }
        ////

    }
}