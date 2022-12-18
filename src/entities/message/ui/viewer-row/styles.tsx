import { MessageText } from "shared/ui";
import styled from "styled-components";

export const MessageViewerCard = styled.div`
  display: flex;
  justify-content: end;
`;

export const MessageTextViewer = styled(MessageText)`
  background-color: ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.white};
`;
