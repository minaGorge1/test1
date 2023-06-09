import mongoose, { Schema, model } from "mongoose";


const userSchema = new Schema({
    profilePic: Object,
    coverPic: [],
    userName: {
        type: String,
        required: [true,"userName is required"],
        min: [2,"minimum length 2 char"],
        max: [20,"max length 20 char"]
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true,"userName is required"],
        unique: [true , "email must be unique value"]
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "offline",
        enum: ["offline", "online", "blocked"]
    },
    confirmEmail: {
        type: Boolean,
        default: true,
    },
    softDelete: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const userModel = mongoose.models.User || model("User", userSchema)
export default userModel