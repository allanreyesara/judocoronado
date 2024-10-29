import mongoose from "mongoose";
import User from "./user.model.js";

const Athlete = User.discriminator('athlete', new mongoose.Schema({
    rank:{
        type: String,
    },
    results:[
        {tournament: String, position: String}
    ],
    weight:{
        type: String,
    },
    age: {
        type: Number,
    },
    gender:{
        type: String,
        enum: "Masculino" || "Femenino",
    }
}))

//const Athlete = mongoose.model("Athlete", athleteModel)

export default Athlete;