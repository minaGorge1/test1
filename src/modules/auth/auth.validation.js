import joi from "joi"
import { generalFields } from "../../middleware/validation.js"

export const signUpSchema =  joi.object({
        userName: joi.string().max(20).required().alphanum(),
        phone: joi.string().required(),
        email: generalFields.email,
        password: joi.string().required(),
        cPassword: joi.string().required().valid(joi.ref('password'))
    }).required()



export const logInSchema = joi.object({
        email: generalFields.email,
        password: joi.string().required(),
    }).required()

    export const forGotPassword = joi.object({
        email: generalFields.email
    }).required()


export const GotNewPass =  joi.object({
        newPassword: generalFields.password.invalid(joi.ref("oldPassword")),
        cPassword: generalFields.cPassword.valid(joi.ref("newPassword"))
    }).required()
