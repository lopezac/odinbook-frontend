import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
`;

export const NotificationDiv = styled(FlexDiv)`
  align-items: center;
  gap: 5px;
`;

export const MainTextDiv = styled(FlexDiv)`
  flex-direction: column;
  justify-content: center;
  flex: 1;

  p {
    margin: 4px 0;
  }
`;

export const ActionsDiv = styled(FlexDiv)`
  flex-direction: column;
  gap: 5px;

  p {
    margin: 5px 0;
  }
`;
