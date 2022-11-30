import styled from "styled-components";

export const StyledInput = styled.input<{ error?: boolean }>`
  background-color: gray;
  ${(props) =>
    props.error &&
    `
    border: 2px solid red;
  `}
`;
