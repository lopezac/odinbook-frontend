import type { MessageType, UserData } from "shared/api";
import { Para, AvatarImg, MessageText } from "shared/ui";
import { MessageCard } from "./styles";

type ReceiverRowProps = { data: MessageType; user: UserData };

export const ReceiverRow = ({ data, user }: ReceiverRowProps) => {
  return (
    <MessageCard>
      <AvatarImg size="small" photoUrl={user.picture} />
      <MessageText>
        <Para>{data.text}</Para>
      </MessageText>
    </MessageCard>
  );
};
