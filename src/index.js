import express from 'express'
import cors from 'cors'
import conn from './db/conn.js'

const app = express()

app.use(express.json())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

app.listen(5000)