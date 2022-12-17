import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { GlobalStyless } from "../../Styles/MainStyle";
import { CardMedia } from "@mui/material";
type linkTypes = {
  name: string;
  iconName: string;
};

const linkArray: linkTypes[] = [
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
      {linkArray.map((link) => (
        <Link
          href={`${link.name}`}
          variant="h6"
          sx={GlobalStyless.customLinkStyle}
        >
          <Box component="span" mr=".5rem">
            <CardMedia
              component="img"
              image={`/assets/icons/${link.iconName}`}
              alt={link.name}
            ></CardMedia>
          </Box>
          Continue with {`${link.name}`}
        </Link>
      ))}
    </>
  );
};
