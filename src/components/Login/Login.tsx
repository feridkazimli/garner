import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { routeArray } from "./linkroute";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: "1.8rem",
  "@media (min-width: 600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.2rem",
  },
};

export default function SignIn() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <Box
          component={Grid}
          sx={{
            display: {
              sm: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Box
            component={Grid}
            sx={{
              marginTop: 8,
              maxWidth: {
                xs: "80%",
                sm: "75%",
              },
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              sx={{
                textAlign: "left",
              }}
            >
              Log in
            </Typography>

            {routeArray.map((route) => (
              <Link
                href={`${route.name}`}
                variant="h6"
                sx={{
                  fontSize: "1.3rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  marginTop: "1.2rem",
                  border: "1px solid rgb(238,238,238)",
                  height: "2.7rem",
                  borderRadius: "5px",
                  color: "rgb(0,0,0)",
                }}
              >
                <Box component="span" mr=".5rem">
                  <img src={`/icons/${route.iconName}`} alt="Google Icon" />
                </Box>
                Continue with {`${route.name}`}
              </Link>
            ))}

            <Box component="form" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                placeholder="Enter your email..."
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                placeholder="Enter your password..."
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 3,
                  mb: 2,
                  height: "48px",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#f2f2f2",
                  // copied from https://stackoverflow.com/questions/65297617/how-to-make-an-elements-background-color-a-little-darker-using-css
                  background:
                    "linear-gradient(#0000, rgb(0 0 0/20%)) top/100% 800%",
                  backgroundColor: "rgb(219, 76, 63)",
                  transition: "0.5s",
                  "&: hover": {
                    backgroundColor: "rgb(219, 76, 63)",
                    backgroundPosition: "bottom",
                  },
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                alignItems: "center",
              },
              maxWidth: {
                md: "70%",
                lg: "75%",
              },
              marginLeft: {
                md: "1.5rem",
              },
            }}
            component={Grid}
          >
            <img
              src="/images/signInImage.png"
              alt="Sign in"
              style={{ maxWidth: "100%" }}
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
