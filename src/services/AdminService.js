import Professional from '../models/Professional.js'
import bcrypt from 'bcrypt'
import Service from '../models/Service.js'
import { validateUserDatas, validateAdminDatas } from '../helpers/validations.js'
import { formatName, formatCellphoneNumber } from '../helpers/formatting.js'

export const addProfessional = async (datas) => {

    validateAdminDatas(datas)

    const professionalExist = await Professional.findOne({ email: datas.email })

    if (professionalExist) {
        throw new Error('Esse professional já está cadastrado.')
    }

    const formattedName = formatName(datas.name)
    const formattedCellphone = formatCellphoneNumber(datas.cellphone)

    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(datas.password, salt)

    let isAdmin = false

    if (datas.isAdmin === "s") {
        isAdmin = true
    }

    const newProfessional = new Professional({
        name: formattedName,
        email: datas.email,
        cellphone: datas.cellphone,
        password: hashedPassword,
        specialty: datas.specialty,
        isAdmin
    })

    await newProfessional.save()
}