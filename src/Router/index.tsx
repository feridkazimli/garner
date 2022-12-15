import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";

const routes = [...AuthRouter, ...MainRouter];

export default routes;