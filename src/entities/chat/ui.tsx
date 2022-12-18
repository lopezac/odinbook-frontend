import { UserData } from "shared/api";
import { AvatarImg, Link, Para } from "shared/ui";
import { StyledChatRow } from "./styles";

type ChatRowProps = { data: UserData; chatId: string };

export const ChatRow = ({ data, chatId }: ChatRowProps) => {
  return (
    <Link to={`/chats/${chatId}`}>
      <StyledChatRow>
        <AvatarImg size="medium" photoUrl={data.picture} />
        <Para>
          {data.firstName} {data.lastName}
        </Para>
      </StyledChatRow>
    </Link>
  );
};
