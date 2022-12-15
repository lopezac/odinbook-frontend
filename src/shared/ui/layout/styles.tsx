import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: ${(props) => props.theme.color.darkWhite};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 56px;
`;

export const StyledContent = styled.div`
  // background-color: ${(props) => props.theme.color.white};
  max-width: 500px;
  flex: 1;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.color.darkWhite};
`;
