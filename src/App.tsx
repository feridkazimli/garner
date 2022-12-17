import React, { Suspense } from "react";
import routes from "./Router/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as alltype from "./types/index"
import Navbar from "./Components/Elements/Navbar";
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          {
            routes
            .filter(route => !route.showMenu)
            .map((router: alltype.RouteType, keys:number) => {
                const { path, component: Component } = router;
                return (
                  <React.Fragment key={keys}>
                    <Route path={path} element={
                      <Suspense fallback={<>Loading...</>}>
                        <Component />
                      </Suspense>
                    }
                  />
                </React.Fragment>
              );
            })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
