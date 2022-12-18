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
  z-index: 10;
  box-shadow: 0 2px 3px 0 ${(props) => props.theme.color.darkerWhite};
`;

export const ContentHeaderDiv = styled.div`
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  justify-content: center;
`;

export const StyledContent = styled.div`
  padding-top: 24px;
  max-width: 500px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const ChatWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "sidebar main";
  flex: 1;
  background-color: ${(props) => props.theme.color.white};
`;

export const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.color.darkWhite};
`;
