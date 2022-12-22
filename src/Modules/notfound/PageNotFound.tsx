import {
  Box,
  CardMedia,
  Typography,
} from "@mui/material";
import { GlobalStyless } from "../../Styles/MainStyle";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <>
        <Box sx={GlobalStyless.NotfoundStyle}>
          <CardMedia
            sx={GlobalStyless.forErrorimage}
            component="img"
            image="/assets/images/errorp.jpg"
          ></CardMedia>
          <Typography component="h2" variant="h4" fontWeight={700}>
            Hmmm, that page doesn’t exist.
          </Typography>
          <Typography component="p" sx={{mb:2}}>
            Get back to organizing work and life or visit our{" "}
            <Link to="#" className="link-color">Help Center</Link>.
          </Typography>
          <Typography>
            <Link to="/" className="forlogolink addbgcolorlink">Home</Link>
          </Typography>
        </Box> 
    </>
  );
};
export default PageNotFound;
