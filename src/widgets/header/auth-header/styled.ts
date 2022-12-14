import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const SmallHeader = styled(Header)`
  gap: 5px;

  svg {
    font-size: 2.3rem;
    background-color: ${(props) => props.theme.color.gray};
    padding: 7px;
    border-radius: 30px;
    // width: 40px;
    // height: 40px;
  }

  svg:hover {
    background-color: ${(props) => props.theme.color.darkGray};
  }
`;

export const MainHeader = styled(Header)`
  svg {
    font-size: 3.5rem;
    padding: 0 10px;
  }

  svg:hover,
  svg:focus {
    color: ${(props) => props.theme.color.blue};
    border-bottom: 4px solid ${(props) => props.theme.color.blue};
  }

  svg:hover {
    background-color: ${(props) => props.theme.color.darkGray};
  }
`;
