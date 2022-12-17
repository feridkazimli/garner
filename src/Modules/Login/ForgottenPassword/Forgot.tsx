import * as React from "react";
import {  Box, Grid, Typography, Container, CardMedia } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {  NavLink } from "react-router-dom";
import CustomButton from "../../../Components/Elements/CustomButton";
import { CustomTextField } from "../../../Components/Elements/CustomTextField";
import { useForm } from "react-hook-form";
import {GlobalStyless} from "../../../Styles/MainStyle"
const theme = createTheme();
interface IFormInputs {
  email: string;
  password: string;
}
theme.typography.h1 = {
  fontSize: "1.8rem",
  "@media (min-width: 600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.2rem",
  },
};
export default function Forgot() {
  const {
    register,
    handleSubmit,
    reset,
  // formState: { errors },
  } = useForm<IFormInputs>({
    // resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    reset();
  };
  return (
    <ThemeProvider theme={theme}>
    <Container component="main">
      <Box component={Grid} sx={GlobalStyless.mainContainer}>
        <Box component={Grid} sx={GlobalStyless.formContainer}>
          <Typography component="h1" variant="h1" fontWeight={700}>
          Forgot your password
          </Typography>
          <Typography
              component="p"
              sx={{mt:"10px"}}
            >
              To reset your password, please enter the email address of your
           Todoist account.
            </Typography> 
          <Box mt={1} onSubmit={handleSubmit(onSubmit)} component="form">
            <CustomTextField
              id="email"
              type="email"
              name="email"
              label="Email Address"
              autoComplete="email"
              placeholder="Enter your email..."
              register={register}
            />  
           <CustomButton text={"Reset my Password"} />
            <NavLink to="/signin">Go to login</NavLink>
          </Box>
        </Box>
        <Box sx={GlobalStyless.imageContainer} component={Grid}>
          <CardMedia sx={GlobalStyless.customfotostyle}
            component="img"
            image="/assets/images/forgetpass.png"
          ></CardMedia>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>  
  );
}
