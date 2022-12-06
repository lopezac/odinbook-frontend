import { StyledAlert } from "./styled";

export const ErrorFallback = ({ error }: { error: DOMException }) => {
  return (
    <StyledAlert>
      <p>Something went wrong!</p>
      <pre>{error.name}</pre>
      <pre>{error.message}</pre>
    </StyledAlert>
  );
};
