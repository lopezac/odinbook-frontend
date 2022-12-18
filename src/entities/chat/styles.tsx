import styled from "styled-components";
import { DropdownRow } from "shared/ui";

export const StyledChatRow = styled(DropdownRow)`
  display: flex;
  align-items: center;

  :hover,
  :focus {
    background-color: ${(props) => props.theme.color.lightBlue};
    filter: brightness(1);
  }
`;
