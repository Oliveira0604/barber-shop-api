import Professional from '../models/Professional.js'
import { validateUserDatas } from '../helpers/validations.js'
import { formatName, formatCellphoneNumber } from '../helpers/formatting.js'

export const addProfessional = async (datas) => {

    validateUserDatas(datas)

    const professionalExist = await Professional.findOne({ email: datas.email })

    if (professionalExist) {
        throw new Error('Esse professional já está cadastrado.')
    }

    const newProfessional = new Professional({

    })
}