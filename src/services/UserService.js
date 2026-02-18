import User from '../models/User.js'
import Schedule from '../models/Schedule.js'
import Professional from '../models/Professional.js'
import Service from '../models/Service.js'
import bcrypt from 'bcrypt'


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

export const getAvailableTimes = async (date, professionalName) => {

    const workhours = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00']

    const professional = await Professional.findOne({name: professionalName})

    if (!professional) {
        throw new Error('Profissional não encontrado.')
    }


    const appointments = await Schedule.find({
        date: date,
        professional: professional._id,
        status: 'scheduled'
    })

    const busyTimes = appointments.map(scheduled =>  scheduled.time)

    const availableTimes = workhours.filter(hour => !busyTimes.includes(hour))

    return availableTimes
}

export const schedule = async (appointmentDatas) => {

     const professional = await Professional.findOne({name: appointmentDatas.professional})
     const service = await Service.findOne({name: appointmentDatas.service})

     if (!professional) {
        throw new Error('Profissional não encontrado.')
     }


     if (!service) {
        throw new Error('Serviço não encontrado.')
     }

    const appointments = await Schedule.find({
        date: appointmentDatas.date,
        professional: professional,
        status: 'scheduled'
    })

    const busyTimes = appointments.map(scheduledTime => scheduledTime.time)
    const busyDates = appointments.map(scheduledDate => scheduledDate.date )

    if (busyTimes.includes(appointmentDatas.time) && busyDates.includes(appointmentDatas.date)) {
        throw new Error('Horário indisponível')
    }

    const newAppointment = new Schedule({
        user: appointmentDatas.user,
        professional: professional,
        service: service,
        date: appointmentDatas.date,
        time: appointmentDatas.time
    })

    await newAppointment.save()

}