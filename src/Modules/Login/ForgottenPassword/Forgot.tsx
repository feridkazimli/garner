import { Box, Typography, CardMedia, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomButton } from "../../../Components/Elements/CustomButton";
import { CustomTextField } from "../../../Components/Elements/CustomTextField";
import { useForm } from "react-hook-form";
import { GlobalStyless } from "../../../Styles/MainStyle"
import { IFormInputs } from "../../../types";
import CustomForms from "../../../Components/Blocks/CustomContainer";

export const FormSide = () => {
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
    <Stack spacing={1} direction="column" sx={{
      maxWidth: {
        xs: '400px',
        md: '100%'
      }
    }}>
      <Typography
        component="p"
        fontSize='13px'
        textAlign='start'
      >
        To reset your password, please enter the email address of your
        Todoist account.
      </Typography>
      <Box mt={1} onSubmit={handleSubmit(onSubmit)} component="form">
        <CustomTextField
          type="email"
          name="email"
          label="Email Address"
          autoComplete="email"
          placeholder="Enter your email..."
          register={register}
        />
        <CustomButton text={"Reset my Password"} />
        <Box component="hr" sx={GlobalStyless.hrStyle} />
        <Box mt='20px'>
          <Typography fontSize='15px'>
            <Link to="/signin" className="link-color">Go to login</Link>
          </Typography>
        </Box>
      </Box>
    </Stack>
  )
}

export const ImageSide = () => {
  return (
    <Box width='100%' ml='40px'>
      <CardMedia
        component="img"
        image="/assets/images/forgetpass.png"
      ></CardMedia>
    </Box>
  )
}

export default function Forgot() {
  return (
    <CustomForms text='Forgot your password?' leftSide={<FormSide />} rightSide={<ImageSide />} />
  );
}
