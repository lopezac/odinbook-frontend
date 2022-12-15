import styled from "styled-components";

export const ListMenu = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  top: 20px;
  left: -30px;
`;
