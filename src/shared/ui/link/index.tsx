import { AnchorHTMLAttributes, ReactNode } from "react";
import { LinkProps } from "react-router-dom";
import { StyledAnchor, StyledLink } from "./styles";

export const Link = ({ children, to }: LinkProps) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export const Anchor = ({
  children,
  href,
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <StyledAnchor href={href} target="_blank">
      {children}
    </StyledAnchor>
  );
};
