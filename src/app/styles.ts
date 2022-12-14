import "modern-normalize";
import { createGlobalStyle } from "styled-components";
import type { ThemeType } from "./providers";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
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

  a {
    color: black;
    text-decoration: none;
  }

  svg {
    font-size: 1.5rem;
  }
`;
