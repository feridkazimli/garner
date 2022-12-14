import { lazy } from "react";
export interface RouteType {
    path: string
    showMenu?: boolean
    component: React.LazyExoticComponent<() => JSX.Element>
}

const AuthRouter: RouteType[] = [
    {
        component: lazy(() => import('../Modules/Login/Login')),
        path: '/signin'
    },
    {
        component: lazy(() => import('../Modules/Register/Register')),
        path: '/signup'
    },
    {
        component: lazy(() => import('../Modules/Login/ForgottenPassword/Forgot')),
        path: '/signin/forgotpass'
    }
];

export default AuthRouter