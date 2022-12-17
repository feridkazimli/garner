import { Box, Grid, Container, CardMedia, TextField } from "@mui/material";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography";

import CustomButton from "../../Components/Elements/CustomButton";
const CustomForms = () => {
  return (
    <Box minHeight={"max-content"} p={"32px"}>
      <Container sx={{ height: "100vh" }} className="app" disableGutters>
        <Grid container pt="2rem" mt="32px" pb="2rem">
          {/* Left Grid  */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: {
                xs: "grid",
                md: "block",
              },
              justifyContent: {
                xs: "center",
                md: "start",
              },
            }}
          >
            <Box py="32px">
              <Typography variant="h4" fontWeight="bold">
                {/* Page Text  */}
                Sign Up
              </Typography>
            </Box>

            <Stack
              spacing={2}
              direction="column"
              maxWidth="350px"
              textAlign="center"
            >
              <Box component="hr" sx={{ my: "10px", color: "#fff" }} />

              <Stack spacing={2} direction="column">
                <TextField label="Email" placeholder="Enter your email..." />
                <TextField
                  label="Password"
                  placeholder="Enter your password..."
                />
                {/* Button Componenet  */}
                <CustomButton text="Sign Up With Email" />

                <Box mt="10px">
                  <Typography
                    component="p"
                    sx={{
                      color: "rgba(0,0,0,0.88)",
                      fontSize: "14px",
                      lineHeight: 1.2,
                    }}
                  >
                    By continuing with Google, Apple, or Email, you agree to
                    Todoist’s{" "}
                    <a href="#terms" className="link-color">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#terms" className="link-color">
                      Privacy Policy.
                    </a>
                  </Typography>
                </Box>

                <Box component="hr" sx={{ my: "10px", color: "#fff" }} />

                <Box mt="10px">
                  <Typography
                    component="p"
                    sx={{
                      color: "rgba(0,0,0,0.88)",
                      fontSize: "14px",
                      lineHeight: 1.2,
                      textAlign: "center",
                    }}
                  >
                    Already signed up?{" "}
                    <a href="#login" className="link-color">
                      Go to login
                    </a>
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Grid  */}
          <Grid
            item
            md={6}
            alignItems="center"
            sx={{
              display: {
                xs: "none",
                md: "grid",
              },
            }}
          >
            <Box position="relative" width="100%">
              <CardMedia
                component="img"
                image="/assets/images/regimg.png"
              ></CardMedia>
              <Box
                width="280px"
                p="24px"
                position="absolute"
                top="280px"
                left="200px"
                borderRadius="8px"
                bgcolor="#fff"
                boxShadow="0 3px 20px rgba(0,0,0,.15);"
              >
                <Typography>
                  Before Todoist, my to-do lists were scattered all around! Now,
                  everything is in order and in one place.
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    color: "gray",
                    pt: "15px",
                    fontSize: "15px",
                  }}
                >
                  – Matt M.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomForms;
