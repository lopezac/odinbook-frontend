import styled from "styled-components";

export const StyledAlert = styled.div`
  color: gray;
`;

export const DarkerWhiteCard = styled.div`
  background-color: ${(props) => props.theme.color.white};
  border: 1px solid ${(props) => props.theme.color.darkerWhite};
  border-radius: 10px;
  padding: 10px 20px 15px 20px;
`;

export const WritePostCard = styled(DarkerWhiteCard)`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const WhiteShadowCard = styled(DarkerWhiteCard)`
  box-shadow: 0 0 3px 3px ${(props) => props.theme.color.darkerWhite};
`;

export const MessageText = styled.div`
  background-color: ${(props) => props.theme.color.darkWhite};
  border-radius: 20px;
  padding: 0px 15px;
`;

export const AuthFormCard = styled(WhiteShadowCard)`
  display: flex;
  flex-direction: column;

  h1,
  h2 {
    margin: 9px 0;
  }

  > div {
    border-bottom: 1px solid ${(props) => props.theme.color.darkerWhite};
    padding-bottom: 15px;
  }

  > div:last-child {
    border-bottom: none;
  }
`;

export const RadioCard = styled.div`
  background-color: ${(props) => props.theme.color.darkWhite};
  border: 1px solid ${(props) => props.theme.color.gray};
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: space-between;

  input {
    max-width: 20px;
  }
`;
