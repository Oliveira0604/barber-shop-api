import jwt from 'jsonwebtoken'
import { getToken } from './get-user-token.js'
import 'dotenv/config'

export const checkAdmin = (req, res, next) => {
    try {

        const isAdmin = req.user.isAdmin
        console.log(isAdmin)

        if (!isAdmin) {
            throw new Error('Acesso negado')
        }

        next()

    } catch (error) {
        res.status(401).json({ message: error.message })
    }



}