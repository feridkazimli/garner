import { SxProps, Theme } from '@mui/material'

export const GlobalStyles: Record<string, SxProps<Theme> | undefined> = {
  mainContainer: {
    display: {
      sm: "flex",
      justifyContent: "center",
      alignItems: "center",
    },


  },
  formContainer: {
    maxWidth: {
      xs: "80%",
      sm: "75%",
    },
    marginTop: 8,
  },
  imageContainer: {
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