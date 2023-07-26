import { IToken } from "../../backend/typings";
import { ClientToken } from "../typings";
import express from 'express'

export default function setToken(token:IToken, res: express.Response, req:express.Request) {
    const HOUR_IN_MILISECONDS =  60 * 60 * 1000 

    const newToken = ({
      ...token,
      expires_at: token.created_at! + HOUR_IN_MILISECONDS
    } as ClientToken)
    
    res.clearCookie('token')
  
    res.cookie('token', newToken, { maxAge: 900000, httpOnly: true })
    
    console.log('tokenSet', newToken)
    return newToken
}