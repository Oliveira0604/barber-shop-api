import Professional from '../models/Professional.js'
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

    const newProfessional = new Professional({
        name: formattedName,
        email: datas.email,
        cellphone: datas.cellphone,
        specialty: datas.specialty,
    })

    await newProfessional.save()
}