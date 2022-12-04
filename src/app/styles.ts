import "modern-normalize";
import { createGlobalStyle } from "styled-components";
import type { ThemeType } from "./providers";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  #root {
    height: 100vh;
  }

  body {
    font-family: ${({ theme }) => theme.font.family};
  }

  ul {
    padding-left: 0;
  }

  li {
    list-style-type: none;
  }
`;
