import styled from "styled-components";

export const StyledList = styled.ul<{ open: boolean }>`
  opacity: ${(props) => (props.open ? 1 : 0)};
`;
