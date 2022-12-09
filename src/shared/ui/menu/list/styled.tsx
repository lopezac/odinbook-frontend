import styled from "styled-components";

export const StyledList = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
`;
