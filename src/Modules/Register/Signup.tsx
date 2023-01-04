import CustomContainer from "../../Components/Blocks/CustomContainer";
import { Box, Stack, Typography, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomButton } from "../../Components/Elements/CustomButton";
import { CustomLink } from "../../Components/Elements/CustomLink";
import { CustomTextField } from "../../Components/Elements/CustomTextField";
import { useForm } from "react-hook-form";
import { IFormInputs } from "../../types";
import { schema } from "../../schema";
import { yupResolver } from "@hookform/resolvers/yup";
export const FormSide = () => {
  const { handleSubmit, reset, control } = useForm<IFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <CustomLink />
      <Box component="hr" sx={{ my: "10px", color: "#fff" }} />
      <Stack
        spacing={2}
        direction="column"
        sx={{
          maxWidth: {
            xs: "400px",
            md: "100%",
          },
        }}
      >
        <Box onSubmit={handleSubmit(onSubmit)} component="form">
          <CustomTextField
            name="email"
            control={control}
            label="Email"
            type="email"
            placeholder="Enter your email..."
          />
          <CustomTextField
            name="password"
            control={control}
            label="Password"
            type="password"
            placeholder="Enter your password..."
          />
          <CustomButton text="Sign Up With Email" />
        </Box>

        <Box mt="10px" textAlign="start">
          <Typography
            component="p"
            sx={{
              color: "rgba(0,0,0,0.88)",
              fontSize: "13px",
              lineHeight: 1.2,
            }}
          >
            By continuing with Google, Apple, or Email, you agree to Todoist’s{" "}
            <Link to="#terms" className="link-color">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="#terms" className="link-color">
              Privacy Policy.
            </Link>
          </Typography>
        </Box>
        <Box component="hr" sx={{ my: "10px", color: "#fff" }} />
        <Box mt="10px">
          <Typography
            component="p"
            sx={{
              color: "rgba(0,0,0,0.88)",
              fontSize: "13px",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Already signed up?{" "}
            <Link to="/signin" className="link-color">
              Go to login
            </Link>
          </Typography>
        </Box>
        <Box />
      </Stack>
    </>
  );
};

export const ImageSide = () => {
  return (
    <Box position="relative" width="100%" ml="20px">
      <CardMedia component="img" image="/assets/images/regimg.png"></CardMedia>
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
  );
};

export default function SignUp() {
  return (
    <CustomContainer
      text="Sign up"
      leftSide={<FormSide />}
      rightSide={<ImageSide />}
    />
  );
}
