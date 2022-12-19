import styled from "styled-components";
import { DarkerWhiteCard } from "shared/ui";

export const PaginationList = styled(DarkerWhiteCard)`
  display: flex;
  gap: 5px;
  max-width: min-content;
  margin: 20px auto 0 auto;
  align-items: center;
  padding: 0;
`;

export const PageNumber = styled.li`
  cursor: pointer; 
  padding: 10px;

  :hover,
  :focus {
    background-color: ${(props) => props.theme.color.darkWhite};
  }
`;

export const CurrentPageNumber = styled(PageNumber)`
  background-color: ${(props) => props.theme.color.darkWhite};
`;
