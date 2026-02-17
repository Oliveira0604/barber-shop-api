import User from '../models/User.js'

import { editUser, getAvailableTimes } from '../services/UserService.js'

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

        const name = req.user.name

        const { date, professionalName } = req.body

        const times = await getAvailableTimes(date, professionalName)

        res.status(200).json({
            message: `Olá ${name}`,
            times: times
        })

    } catch (error) {
        res.status(401).json({ message: error.message })
    }

}
