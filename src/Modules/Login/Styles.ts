import { SxProps, Theme } from '@mui/material'

export const GlobalStyles: Record<string, SxProps<Theme> | undefined> = {
  mainBox: {
    display: {
      sm: "flex",
      justifyContent: "center",
      alignItems: "center",
    },


  },
  leftSide: {
    maxWidth: {
      xs: "80%",
      sm: "75%",
    },
    marginTop: 8,
  },
  rightSide: {
    display: {
      xs: "none",
      sm: "none",
      md: "flex",
      alignItems: "center",
    },
    maxWidth: {
      md: "70%",
      lg: "75%",
    },
    marginLeft: {
      md: "1.5rem",
    },
  },
  button: {
    display: "flex",
    alignItems: "center",
    mt: 3,
    mb: 2,
    height: "48px",
    fontSize: "20px",
    fontWeight: 700,
    color: "#f2f2f2",
    // copied from https://stackoverflow.com/questions/65297617/how-to-make-an-elements-background-color-a-little-darker-using-css
    background:
      "linear-gradient(#0000, rgb(0 0 0/20%)) top/100% 800%",
    backgroundColor: "rgb(219, 76, 63)",
    transition: "0.5s",
    "&: hover": {
      backgroundColor: "rgb(219, 76, 63)",
      backgroundPosition: "bottom",
    },
  },
  signInImage: {
    display: {
      xs: "none",
      sm: "none",
      md: "flex",
      alignItems: "center",
    },
    maxWidth: {
      md: "70%",
      lg: "75%",
    },
    marginLeft: {
      md: "1.5rem",
    },
  },
  customLinkStyle: {
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
  }
}