import { addUser, userToken } from "../services/AuthrService.js"

export const registerUser = async (req, res) => {

    const { name, email, cellphone, password, confirmPassword, isAdmin } = req.body

    const user = {
        name,
        email,
        cellphone,
        password,
        confirmPassword,
        isAdmin
    }

    try {

        await addUser(user)
        res.status(200).json({
            message: 'Usuário cadastrado com sucesso!'
        })

    } catch (error) {
        res.status(422).json({ message: error.message })
        console.log(error)
    }
}

export const login = async (req, res) => {

    const { email, password } = req.body

    const userDatas = {
        email,
        password
    }

    try {
        const token = await userToken(userDatas)
        res.status(200).json({ message: 'Login efetuado com sucesso.', token, token_type: 'Bearer' })

    } catch (error) {
        res.status(402).json({message: error.message})
    }  
    
}