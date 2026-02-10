import User from '../models/User.js'
import bcrypt from 'bcrypt'
import { validateDatas } from '../helpers/validations.js'
import { formatName, formatCellphoneNumber } from '../helpers/formatting.js'

export const addUser = async (datas) => {

    const userExist = await User.findOne({email: datas.email})

    if (userExist) {
        throw new Error("Esse email já esta cadastrado")
    }

    const datasError = validateDatas(datas)

    if (datasError) {
        throw new Error(datasError)
    }

    const formattedName = formatName(datas.name)
    const formattedCellphoneNumber = formatCellphoneNumber(datas.cellphone)

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