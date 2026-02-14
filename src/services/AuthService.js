import User from '../models/User.js'
import Professional from '../models/Professional.js'
import bcrypt from 'bcrypt'
import { validateUserDatas } from '../helpers/validations.js'
import { formatName, formatCellphoneNumber } from '../helpers/formatting.js'
import { generateToken } from '../helpers/generate-token.js'

export const addUser = async (datas) => {

    validateUserDatas(datas)

    const formattedName = formatName(datas.name)
    const formattedCellphoneNumber = formatCellphoneNumber(datas.cellphone)

    const userExist = await User.findOne({ email: datas.email })

    if (userExist) {
        throw new Error("Esse email já esta cadastrado")
    }

    // criptografing the password
    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(datas.password, salt)

    const user = new User({
        name: formattedName,
        email: datas.email,
        cellphone: formattedCellphoneNumber,
        password: hashedPassword,
    })

    await user.save()

}

export const userToken = async (userDatas) => {

    const user = await User.findOne({ email: userDatas.email })
    const professional = await Professional.findOne({ email: userDatas.email })

    if (!user && !professional) {
        throw new Error('Usuário não  encontrado.')
    }

    if (user) {

        const checkUserPassword = bcrypt.compare(userDatas.password, user.password)

        if (!checkUserPassword) {
            throw new Error('Email ou senha inválido.')
        }

        const token = generateToken(user)

        return token
    }

    if (professional) {
        
        const checkProfessionalPassword = bcrypt.compare(userDatas.password, professional.password)

        if (!checkProfessionalPassword) {
            throw new Error('Email ou senha inválido.')
        }

        const token = generateToken(professional)

        return token
    }

}