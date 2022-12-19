import React, { Suspense } from "react";
import { Box, Container } from "@mui/material";
import routes from "./Router/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Elements/Navbar";
import Loading from "./Components/Elements/Loading";
import * as alltype from "./types/index";

function App() {
  return (
    <Box minHeight={"max-content"} p={"24px"}>
      <Container
        maxWidth="md"
        sx={{ height: "100vh" }}
        className="app"
        disableGutters
      >
        <Navbar />
        <Router>
          <Routes>
            {routes
              .filter((route) => !route.showMenu)
              .map((router: alltype.RouteType, keys: any) => {
                const { path, component: Component } = router;
                return (
                  <React.Fragment key={keys}>
                    <Route
                      path={path}
                      element={
                        <Suspense fallback={<Loading />}>
                          <Component />
                        </Suspense>
                      }
                    />
                  </React.Fragment>
                );
              })}
          </Routes>
        </Router>
      </Container>
    </Box>
  );
}

export default App;
