import express from 'express'
const router = express.Router()

import { addProfessionalPage, addProfessionalPost, addServicePage, addServicePost } from '../controllers/AdminController.js'
import { checkAdmin } from '../helpers/check-admin.js'
import { checkUserToken } from '../helpers/check-user-token.js'

router.get('/addprofessional', checkUserToken, checkAdmin, addProfessionalPage)
router.post('/addprofessional/save',  checkUserToken, checkAdmin, addProfessionalPost)
router.get('/addservice', checkUserToken, checkAdmin, addServicePage)
router.post('/addservice', checkUserToken, checkAdmin, addServicePost)

export default router