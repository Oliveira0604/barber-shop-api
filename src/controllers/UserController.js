import { addUser } from "../services/UserService.js"

export const registerUser = async (req, res) => {

    const {name, email, cellphone, password, confirmPassword} = req.body

    const user = {
        name,
        email,
        cellphone,
        password,
        confirmPassword
    }

    try {
        
        await addUser(user)
        res.status(200).json({
            message: 'Usuário cadastrado com sucesso!'
        })

    } catch (error) {
        res.status(422).json({message: error.message})
        console.log(error)
    }
}