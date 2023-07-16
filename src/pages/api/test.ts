import express from 'express'
import uid from '../../../backend/lib/uid/uidGenerator'

export const handler = async ( req: express.Request, res: express.Response ) => {
    const index = await uid()
    return res.status(200).json({ message: index })
}





