import styled from "styled-components";

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleIcon = styled(IconDiv)`
  background-color: ${(props) => props.theme.color.darkWhite};
  padding: 10px;
  border-radius: 30px;

  :hover {
    // background-color: ${(props) => props.theme.color.darkerWhite};
    background-color: ${(props) => props.theme.color.lightBlue};
  }

  svg {
    font-size: 1.3rem;

    :hover {
      color: ${(props) => props.theme.color.blue};
    }
  }
`;

export const BigRectangleIcon = styled(IconDiv)`
  padding: 10px 30px;
  border-radius: 5px;

  :hover,
  :focus {
    border-bottom: 4px solid ${(props) => props.theme.color.blue};
    background-color: ${(props) => props.theme.color.darkerWhite};

    svg {
      color: ${(props) => props.theme.color.blue};
    }
  }

  svg {
    font-size: 1.6rem;
  }
`;

export const IconAction = styled(IconDiv)`
  cursor: pointer;
  display: flex;
  gap: 5px;
  flex: 1;
  width: 100%;
  color: ${(props) => props.theme.color.darkGray};
  font-weight: bold;

  :hover {
    background-color: ${(props) => props.theme.color.darkWhite};
  }
`;
