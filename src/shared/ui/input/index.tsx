import { InputHTMLAttributes } from "react";
import { StyledInput, StyledInputSquare } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = ({ error, ...props }: InputProps) => {
  return <StyledInput error={error} {...props} />;
};

export const InputSquare = ({ error, ...props }: InputProps) => {
  return <StyledInputSquare error={error} {...props} />;
};
