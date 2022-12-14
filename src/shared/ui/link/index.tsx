import { LinkProps } from "react-router-dom";
import { StyledLink } from "./styles";

export const Link = ({ children, to }: LinkProps) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
