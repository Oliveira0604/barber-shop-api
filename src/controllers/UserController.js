import User from '../models/User.js'

import { editUser, getAvailableTimes, schedule } from '../services/UserService.js'

export const loadHome = (req, res) => {

    const userName = req.user.name
    const userId = req.user.id

    res.status(200).json({ message: `Olá ${userName} id: ${userId}` })

}

export const editPage = (req, res) => {

    try {

        const userId = req.params.id

        res.status(200).json({ message: userId })

    } catch (error) {
        res.status(401).json({ message: 'Acesso negado' })
    }

}

export const updateUser = async (req, res) => {

    try {

        const id = req.params.id
        const { name, email, cellphone, password, confirmPassword } = req.body

        const datas = {
            id,
            name,
            email,
            cellphone,
            password,
            confirmPassword
        }

        await editUser(datas)

        res.status(200).json({ message: 'Atualizações feitas com sucesso.' })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

export const scheduleServicePage = async (req, res) => {

    try {

        const { date, professionalName } = req.body

        const times = await getAvailableTimes(date, professionalName)

        res.status(200).json({
            message: `Profissional ${professionalName}`,
            times: times
        })

    } catch (error) {
        res.status(401).json({ message: error.message })
    }

}

export const scheduleService = async (req, res) => {

    try {
        
        const user = req.user.id

        const { professional, service, date, time } = req.body

        const scheduleDatas = {
            user,
            professional, 
            service,
            date,
            time
        }

        await schedule(scheduleDatas)

        res.status(201).json({message: 'Agendado com sucesso'})

    } catch (error) {
        res.status(401).json({message: error.message})
    }
}