import styled from "styled-components";

export const DropdownMenu = styled.div`
  width: 300px;
  position: absolute;
  left: -255px;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0 0 3px 3px ${(props) => props.theme.color.darkerWhite};
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
    background-color: ${(props) => props.theme.color.darkerWhite};
  }
`;

export const GrayRow = styled(DropdownRow)`
  background-color: ${(props) => props.theme.color.darkWhite};
  font-weight: bold;
  gap: 7px;
  width: max-content;

  svg {
    font-size: 1.2rem;
  }
`;

export const BlueRow = styled(GrayRow)`
  background-color: ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.white};

  :hover,
  :focus {
    background-color: ${(props) => props.theme.color.blue};
    filter: brightness(0.9);
  }
`;

export const SmallBlueRow = styled(BlueRow)`
  padding: 0 5px;

  svg {
    font-size: 1rem;
  }

  p {
    margin: 8px 0;
  }
`;
