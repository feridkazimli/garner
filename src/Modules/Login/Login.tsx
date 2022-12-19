import { Link } from "react-router-dom";
import { CustomLink } from "../../Components/Elements/CustomLink";
import { CustomTextField } from "../../Components/Elements/CustomTextField";
import { CustomButton } from "../../Components/Elements/CustomButton";
import { useForm } from "react-hook-form";
import { GlobalStyless } from "../../Styles/MainStyle";
import { CardMedia, Box, Typography, Stack } from "@mui/material";
import CustomContainer from "../../Components/Blocks/CustomContainer";
import { IFormInputs } from "../../types";

export const FormSide = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm<IFormInputs>({
  });
  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <CustomLink />
      <Stack spacing={2} direction="column" sx={{
        maxWidth: {
          xs: '400px',
          md: '100%'
        }
      }}>
        <Box onSubmit={handleSubmit(onSubmit)} component="form">
          <CustomTextField
            type="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            placeholder="Enter your email..."
            register={register}
          />
          <CustomTextField
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Enter your password..."
            register={register}
          />

          <CustomButton text={"Login in"} />
          <Box mt="10px" textAlign='start'>
            <Link to="/signin/forgotpass" className="link-color">
              <Typography fontSize='14px'> Forgot password?</Typography>
            </Link>
            <Typography
              component="p"
              sx={GlobalStyless.pLinkStyle}
              mt='10px'
            >
              By continuing with Google, Apple, or Email, you agree to
              Todoist’s{" "}
              <Link to="https://doist.com/terms-of-service" className="link-color">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="https://doist.com/privacy" className="link-color">
                Privacy Policy.
              </Link>
            </Typography>
          </Box>
          <Box component="hr" sx={GlobalStyless.hrStyle} />
          <Box mt="10px">
            <Typography
              component="p"
              sx={GlobalStyless.pLinkStyle}
              textAlign='center'
            >
              Don't have an account?{"  "}
              <Link to="/signup" className="link-color">
                Go to Signup
              </Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </>
  )
}

export const ImageSide = () => {
  return (
    <Box width='100%' ml='40px'>
      <CardMedia
        component="img"
        image="/assets/images/signInImage.png"
      ></CardMedia>
    </Box>
  )
}

export default function SignIn() {
  return (
    <CustomContainer text='Login' leftSide={<FormSide />} rightSide={<ImageSide />} />
  );
}