import { TextareaHTMLAttributes } from "react";
import { StyledTextArea } from "./styles.module";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = ({ children, ...props }: TextAreaProps) => {
  return (
    <StyledTextArea {...props} rows={3}>
      {children}
    </StyledTextArea>
  );
};
