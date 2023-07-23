import express from 'express'
import fetchToken from '../../../utils/fetchToken';
import { api } from '../../../../backend/main';

export const handler = async ( req: express.Request, res: express.Response ) => {

  const { username, password } = req?.body

  const credentials = {
    client_id: process.env.CLIENT_ID!,
    client_secret: process.env.CLIENT_SECRET!
}

  const user = await api.getUser({ username, client_credentials: credentials })

  switch(user.status) {
    case 200:
      return res.status(409).json({ data: 'User already exists' })
    case 500:
      return res.status(500).json({ data: 'Internal Server Error'})
  }

  const data = {
    username,
    password, 
    client_credentials: credentials
  }

  const newUser = await api.createUser(data)
  
  if(!newUser.ok) return res.status(500).json({ message: 'Failed to create user'})
  
  return res.status(200).json({ message: 'Account created successfully' })
  
}