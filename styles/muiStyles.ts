import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#9795f0",
      main: "#fbc8d4",
    },
    secondary: {
      main: "#ffffff"
    },
    info: {
      main: "#9795f0"
    },
    // background: {
    //   paper: "#fff",
    // },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
  },
});

export default theme;
