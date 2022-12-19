import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { GlobalStyless } from "../../Styles/MainStyle";
import { CardMedia, Typography } from "@mui/material";
import { linkTypes } from '../../types'

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
      {linkArray.map((link, key) => (
        <Link
          href={`${link.name}`}
          display='flex'
          alignItems='center'
          justifyContent='center'
          mt='12px'
          p='1.5rem'
          border='1px solid rgb(238,238,238)'
          borderRadius='8px'
          height='2.7rem'
          color='#000'
          sx={GlobalStyless.customLinkStyle}
          key={key}
        >
          <Box component="span" mr=".3rem">
            <CardMedia
              component="img"
              image={`/assets/icons/${link.iconName}`}
              alt={link.name}
            />
          </Box>
          <Typography variant='h5' fontSize='15px' fontWeight='900'> Continue with {`${link.name}`}</Typography>
        </Link>
      ))}
    </>
  );
};
