import styled from "styled-components";

export const StyledPostItem = styled.div`
  background-color: ${(props) => props.theme.color.white};
  border: 1px solid ${(props) => props.theme.color.darkerWhite};
  border-radius: 10px;
  padding: 10px 20px 0 20px;
`;
