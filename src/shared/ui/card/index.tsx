import { StyledAlert } from "./styled";
export * from "./styled";

export const ErrorFallback = ({ error }: { error: any }) => {
  return (
    <StyledAlert>
      <p>Something went wrong!</p>
      <pre>{error.name}</pre>
      <pre>{error.message}</pre>
    </StyledAlert>
  );
};
