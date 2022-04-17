import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#9ccc65",
      light: "#cfff95",
      dark: "#6b9b37",
    },
    secondary: {
      main: "#fff59d",
      light: "#ffffcf",
      dark: "#cbc26d",
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 12,
  },
  shape: { borderRadius: 30 },
});

export default Theme;
