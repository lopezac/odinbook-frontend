import { FC, InputHTMLAttributes } from "react";
import { StyledInput } from "./styles.module";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ ...props }) => {
  return <StyledInput {...props} />;
};
