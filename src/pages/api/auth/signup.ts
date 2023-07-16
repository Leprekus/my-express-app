import express from 'express'
import fetchToken from '../../../utils/fetchToken';

export const handler = async ( req: express.Request, res: express.Response ) => {

  const { username, password } = req?.body

  const user = 'getUser(username)'

  if(user) {

    return res.status(409).json({ data: 'User already exists' })
    
  }
  
  return res.status(200).json({ message: 'Account created successfully' })
  
}