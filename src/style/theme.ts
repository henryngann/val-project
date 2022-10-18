import { createTheme } from "@mui/material/styles";

const primaryColors = {
  primary: `#101823`,
  background: `#13212e`,
  light: `#edeff1`,
  accent: `#ab3745`,
  grey: `#777f88`,
};

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      main: primaryColors.primary,
      light: primaryColors.background,
    },
    secondary: {
      main: primaryColors.light,
      light: primaryColors.grey,
    },
    info: {
      main: primaryColors.accent,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: primaryColors.light,
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          color: primaryColors.light,
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {},
        indicator: {
          backgroundColor: primaryColors.accent,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          backgroundColor: primaryColors.accent,
          color: primaryColors.primary,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: primaryColors.light,
        },
      },
    },
  },
});

theme.typography.h1 = {
  fontSize: "5.5rem",
  "@media (max-width:1536px)": {
    fontSize: "4.5rem",
  },
  "@media (max-width:1200px)": {
    fontSize: "4rem",
  },
  "@media (max-width:900px)": {
    fontSize: "3rem",
  },
  "@media (max-width:600px)": {
    fontSize: "2rem",
  },
  "@media (max-width:390px)": {
    fontSize: "1.5rem",
  },
};
theme.typography.h2 = {
  fontWeight: 600,
  fontSize: "5.5rem",
  "@media (max-width:1536px)": {
    fontSize: "4.5rem",
  },
  "@media (max-width:1200px)": {
    fontSize: "4rem",
  },
  "@media (max-width:900px)": {
    fontSize: "3rem",
  },
  "@media (max-width:600px)": {
    fontSize: "2rem",
  },
  "@media (max-width:390px)": {
    fontSize: "1.5rem",
  },
};
theme.typography.h3 = {
  fontSize: `1.563rem`,
  fontWeight: 300,
};
theme.typography.h4 = {
  fontSize: `25px`,
};
theme.typography.subtitle1 = {
  fontSize: "1rem",
  fontWeight: 300,
  "@media (max-width:1536px)": {
    fontSize: "1rem",
  },
  "@media (max-width:1200px)": {
    fontSize: "1rem",
  },
  "@media (max-width:900px)": {
    fontSize: "1rem",
  },
  "@media (max-width:600px)": {
    lineHeight: 1.7,
    fontSize: "0.8rem",
  },
  "@media (max-width:390px)": {
    lineHeight: 1.7,
    fontSize: "0.8rem",
  },
};
theme.typography.subtitle2 = {
  fontSize: `0.875rem`,
  fontWeight: 300,
};
