import { CWD } from "../../src/utils/consts";
import { IToken, User } from "../typings";
import fs from 'fs'
export default function writeToken(access_token: string, user: User):IToken {
    
    const token = {
        access_token, 
        created_at: Date.now(),
        user,
    }

    const path = CWD + '/backend/db/entries/tokens/' + access_token + '.json'
    try {
        
        fs.writeFileSync(path, JSON.stringify(token), { encoding: 'utf-8' })
        
        return {
            ...token,
            status: 200,
            ok: true
        }

    } catch(error) {
        return {
            status: 500,
            ok: false
        }
    }

}