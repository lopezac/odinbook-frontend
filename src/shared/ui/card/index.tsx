import styled from "styled-components";
import { StyledAlert } from "./styled";

export const ErrorFallback = ({ error }: { error: any }) => {
  return (
    <StyledAlert>
      <p>Something went wrong!</p>
      <pre>{error.name}</pre>
      <pre>{error.message}</pre>
    </StyledAlert>
  );
};

export const DarkerWhiteCard = styled.div`
  background-color: ${(props) => props.theme.color.white};
  border: 1px solid ${(props) => props.theme.color.darkerWhite};
  border-radius: 10px;
  padding: 10px 20px;
`;
