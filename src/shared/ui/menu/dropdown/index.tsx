import styled from "styled-components";

export const DropdownMenu = styled.div`
  width: 300px;
  position: absolute;
  left: -255px;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0px 0px 3px 1px #71717a;
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
`;

export const DropdownRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  width: 100%;
  padding: 0 10px;
  border-radius: 5px;
  
  :hover, 
  :focus {
    background-color: ${props => props.theme.color.darkerWhite};
  }

`;
