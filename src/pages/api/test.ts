import express from 'express'

export const handler = async ( req: express.Request, res: express.Response ) => {
    return res.status(200).json({ message: 'hello' })
}





