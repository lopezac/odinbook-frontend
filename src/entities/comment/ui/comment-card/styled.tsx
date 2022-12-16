import styled from "styled-components";

export const CardDiv = styled.div`
  display: flex;
  gap: 6px;
`;

export const ActionsRow = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const GrayCard = styled.div`
  padding: 5px 10px;
  background-color: ${(props) => props.theme.color.darkWhite};
  flex: 1;
  border-radius: 15px;

  p {
    margin: 2px 0;
  }
`;

export const MainCard = styled.div`
  flex: 1;
`;
