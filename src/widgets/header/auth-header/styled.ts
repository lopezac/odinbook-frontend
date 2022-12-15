import styled from "styled-components";
import { DropdownRow } from "shared/ui";

export const SmallHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const MenuIconRow = styled(DropdownRow)`
  > svg,
  a > svg {
    margin-left: auto;
  }
`;
