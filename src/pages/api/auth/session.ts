import express from 'express'
import fetchToken from '../../../utils/fetchToken';
import { api } from '../../../../backend/main';
import { ClientToken, ICookieToken } from '../../../typings';

export const handler = async ( req: express.Request, res: express.Response ) => {

  const cookieToken:ClientToken = req.cookies?.token || null
  
  let token = null
  
//   if(!cookieToken) 
//     token = await fetchToken(username, password)
  
//   else {
//     token = cookieToken}
  
//   if(!token.ok) 
//     return res.status(token.status).json({ data: 'Failed to fetch token'})

//   token = ({
//     ...token,
//     expires_at: token.created_at! + HOUR_IN_MILISECONDS
//   } as ClientToken)

  return res.status(200).json({ data: cookieToken })
  
}