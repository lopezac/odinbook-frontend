import styled from "styled-components";
import { Para, SmallPara } from "shared/ui";

const FlexDiv = styled.div`
  display: flex;
`;

export const RowActions = styled(FlexDiv)`
  border-top: 1px solid ${(props) => props.theme.color.darkerWhite};
  border-bottom: 1px solid ${(props) => props.theme.color.darkerWhite};
  display: flex;
  justify-content: space-evenly;
`;

export const RowInfo = styled(FlexDiv)`
  margin-top: 5px;
`;

export const AvatarHeader = styled(FlexDiv)`
  align-items: center;
  gap: 8px;
`;

export const PostHeader = styled(FlexDiv)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostImage = styled.div`
  display: flex;

  img {
    flex: 1;
    width: calc(100% + (10px * 2));
    margin: -10px;
  }
`;

export const BoldPara = styled(Para)`
  font-weight: bold;
  margin: 6px 0;
`;

export const SmallGrayPara = styled(SmallPara)`
  color: ${(props) => props.theme.color.darkGray};
  margin: 6px 0;
`;
