import * as yup from 'yup'

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\\^&\\*])(?=.{8,})/;
export const schema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required('Required'),
    password: yup.string().min(5).required('Required').matches(passwordRules, { message: "Please create a strong password" }),
})