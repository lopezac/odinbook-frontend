import { Link as RouterLink, LinkProps } from "react-router-dom";

export const Link = ({ children, to }: LinkProps) => {
  return <RouterLink to={to}>{children}</RouterLink>;
};
