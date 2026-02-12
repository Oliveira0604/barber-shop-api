import mongoose from '../db/conn.js';
import { Schema } from 'mongoose';

const User = mongoose.model(
    'User',
    new Schema({
        name: {type: String, required: true},
        email: {type: String, requeired: true},
        cellphone: {type: String, required: true},
        password: {type: String, required: true}     
    }, {timestamps: true})
)

export default User