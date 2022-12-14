import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

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
          sx={{
            fontSize: "1.3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            marginTop: "1.2rem",
            border: "1px solid rgb(238,238,238)",
            height: "2.7rem",
            borderRadius: "5px",
            color: "rgb(0,0,0)",
          }}
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
