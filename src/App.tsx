import { Container, Box } from "@mui/material";
import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { Signup, ImageSide } from "./components/Register/Signup";
import CustomForms from "./utils/CustomForms";

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

        {/* CustomForms's Props => 
           leftSide - The component that the our form placed in left side
           rightSide - The component that the image placed in right side
           text - The Header of Page
        */}

        <CustomForms
          leftSide={<Signup />}
          rightSide={<ImageSide />}
          text="Sign Up"
        />
      </Container>
    </Box>
  );
}

export default App;
