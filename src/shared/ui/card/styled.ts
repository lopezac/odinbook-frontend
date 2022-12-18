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

export const BorderBottomDiv = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.color.darkerWhite};
`;
