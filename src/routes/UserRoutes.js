import express from 'express'
const router = express.Router()


import { loadHome, editPage, updateUser } from '../controllers/UserController.js'

router.get('/home', loadHome)
router.get('/:id', editPage)
router.put('/edit/:id', updateUser)

export default router