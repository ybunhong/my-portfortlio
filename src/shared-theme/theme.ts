import { createTheme } from "@mui/material/styles";
import buttonTheme from "./components/button";
import typographyTheme from "./components/typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#20B15A",
    },
    secondary: {
      main: "#7C3AED",
    },
  },
  ...buttonTheme,
  typography: {
    ...typographyTheme.typography,
  },
});

export default theme;
