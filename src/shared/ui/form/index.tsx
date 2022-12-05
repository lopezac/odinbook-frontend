import { FormHTMLAttributes, FC, ReactNode } from "react";
import { StyledForm, StyledFormRow } from "./styles.module";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export const Form: FC<FormProps> = ({ children, onSubmit }: FormProps) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export const FormRow = ({ children }: { children: ReactNode }) => {
  return <StyledFormRow>{children}</StyledFormRow>;
};
