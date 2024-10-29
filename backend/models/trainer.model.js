import mongoose from "mongoose";
import User from "./user.model.js";

const Trainer = User.discriminator('trainer', new mongoose.Schema({
    dan:{
        type: String
    },
}));

//const Trainer = mongoose.model("Trainer", trainerModel);

export default Trainer;