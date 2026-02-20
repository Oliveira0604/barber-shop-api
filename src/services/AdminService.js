import Professional from '../models/Professional.js'
import Schedule from '../models/Schedule.js'
import bcrypt from 'bcrypt'
import Service from '../models/Service.js'
import { validateAdminDatas, validateServiceDatas } from '../helpers/validations.js'
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

export const addService = async (datas) => {

    validateServiceDatas(datas)

    const serviceExist = await Service.findOne({ name: datas.name })

    if (serviceExist) {

        throw new Error('Esse serviço já está cadastrado.')
    }

    const newService = new Service({
        name: datas.name,
        price: datas.price,
        duration: datas.duration
    })

    await newService.save()
}

export const appointments = async (date) => {

    const serachDate = new Date(date)

    const appointments = await Schedule.find({
        date: serachDate
    }).populate('professional')


    if (appointments.length === 0) {
        throw new Error(`Nenhum agendamento econtrado para o dia ${date}`)
    }

    const list = appointments.map(data => {
        return {
            date: data.date,
            professional: data.professional.name,
            time: data.time
        }

    })

    return list

}