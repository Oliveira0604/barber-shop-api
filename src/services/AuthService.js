import User from '../models/User.js'
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

    if (!user) {
        throw new Error('Não usuário encontrado.')
    }

    const checkPassword = bcrypt.compare(userDatas.password, user.password)

    if (!checkPassword) {
        throw new Error('Email ou senha inválido.')
    }

    const token = generateToken(user)

    return token
}