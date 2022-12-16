import { ReactNode } from "react";
import {
  StyledMain,
  StyledHeader,
  StyledContent,
  StyledFooter,
  ContentWrapper,
  ContentHeaderDiv,
} from "./styles";

const Main = ({ children }: { children: ReactNode }) => {
  return <StyledMain>{children}</StyledMain>;
};

const Header = ({ children }: { children: ReactNode }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

const ContentHeader = ({ children }: { children: ReactNode }) => {
  return <ContentHeaderDiv>{children}</ContentHeaderDiv>;
};

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <ContentWrapper>
      <StyledContent>{children}</StyledContent>
    </ContentWrapper>
  );
};

const Footer = ({ children }: { children: ReactNode }) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export const Layout = {
  Main,
  Content,
  ContentHeader,
  Header,
  Footer,
};
