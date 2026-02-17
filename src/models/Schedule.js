import mongoose from '../db/conn.js'
import { Schema } from 'mongoose'

const Schedules = mongoose.model(
    'Schedule',
    new Schema({
        user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
        professional: {type: Schema.Types.ObjectId, ref: 'Professional', required: true},
        service: {type: Schema.Types.ObjectId, ref: 'Service', required: true},
        date: {type: Date, required: true},
        time: {type: Number, required: true},
        status: {type: String, required: true, enum: {values: ['scheduled', 'cancelled']}, default: 'scheduled'}
    }, {timestamp: true})
)

export default Schedules