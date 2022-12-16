import styled from "styled-components";

export const IconDiv = styled.div`
  position: relative;

  button {
  }

  input {
    position: absolute;
    width: 38px; // only temporary setting width
    z-index: 5;
    top: 8px;
    left: 0;
    opacity: 0;
  }
`;
