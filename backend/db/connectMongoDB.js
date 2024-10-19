import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo connected: ${conn.connection.host}`)
    }catch (e) {
        console.log(`Error connecting to MongoDB: ${err.message}`)
        process.exit(1)
    }
}

export default connectMongoDB;