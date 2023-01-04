import { Box, Grid, Typography, CardMedia, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomButton } from "../../../Components/Elements/CustomButton";
import { CustomTextField } from "../../../Components/Elements/CustomTextField";
import { useForm } from "react-hook-form";
import { GlobalStyless } from "../../../Styles/MainStyle";
import CustomContainer from "../../../Components/Blocks/CustomContainer";
import { forgotPasswordSchema } from "../../../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormInputs } from "../../../types";

type ForgotPasswordInput = Pick<IFormInputs, "email">;

export function FormSide() {
  const { handleSubmit, reset, control } = useForm<ForgotPasswordInput>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(forgotPasswordSchema),
  });
  const onSubmit = (data: ForgotPasswordInput) => {
    console.log(data);
    reset();
  };
  return (
    <Stack
      spacing={1}
      direction="column"
      sx={{
        maxWidth: {
          xs: "400px",
          md: "100%",
        },
      }}
    >
      <Typography component="p" fontSize="13px" textAlign="start">
        To reset your password, please enter the email address of your Todoist
        account.
      </Typography>
      <Box mt={1} onSubmit={handleSubmit(onSubmit)} component="form">
        <CustomTextField
          name="email"
          control={control}
          label="Email"
          type="email"
          placeholder="Enter your email..."
        />
        <CustomButton text={"Reset my Password"} />
      </Box>
      <Box component="hr" sx={GlobalStyless.hrStyle} />
      <Box mt="20px">
        <Typography fontSize="15px">
          <Link to="/signin" className="link-color">
            Go to login
          </Link>
        </Typography>
      </Box>
    </Stack>
  );
}

export const ImageSide = () => {
  return (
    <Box width="100%" ml="40px">
      <CardMedia
        component="img"
        image="/assets/images/forgetpass.png"
      ></CardMedia>
    </Box>
  );
};

export default function Forgot() {
  return (
    <CustomContainer
      text="Forgot your password?"
      leftSide={<FormSide />}
      rightSide={<ImageSide />}
    />
  );
}
