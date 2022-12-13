import type { MessageType } from "shared/api";
import { Para } from "shared/ui";
import { formatDate } from "shared/lib/date";

export const MessageRow = ({ data }: { data: MessageType }) => {
  return (
    <div>
      <Para>{data.text}</Para>
      <Para>{formatDate(data.created_at)}</Para>
    </div>
  );
};
