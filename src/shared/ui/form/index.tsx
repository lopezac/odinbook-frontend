import { ReactNode } from "react";
import StyledForm from "./styles.module";

export const Form = ({ children }: { children: ReactNode }) => {
  return <StyledForm>{children}</StyledForm>;
};
