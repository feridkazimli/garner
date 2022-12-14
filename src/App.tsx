import React from "react";
import Routers from "./Router/Router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {Routers.map((router, index) => {
            return (
              <React.Fragment key={index}>
                <Route path={router.path}  element={<router.component />} />
              </React.Fragment>
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
