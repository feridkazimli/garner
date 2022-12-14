import Home from "../components/Home/Home";
import Forgot from "../components/Login/ForgottenPassword/Forgot";
import { Login } from "../components/Login/Login";
import { Register } from "../components/Register/Register";

export default [
    {
        component:Home,
        path:"/"
        
    },
    {
        component:Login,
        path:"/signin"
    },
    {
        component:Register,
        path:"/signup"
    },
    {
        component:Forgot,
        path:"/signin/forgotpass"
    },
]