import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: #e2e8f0;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled.div`
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const StyledContent = styled.div`
  background-color: #a1a8f0;
  flex: 1;
`;

export const StyledFooter = styled.div`
  background-color: #b9b1b0;
`;
