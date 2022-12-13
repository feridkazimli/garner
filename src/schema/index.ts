import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const schema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required('Required'),
    password: yup.string().min(5).required('Required').matches(passwordRules, { message: "Please create a strong password" }),
})