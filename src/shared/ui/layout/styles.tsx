import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: ${(props) => props.theme.color.darkWhite};
  // height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StyledHeader = styled.div`
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 56px;
`;

export const StyledContent = styled.div`
  background-color: ${(props) => props.theme.color.white};
  max-width: 500px;
  flex: 1;
  margin: 0 auto;
`;

export const StyledFooter = styled.div`
  background-color: #b9b1b0;
`;
