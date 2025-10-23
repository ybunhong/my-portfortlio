import { createTheme } from "@mui/material/styles";
import buttonTheme from "./components/button";
import typographyTheme from "./components/typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#20B15A",
    },
  },
  ...buttonTheme,
  typography: {
    ...typographyTheme.typography,
  },
});

export default theme;
