import fs from 'fs'
import path from 'path'
import { CWD } from '../../src/utils/consts'
export default function deleteToken (access_token:string) {
    const pathname = path.join(CWD, '/backend/db/entries/tokens/' + access_token + '.json')
    console.log({tokenToBeDeleted: access_token})
    try {
        console.log({ pathname})
        fs.unlinkSync(pathname)
        
        return true

    } catch(error) {
        console.log({ error })
        return false
    }
}