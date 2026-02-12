import jwt from 'jsonwebtoken'
import 'dotenv/config'
export const generateToken = (user) => {

    const token = jwt.sign({
        name: user.name,
        id: user._id,
        isAdmin: user.isAdmin
    }, process.env.OUR_SECRET)

    return token
} 