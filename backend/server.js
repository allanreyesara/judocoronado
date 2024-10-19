import express from 'express'
import dotenv from 'dotenv'
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
    connectMongoDB()
})