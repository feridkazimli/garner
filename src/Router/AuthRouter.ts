import { lazy } from "react";
import * as alltype from "../types/index"
const AuthRouter: alltype.RouteType[] = [
    {
        component: lazy(() => import('../Modules/Login/Login')),
        path: '/signin'
    },
    {
        component: lazy(() => import('../Modules/Register/Signup')),
        path: '/signup'
    },
    {
        component: lazy(() => import('../Modules/Login/ForgottenPassword/Forgot')),
        path: '/signin/forgotpass'
    }
];

export default AuthRouter;