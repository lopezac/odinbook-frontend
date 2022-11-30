import { InputHTMLAttributes } from "react";
import { StyledInput } from "./styles.module";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = ({ error, ...props }: InputProps) => {
  return <StyledInput error={error} {...props} />;
};
