import styled from "styled-components";

export const AddPhotoDiv = styled.div`
  position: relative;
  border-top: 1px solid ${(props) => props.theme.color.gray};
  padding: 7px 0 5px 0;
  cursor: pointer;

  input {
    position: absolute;
    width: 80px;
    opacity: 0;
    top: -10px;
    left: -3px;
  }
`;
