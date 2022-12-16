import styled from "styled-components";

export const IconSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.975rem;
`;

export const BlueIconSpan = styled(IconSpan)`
  color: ${(props) => props.theme.color.blue};
`;
