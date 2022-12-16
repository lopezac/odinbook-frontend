import styled from "styled-components";

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
  margin: 5px 0;
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
    width: calc(100% + (20px * 2));
    margin: 0 -20px;
  }
`;
