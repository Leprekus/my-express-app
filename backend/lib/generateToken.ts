import { CWD } from "../../src/utils/consts";
import { IResponse } from "../typings";
import fs from 'fs'

function tokenExists(token:string):boolean {
    
    const path = CWD + '/backend/db/entries/tokens/' + token

    try {
        return fs.existsSync(path);
    } catch (error) {
        return false;
    }
}


const MAX_ATTEMPTS = 100;
export default function generateToken () {
    const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const tokenLength = 64;
    let attempts = 0;
    let token = '';

    while (token.length < tokenLength && attempts < MAX_ATTEMPTS) {
        const index = Math.floor(Math.random() * CHARACTERS.length);
        token += CHARACTERS[index];
        attempts++;
    }

    if(attempts >= MAX_ATTEMPTS) throw Error('Token generation exceeded maximum atttempts')

    while(tokenExists(token)) {
        token = generateToken()
    }

    return token
}