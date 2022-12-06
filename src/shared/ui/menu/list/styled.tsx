import styled from "styled-components";

export const StyledList = styled.div<{ open: boolean }>`
  opacity: ${(props) => (props.open ? 1 : 0)};
`;
