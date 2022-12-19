import { FormHTMLAttributes, FC } from "react";
import { StyledForm } from "./styles";
export { FormRow } from "./styles";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export const Form: FC<FormProps> = ({ children, onSubmit }: FormProps) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};
