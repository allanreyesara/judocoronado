import mongoose, { mongo } from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    text:{
        type: String,
    },
    img:{
        type: String,
    },

}, {timestamps: true})

const Post = mongoose.model("Post", postSchema);

export default Post;