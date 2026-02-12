import express from 'express'
const router = express.Router()

import { checkUserToken } from '../helpers/check-user-token.js'

import { loadHome } from '../controllers/UserController.js'

router.get('/token', checkUserToken, loadHome)

export default router