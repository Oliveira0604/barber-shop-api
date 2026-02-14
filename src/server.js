import express from 'express'
import cors from 'cors'
import conn from './db/conn.js'

import { checkUserToken } from './helpers/check-user-token.js'

const app = express()

app.use(express.json())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

import AuthRoutes from './routes/AuthRoutes.js'
import AdminRoutes from './routes/AdminRoutes.js'
import UserRoutes from './routes/UserRoutes.js'

app.use('/auth', AuthRoutes)
app.use('/admin', AdminRoutes)
app.use('/user', checkUserToken, UserRoutes)

app.listen(5000)