import styled from "styled-components";

export const SmallHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const MenuIconRow = styled(SmallHeader)`
  cursor: pointer;
  width: 100%;
  padding: 0 10px;
  border-radius: 5px;
  
  :hover, 
  :focus {
    background-color: ${props => props.theme.color.darkerWhite};
  }

  > svg,
  a > svg {
    margin-left: auto;
  }
`;
