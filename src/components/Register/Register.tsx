import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  CardMedia,
} from "@mui/material";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";

const Register = () => {
  //For Password Visiblity
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Grid container pt="2rem" mt="32px" pb="2rem">
      {/* Left Grid  */}
      <Grid item xs={12} md={6}>
        <Box py="32px">
          <Typography variant="h4" fontWeight="bold">
            Sign up
          </Typography>
        </Box>

        <Stack
          spacing={2}
          direction="column"
          maxWidth="350px"
          textAlign="center"
        >
          <Box
            p=".7rem"
            borderRadius="0.2rem"
            sx={{ cursor: "pointer", border: "1px solid #EEEEEE" }}
            component="a"
            href="#"
          >
            <Typography variant="body1">Google</Typography>
          </Box>

          <Box
            p=".7rem"
            borderRadius="0.2rem"
            sx={{ cursor: "pointer", border: "1px solid #EEEEEE" }}
            component="a"
            href="#"
          >
            <Typography variant="body1">Facebook</Typography>
          </Box>

          <Box
            p=".7rem"
            borderRadius="0.2rem"
            sx={{ cursor: "pointer", border: "1px solid #EEEEEE" }}
            component="a"
            href="#"
          >
            <Typography variant="body1">Twitter</Typography>
          </Box>

          <Box component="hr" sx={{ my: "10px", color: "#fff" }} />

          <Stack spacing={2} direction="column">
            {/* Email  */}
            <TextField label="Email" placeholder="Enter your email..." />

            {/* Password  */}
            <TextField
              label="Password"
              placeholder="Enter your password..."
              type={isVisible ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      type="button"
                      onClick={() => setIsVisible(!isVisible)}
                    >
                      {isVisible ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                    </Button>
                  </InputAdornment>
                ),
              }}
            />

            <Button variant="contained" color="error" sx={{ p: "12px" }}>
              <Typography variant="h6" fontSize={"16px"} fontWeight="700">
                Sign Up With Email
              </Typography>
            </Button>

            <Box component="p" mt="10px">
              <Typography
                sx={{
                  color: "rgba(0,0,0,0.88)",
                  fontSize: "14px",
                  lineHeight: 1.2,
                }}
              >
                By continuing with Google, Apple, or Email, you agree to
                Todoist’s{" "}
                <a href="#" className="link-color">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="link-color">
                  Privacy Policy.
                </a>
              </Typography>
            </Box>

            <Box component="hr" sx={{ my: "10px", color: "#fff" }} />

            <Box component="p" mt="10px">
              <Typography
                sx={{
                  color: "rgba(0,0,0,0.88)",
                  fontSize: "14px",
                  lineHeight: 1.2,
                  textAlign: "center",
                }}
              >
                Already signed up?{" "}
                <a href="#" className="link-color">
                  Go to login
                </a>
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Grid>

      {/* Right Grid  */}
      <Grid item xs={12} md={6} p="2rem">
        <Grid container alignItems="center" display="flex">
          <Grid item md={6} pr="13px" pb="13px" textAlign="center">
            <CardMedia component="img" image="/img/regimg1.png"></CardMedia>
            <Typography variant="h6" fontWeight="700" mt="2rem">
              30 million+
            </Typography>
            <Typography variant="body2">app dowloads</Typography>
          </Grid>
          <Grid item md={6} pr="13px" pb="13px" textAlign="center">
            <CardMedia component="img" image="/img/regimg2.png"></CardMedia>
            <Typography variant="h6" fontWeight="700" mt="2rem">
              15 years+
            </Typography>
            <Typography variant="body2">in business</Typography>
          </Grid>
          <Grid item md={6} pr="13px" pb="13px" textAlign="center">
            <CardMedia component="img" image="/img/regimg3.png"></CardMedia>
            <Typography variant="h6" fontWeight="700" mt="2rem">
              2 billion+
            </Typography>
            <Typography variant="body2">tasks completed</Typography>
          </Grid>
          <Grid item md={6} pr="13px" pb="13px" textAlign="center">
            <CardMedia component="img" image="/img/regimg4.png"></CardMedia>
            <Typography variant="h6" fontWeight="700" mt="2rem">
              1 million+
            </Typography>
            <Typography variant="body2">pro users</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;
