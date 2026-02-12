import jwt from 'jsonwebtoken'
import { getToken } from './get-user-token.js'
import 'dotenv/config'

export const checkUserToken = (req, res, next) => {
    try {

        if (!req.headers.authorization) {
            throw new Error('Acesso negado')
        }

        const token = getToken(req)

        if (!token) {
            throw new Error('Acesso negado')
        }


        const decoded = jwt.verify(token, process.env.OUR_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({ message: error.message })
    }

}