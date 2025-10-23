import type { Theme } from "@mui/material/styles";

const buttonTheme = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          borderRadius: theme.shape.borderRadius,
          padding: theme.spacing(1, 2),
        }),
        outlined: () => ({
          borderWidth: 2,
        }),
      },
    },
  },
};

export default buttonTheme;
