import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  color: { primary: "" },
  font: {
    size: { extraSmall: "", small: "", medium: "", large: "", extraLarge: "" },
    family: "",
  },
  breakpoint: { mobile: "", tablet: "", laptop: "", desktop: "" },
};

export const withTheme = (component: () => ReactNode) => () => {
  return <ThemeProvider theme={theme}>{component()}</ThemeProvider>;
};
