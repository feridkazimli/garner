import { Container, Box } from "@mui/material";
import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Register from "./components/Register/Register";

function App() {
  return (
    <Box width="100vw" minHeight={"max-content"} p={"32px"}>
      <Container
        maxWidth="md"
        sx={{ height: "100vh" }}
        className="app"
        disableGutters
      >
        <Navbar />
        <Register />
      </Container>
    </Box>
  );
}

export default App;
