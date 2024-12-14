import bcrypt from 'bcryptjs';
import {generateTokenAndSetCookie} from "../lib/utils/generateToken.js";
import User from "../models/user.model.js";
import Athlete from "../models/athlete.model.js";
import Trainer from "../models/trainer.model.js";


export const signup = async (req, res) => {
    try {
        const {fullName, username, email, password, userType} = req.body;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({error: "Invalid email format"});
        }

        const existingUser = await User.findOne({username})
        if (existingUser) {
            return res.status(400).json({error: "Username is already taken"})
        }
        const existingEmail = await User.findOne({email})
        if (existingEmail) {
            return res.status(400).json({error: "Email already registered"})
        }

        if (password.length < 6) {
            return res.status(400).json({error: "Password must be at least 6 characters long "});
        }

        // Hash

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const newUser = new User({
            fullName,
            username,
            email,
            password: hashedPassword
        })

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                email: newUser.email,
                profileImg: newUser.profileImg,
                password: newUser.password
            })
        }
        else{
            console.log(error)
            res.status(400).json({error: "Invalid user data"})
        }

        /*if (userType === "athlete") {
            const {age, gender} = req.body;
            const newAthlete = new Athlete({
                fullName,
                username,
                email,
                age,
                gender,
                password: hashedPassword
            })

            if (newAthlete) {
                generateTokenAndSetCookie(newAthlete._id, res)
                await newAthlete.save();
                res.status(201).json({
                    _id: newAthlete._id,
                    fullName: newAthlete.fullName,
                    username: newAthlete.username,
                    email: newAthlete.email,
                    profileImg: newAthlete.profileImg,
                    age: newAthlete.age,
                    gender: newAthlete.gender
                })
            } else {
                res.status(400).json({error: "Invalid user data"})
            }
        }

        if (userType === "trainer") {
            const {dan} = req.body;
            const newTrainer = new Trainer({
                fullName,
                username,
                email,
                dan,
                password: hashedPassword
            })

            if (newTrainer) {
                generateTokenAndSetCookie(newTrainer._id, res)
                await newTrainer.save();
                res.status(201).json({
                    _id: newTrainer._id,
                    fullName: newTrainer.fullName,
                    username: newTrainer.username,
                    email: newTrainer.email,
                    profileImg: newTrainer.profileImg,
                    dan: newTrainer.dan
                }) */
    }catch (err) {
        res.status(500).json({ error: "Internal server error "})
        console.log( err )
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if (!user || !isPasswordCorrect){
            return res.status(400).json({ error: "Invalid username or password"})
        }

        generateTokenAndSetCookie(user._id, res)

        res.status(200).json({
            _id: user._id,
            fullName: user.fullname,
            username: user.username,
            email: user.email,
            profileImg: user.profileImg
        })
    }catch (err) {
        res.status(500).json({ error: "Internal server error "})
        console.log( err )    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({ message: "Logged out successfully" })
    } catch (err){
        res.status(500).json({ error: "Internal server error"})
    }
}

export const getMe = async (req, res) => {
    try {

        const user = await User.findById(req.user._id).select("-password");
        console.log(req.user._id)

        res.status(200).json(user);
    } catch (error){
        console.log("Error in getMe controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
}