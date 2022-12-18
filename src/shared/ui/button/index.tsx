import { ButtonHTMLAttributes, FC } from "react";
import { StyledButton } from "./styles";
export { BlueButton, GreenButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, ...rest }: ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
