 import * as yup from "yup"
 export const RegSchema = yup.object({
    userName:yup.string().required().min(3),
    fullName:yup.string().required().min(5),
    email:yup.string().required().email(),
    phoneNumber:yup.string().required(),
    password:yup.string().required()
  })