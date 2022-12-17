import {
  Box,
  CardMedia,
  Container,
  createTheme,
  Link,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { GlobalStyless } from "../../Styles/MainStyle";
import { NavLink } from "react-router-dom";
const theme = createTheme();
const PageNotFound = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main">
          <Box sx={GlobalStyless.NotfoundStyle}>
            <CardMedia
              sx={GlobalStyless.forErrorimage}
              component="img"
              image="/assets/images/errorp.jpg"
            ></CardMedia>
            <Typography component="h2" variant="h4" fontWeight={700}>
              Hmmm, that page doesn’t exist.
            </Typography>
            <Typography component="p">
              Get back to organizing work and life or visit our{" "}
              <Link href="#">Help Center</Link>.
            </Typography>
            <NavLink to="/">Home</NavLink>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default PageNotFound;
