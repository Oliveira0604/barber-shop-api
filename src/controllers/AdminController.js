import { addProfessional } from '../services/AdminService.js'

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

        res.status(200).json({ message: `Usuário ${datas.name} cadastrado com sucesso` })

    } catch (error) {
        res.status(401).json({ message: error.message })
    }

}

export const addServicePage = (req, res) => {

    res.status(200).json({ message: 'Qual serviço deseja selecionar? ' })
}