import mongoose from '../db/conn.js';
import { Schema } from 'mongoose';

const User = mongoose.model(
    'User',
    new Schema({
        name: {type: String, required: true},
        email: {type: String, requeired: true},
        cellphone: {type: String, required: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, default: false}
    }, {timestamps: true})
)

export default User