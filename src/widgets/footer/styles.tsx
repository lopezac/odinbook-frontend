import styled from "styled-components";

export const FooterRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  a: hover {
    color: ${(props) => props.theme.color.blue};
  }
`;
