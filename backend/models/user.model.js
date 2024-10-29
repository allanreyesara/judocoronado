import mongoose from "mongoose";

const baseOptions = {
    discriminatorKey: "Type",
    collection: "User"
}
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    fullName:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minLength: 6,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profileImg:{
        type: String,
        default: "",
    }
}, {timestamps: true},
    baseOptions
);

const User = mongoose.model("User", userSchema);

export default User;