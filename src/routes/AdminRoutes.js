import express from 'express'
const router = express.Router()

import { addProfessionalPage } from '../controllers/AdminController.js'
import { checkAdmin } from '../helpers/check-admin.js'
import { checkUserToken } from '../helpers/check-user-token.js'

router.get('/addprofessional', checkUserToken, checkAdmin, addProfessionalPage)

export default router