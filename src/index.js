import express from 'express'
import cors from 'cors'
import conn from './db/conn.js'

const app = express()

app.use(express.json())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

import UserRoutes from './routes/UserRoutes.js'
app.use('/user', UserRoutes)

app.listen(5000)