import {lazy } from "react";
import * as alltype from "../types/index";

const MainRouter:alltype.RouteType[] = [
    {
        component: lazy(() => import('../Modules/Home/Home')),
        path: '/'
    },
    {
        component: lazy(() => import('../Modules/notfound/PageNotFound')),
        path: '*'
    }
];

export default MainRouter;