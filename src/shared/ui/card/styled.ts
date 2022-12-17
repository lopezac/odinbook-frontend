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
`;
