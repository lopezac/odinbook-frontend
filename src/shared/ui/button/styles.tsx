import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: lightblue;
`;

export const BlueButton = styled.button`
  background-color: ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.white};
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  :hover {
    filter: brightness(0.9);
  }
`;

export const GreenButton = styled(BlueButton)`
  background-color: ${(props) => props.theme.color.lightGreen};
`;

export const RedButton = styled(BlueButton)`
  background-color: ${(props) => props.theme.color.red};
`;

export const GrayButton = styled(BlueButton)`
  background-color: ${(props) => props.theme.color.darkerGray};
`;
