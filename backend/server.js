import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import {v2 as cloudinary} from "cloudinary";
import cookieParser from "cookie-parser";

import connectMongoDB from "./db/connectMongoDB.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

cloudinary.config(
    {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_CLOUD_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    }
)

const app = express()
const PORT = process.env.PORT ;

app.use(express.json({limit: "5mb"})); //parse req.body
app.use(express.urlencoded({ extended: true})) //parse form data(urlencoded)
app.use(cookieParser());

app.use("/api/auth", authRoutes)


if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")))

    app.get("*", (req, res) =>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
    connectMongoDB()
})