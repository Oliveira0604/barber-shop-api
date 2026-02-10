import mongoose from 'mongoose'
import 'dotenv/config'

const main = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Conectou ao mongoDB')

    } catch(error) {
        console.log(error)
    }
}

main()

export default mongoose; 