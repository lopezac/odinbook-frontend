import styled from "styled-components";

export const StyledLikeCard = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  color: ${(props) => props.theme.color.darkGray};

  svg {
    color: ${(props) => props.theme.color.blue};
  }
`;
