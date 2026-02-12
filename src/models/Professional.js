import mongoose from '../db/conn.js'
import { Schema } from 'mongoose'

const Professional = mongoose.model(
    'Professional',
    new Schema({
        name: {type: String, required: true},
        email: {type: String, required: true},
        cellphone: {type: String, required: true},
        specialty: {type: String, required: true},
        active: {type: Boolean, default: true},
        isAdmin: {type: Boolean, default: true}
    })
)

export default Professional