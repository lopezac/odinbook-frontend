import { FC, LabelHTMLAttributes } from "react";
import { StyledLabel } from "./styles.module";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: FC<LabelProps> = ({ children, ...rest }: LabelProps) => {
  return <StyledLabel {...rest}>{children}</StyledLabel>;
};
