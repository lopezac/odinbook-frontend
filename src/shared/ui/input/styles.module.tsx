import styled from "styled-components";

export const StyledInput = styled.input<{ error?: boolean }>`
  background-color: ${props => props.theme.color.darkWhite};
  padding: 10px;
  border-radius: 20px;
  border: none;
  font-size: 0.95rem;
  flex: 1;
  
  :focus {
    outline: none;
  }

  ${(props) => props.error && `
    border: 2px solid red;
  `}
`;
