import React, { Suspense } from "react";
import routes from "./Router/index"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteType } from "./Router/AuthRouter";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {
            routes
            .filter(route => !route.showMenu)
            .map((router: RouteType, keys:any) => {
                const { path, component: Component } = router;
                return (
                  <React.Fragment key={keys}>
                    <Route path={path} element={
                      <Suspense fallback={<>Loading...</>}>
                          <Component />
                      </Suspense>
                    } />
                  </React.Fragment>
                )
            })
          }
        </Routes>
      </Router>
    </>
  );
}

export default App;