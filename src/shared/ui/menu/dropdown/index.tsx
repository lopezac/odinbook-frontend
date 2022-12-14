import styled from "styled-components";

export const DropdownMenu = styled.div`
  width: 300px;
  position: absolute;
  top: 48px;
  left: -255px;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0px 0px 3px 1px #71717a;
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
`;
