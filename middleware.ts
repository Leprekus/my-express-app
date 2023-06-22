import express from 'express'
import getUser from './src/lib/getUser'

export default async function middleware( req: express.Request, res: express.Response, next: express.NextFunction) {

    const pathname = req.path

    if(pathname.includes('api')) return next()

    const user =  getUser()

    if(!user && !pathname.includes('login')) {

       return res.redirect('/login')

    }

    return next()
}