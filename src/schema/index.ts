import * as yup from 'yup'

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\\^&\\*])(?=.{8,16})/;
export const schema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required('Required'),
    password: yup.string().required('Required').matches(passwordRules, { message: "Password must be 8-16 characters long and contain at least one uppercase one symbol one number character example" }),
})


export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required('Required'),
})