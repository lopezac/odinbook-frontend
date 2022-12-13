import type { MessageType, UserData } from "shared/api";
import { Para, AvatarImg } from "shared/ui";

type MessageRowProps = { data: MessageType, user: UserData };

export const MessageRow = ({ data, user }: MessageRowProps) => {
  return (
    <div style={{ display: "flex" }}>
      <AvatarImg size="medium" photoUrl={user.picture} />
      <Para>{data.text}</Para>
    </div>
  );
};
