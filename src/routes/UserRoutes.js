import express from 'express'
const router = express.Router()


import { loadHome, editPage, updateUser, scheduleServicePage, availableTimes } from '../controllers/UserController.js'

router.get('/home', loadHome)
router.get('/schedule-service', scheduleServicePage)
router.get('/available-times', availableTimes)
router.get('/:id', editPage)
router.put('/edit/:id', updateUser)

export default router