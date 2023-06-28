'use strict'
import fs from 'fs'
import { CWD } from '../../../src/utils/consts'

export default function uid () {
    const filename = CWD + '/db/lib/uid/indexRegister.txt'
    
   //the actual error cannot leave db because it may contain sensitive information
   return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (error, data) => {
            
            if(error) reject(error)

            const index = parseInt(data) + 1

            const id = parseInt(data)

            const stringifiedIndex = index.toString()

            fs.writeFile(filename, stringifiedIndex,(error) => {

                if(error) reject(error)

                console.log(`updated index ${stringifiedIndex}`)
            })

            resolve(id)
        })

   })

}