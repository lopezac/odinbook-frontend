import styled from "styled-components";
import { H1 } from "shared/ui";

export const ChatsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SidebarDiv = styled.div`
  padding: 0 18px;
  border-right: 1px solid ${(props) => props.theme.color.darkWhite};
`;

export const SmallTitle = styled(H1)`
  font-size: 1.5rem;
  padding-left: 10px;
`;
