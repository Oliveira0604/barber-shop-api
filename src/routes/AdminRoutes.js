import express from 'express'
const router = express.Router()

import { addProfessionalPage, addProfessionalPost, addServicePage, addServicePost } from '../controllers/AdminController.js'
import { checkAdmin } from '../helpers/check-admin.js'
import { checkUserToken } from '../helpers/check-user-token.js'

router.get('/add-professional', checkUserToken, checkAdmin, addProfessionalPage)
router.post('/add-professional',  checkUserToken, checkAdmin, addProfessionalPost)
router.get('/add-service', checkUserToken, checkAdmin, addServicePage)
router.post('/add-service', checkUserToken, checkAdmin, addServicePost)

export default router