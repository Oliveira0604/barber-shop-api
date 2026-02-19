import express from 'express'
const router = express.Router()


import { loadHome, editPage, updateUser, scheduleServicePage, scheduleService, cancelAppointment } from '../controllers/UserController.js'

router.get('/home', loadHome)
router.get('/schedule-service', scheduleServicePage)
router.post('/schedule-service', scheduleService)
router.delete('/cancel-appointment/:id', cancelAppointment)
router.get('/:id', editPage)
router.put('/edit/:id', updateUser)

export default router