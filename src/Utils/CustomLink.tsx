import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { GlobalStyles } from "../Modules/Login/Styles";
type Routes = {
  name: string;
  iconName: string;
};

const routeArray: Routes[] = [
  {
    name: "Google",
    iconName: "google.svg",
  },
  {
    name: "Facebook",
    iconName: "facebook.svg",
  },
  {
    name: "Apple",
    iconName: "apple.svg",
  },
];

export const CustomLink = () => {
  return (
    <>
      {routeArray.map((route) => (
        <Link
          href={`${route.name}`}
          variant="h6"
          sx={GlobalStyles.customLinkStyle}
        >
          <Box component="span" mr=".5rem">
            <img src={`assets/icons/${route.iconName}`} alt={route.iconName} />
          </Box>
          Continue with {`${route.name}`}
        </Link>
      ))}
    </>
  );
};
