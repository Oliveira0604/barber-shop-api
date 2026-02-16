import { addProfessional, addService } from '../services/AdminService.js'
import { validateServiceDatas } from '../helpers/validations.js'

export const addProfessionalPage = (req, res) => {
    try {
        const userName = req.user.name

        res.status(200).json({ message: `Seja bem-vindo(a) ${userName}` })

    } catch (error) {
        res.status(401).json({ message: error.message })
    }

}

export const addProfessionalPost = async (req, res) => {

    try {

        const { name, email, cellphone, password, confirmPassword, specialty, isAdmin } = req.body

        const datas = {
            name,
            email,
            cellphone,
            password,
            confirmPassword,
            specialty,
            isAdmin,
        }

        await addProfessional(datas)

        res.status(201).json({ message: `Usuário ${datas.name} cadastrado com sucesso` })

    } catch (error) {
        res.status(401).json({ message: error.message })
    }

}

export const addServicePage = (req, res) => {

    res.status(200).json({ message: 'Qual serviço deseja selecionar? ' })
}

export const addServicePost = async (req, res) => {

    try {

        const { name, price, duration } = req.body
        const datas = {
            name,
            price,
            duration
        }

        validateServiceDatas(datas)

        await addService(datas)

        res.status(201).json({message: 'Serviço cadastrado com sucesso.'})
        
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}