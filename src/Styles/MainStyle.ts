import { SxProps, Theme } from '@mui/material'

export const GlobalStyless: Record<string, SxProps<Theme> | undefined> = {

  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 60px)"
  },
  NotfoundStyle: {
    display: {
      sm: "flex",
      xs: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100vh - 60px)"
    }
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
    textDecoration: "none",
    transition: 'all .4s',
    '&:hover': {
      backgroundColor: 'rgb(0,0,0,0.12)'
    },
  },
  forlogo: {
    width: "127px",
    paddingTop: "20px"
  },
  customfotostyle: {
    width: "80%",
    marginLeft: "40px"
  },
  forErrorimage: {
    width: "480px",
    height: "240px",
    objectFit: "cover",
    marginBottom: "20px"
  },
  hrStyle: {
    my: "10px",
    color: "#fff"
  },
  pLinkStyle: {
    color: "rgba(0,0,0,0.88)",
    fontSize: "13px",
    lineHeight: 1.2,
  }
}