import { ReactNode } from "react";
import {
  StyledMain,
  StyledHeader,
  StyledContent,
  StyledFooter,
  ContentWrapper,
} from "./styles";

export const Main = ({ children }: { children: ReactNode }) => {
  return <StyledMain>{children}</StyledMain>;
};

export const Header = ({ children }: { children: ReactNode }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export const Content = ({ children }: { children: ReactNode }) => {
  return (
    <ContentWrapper>
      <StyledContent>{children}</StyledContent>
    </ContentWrapper>
  );
};

export const Footer = ({ children }: { children: ReactNode }) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export const Layout = {
  Main,
  Content,
  Header,
  Footer,
};
