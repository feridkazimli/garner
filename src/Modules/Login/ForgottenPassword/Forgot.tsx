import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
const theme = createTheme();
export default function Forgot() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email")
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          sx={{ boxShadow: "none" }}
          sm={12}
          md={6}
          component={Paper}
          square
        >
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              component="h1"
              align="left"
              variant="h1"
              sx={{ fontSize: "24px", width: "60%", fontWeight: "bold" }}
            >
              Forgot your password
            </Typography>
            <Typography
              component="p"
              align="left"
              sx={{ fontSize: "14px", width: "60%", marginTop: "10px" }}
            >
              To reset your password, please enter the email address of your
              Todoist account.
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                mt: 1,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: "60%",
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#dc4c3e",
                  color: "#fff",
                  padding: "10px",
                }}
              >
                Reset my Password
              </Button>
              <Link to="/signin">Go to login</Link>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          square
          sx={{
            display: {
                xs:"none",
                sm:"none",
                md:"flex"
            },
            height: "100vh",
            boxShadow: "none",
          }}
        >
          <Box
            sx={{
                display: {
                    xs:"none",
                    sm:"none",
                    md:"flex"
                },
              width: "80%",
              height: "100vh",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
      <img
        src="/assets/images/forgetpass.png"
        style={{width:"80%"}}
      />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
