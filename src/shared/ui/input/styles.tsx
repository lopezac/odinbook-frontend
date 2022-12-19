import styled from "styled-components";

export const StyledInput = styled.input<{ error?: boolean }>`
  background-color: ${(props) => props.theme.color.darkWhite};
  border: none;
  padding: 10px;
  border-radius: 20px;
  font-size: 0.95rem;
  flex: 1;

  :focus {
    outline: none;
  }

  ${(props) =>
    props.error &&
    `
    border: 2px solid red;
  `}
`;

export const StyledInputSquare = styled(StyledInput)`
  background-color: ${(props) => props.theme.color.darkWhite};
  border: 1px solid ${(props) => props.theme.color.gray};
  border-radius: 5px;
`;
