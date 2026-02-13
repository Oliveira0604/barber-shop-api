import User from '../models/User.js'
import bcrypt from 'bcrypt'

import { validateUserDatas } from '../helpers/validations.js'
import { formatName, formatCellphoneNumber } from '../helpers/formatting.js'

export const editUser = async (datas) => {

    const user = await User.findOne({ _id: datas.id })

    if (datas.name && datas.name.trim() != "") {

        user.name = formatName(datas.name)
    }

    if (datas.email && datas.email.trim() != "" && !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(datas.email)) {

        user.email = datas.email
    }

    if (datas.cellphone && datas.cellphone.trim() != "") {

        user.cellphone = formatCellphoneNumber(datas.cellphone)
    }

    if (datas.password && datas.confirmPassword !== "" && datas.password === datas.confirmPassword) {

        const salt = await bcrypt.genSalt(12)
        const hashedPassword = await bcrypt.hash(datas.password, salt)

        user.password = hashedPassword

    }

    await user.save()

}