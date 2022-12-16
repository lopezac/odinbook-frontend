import styled from "styled-components";

export const Para = styled.p`
  font-size: 0.92rem;
  line-height: 22px;
`;

export const LargePara = styled.p`
  font-size: 1rem;
`;

export const SmallPara = styled.p`
  font-size: 0.875rem;
`;

export const BoldPara = styled(Para)`
  font-weight: bold;
  margin: 6px 0;
`;

export const SmallGrayPara = styled(SmallPara)`
  color: ${(props) => props.theme.color.darkGray};
  margin: 6px 0;
`;
