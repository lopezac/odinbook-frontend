import type { MessageType } from "shared/api";
import { Para } from "shared/ui";
import { MessageViewerCard, MessageTextViewer } from "./styles";

type ViewerRowProps = { data: MessageType };

export const ViewerRow = ({ data }: ViewerRowProps) => {
  return (
    <MessageViewerCard>
      <MessageTextViewer>
        <Para>{data.text}</Para>
      </MessageTextViewer>
    </MessageViewerCard>
  );
};
