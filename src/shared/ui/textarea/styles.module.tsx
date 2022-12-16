import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  background-color: ${(props) => props.theme.color.darkWhite};
  padding: 10px;
  border-radius: 20px;
  border: none;
  font-size: 0.95rem;
  flex: 1;

  :focus {
    outline: none;
  }
`;
