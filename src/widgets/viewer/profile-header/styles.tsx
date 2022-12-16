import styled from "styled-components";

export const HeaderDiv = styled.div`
  width: 860px;
`;

export const FlexRowDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const ActionsRow = styled.ul`
  display: flex;
  gap: 5px;
  padding-top: 8px;
  border-top: 1px solid ${(props) => props.theme.color.gray};
  font-weight: bold;
  * {
    color: ${(props) => props.theme.color.darkGray};
  }
`;

export const CenterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 90px 0 0 10px;
`;

export const AvatarDiv = styled.div`
  position: relative;

  > div {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
