import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CustomLink } from "../../Components/Elements/CustomLink";
import { CustomTextField } from "../../Components/Elements/CustomTextField";
import { useForm } from "react-hook-form";
import { GlobalStyless } from "../../Styles/MainStyle";
import CustomButton from "../../Components/Elements/CustomButton";
import { CardMedia } from "@mui/material";
const theme = createTheme();
interface IFormInputs {
  email: string;
  password: string;
}

// yup validation
// const schema = yup.object({

// })

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
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
            <Typography component="h1" variant="h1">
              Log in
            </Typography>
            <CustomLink />

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
              <CustomTextField
                label="Password"
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                placeholder="Enter your password..."
                register={register}
              />

              <CustomButton text={"Sign in"} />
            </Box>
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
          <Box sx={GlobalStyless.imageContainer} component={Grid}>
            <CardMedia sx={GlobalStyless.customfotostyle}
              component="img"
              image="/assets/images/signInImage.png"
            ></CardMedia>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
