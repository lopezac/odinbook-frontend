import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    black: "#171717",
    white: "#ffffff",
    darkWhite: "#e4e6eb",
    darkerWhite: "#dcdee3",
    gray: "#a1a1aa",
    blue: "#1b74e4",
    lightBlue: "#e6f2fe",
    darkerPrimary: "",
    darkPrimary: "",
    primary: "",
    lightPrimary: "",
    lighterPrimary: "",
    darkerSecondary: "",
    darkSecondary: "",
    secondary: "",
    lightSecondary: "",
    lighterSecondary: "",
  },
  font: {
    size: {
      extraSmall: "0.75rem",
      small: "0.875rem",
      medium: "1rem",
      large: "1.25rem",
      extraLarge: "1.5rem",
    },
    family:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
  breakpoint: {
    mobile: "576px",
    tablet: "768px",
    // laptop: "992px",
    desktop: "1200px",
  },
};

export const withTheme = (component: () => ReactNode) => () => {
  return <ThemeProvider theme={theme}>{component()}</ThemeProvider>;
};

export type ThemeType = {
  color: {
    [key: string]: string;
  };
  font: {
    size: {
      [key: string]: string;
    };
    family: string;
  };
  breakpoint: {
    [key: string]: string;
  };
};
