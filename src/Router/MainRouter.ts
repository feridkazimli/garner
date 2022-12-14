import { forwardRef, lazy } from "react";
import { RouteType } from "./AuthRouter";

const MainRouter: RouteType[] = [
    {
        component: lazy(() => import('../Modules/Home/Home')),
        path: '/'
    }
];

export default MainRouter;