import CustomForms from "../../Components/Blocks/CustomForms"
import {
  Box,
  TextField,
  Stack,
  Typography,
  CardMedia
} from "@mui/material";
import CustomButton from "../../Components/Elements/CustomButton";
import { CustomLink } from "../../Components/Elements/CustomLink";

export const FormSide = () => {
  return (
    <>
      <CustomLink />
      <Box component="hr" sx={{ my: "10px", color: "#fff" }} />
      <Stack spacing={2} direction="column" sx={{
        maxWidth: {
          xs: '400px',
          md: '100%'
        }
      }}>
        <TextField label="Email" placeholder="Enter your email..." />
        <TextField
          label="Password"
          placeholder="Enter your password..."
        />
        {/* Button Componenet  */}
        <CustomButton text='Sign Up With Email' />
        <Box mt="10px" textAlign='start'>
          <Typography
            component="p"
            sx={{
              color: "rgba(0,0,0,0.88)",
              fontSize: "13px",
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
              fontSize: "13px",
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
    </>
  )
}

export const ImageSide = () => {
  return (
    <Box position='relative' width='100%' pl='40px'>
      <CardMedia component="img" image="/assets/images/regimg.png" ></CardMedia>
      <Box width='280px' p='24px' position='absolute' top='280px' left='200px' borderRadius='8px' bgcolor='#fff' boxShadow='0 3px 20px rgba(0,0,0,.15);'>
        <Typography>Before Todoist, my to-do lists were scattered all around! Now, everything is in order and in one place.</Typography>
        <Typography component='p' sx={{
          color: 'gray',
          pt: "15px",
          fontSize: '15px'
        }}>– Matt M.</Typography>
      </Box>
    </Box>
  )
}

const SignUp = () => {
  return <CustomForms text='Sign up' leftSide={< FormSide />} rightSide={< ImageSide />} />
}

export default SignUp