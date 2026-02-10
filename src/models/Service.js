import mongoose from '../db/conn.js';
import { Schema } from 'mongoose'

const Service = mongoose.model(
    'Service',
    new Schema({
        name: {type: String, required: true},
        price: {type: Number, required: true},
        duration: {type: Number, required: true}
    }, {timestamps: true})
)

export default Service 