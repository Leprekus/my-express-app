import express from 'express'

export const handler = async ( req: express.Request, res: express.Response ) => {
    const user = await create
    return res.status(200).json({ message: 'hello' })
}





