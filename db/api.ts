import { DatabaseManager } from "./entries/DatabaseManager"

const token = true

if(!token) throw new Error('401 Forbidden')
const db = new DatabaseManager()

export const create = (req: Request, res: Response) => {
    db.
}

export const get = (req: Request, res: Response) => {
    const token = req.headers
    console.log({ token })
}
export const update = (req: Request, res: Response) => {
    const token = req.headers
    console.log({ token })
}

export const delete = (req: Request, res: Response) => {
    const token = req.headers
    console.log({ token })
}


