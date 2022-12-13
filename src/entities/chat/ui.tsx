import { UserData } from "shared/api";
import { AvatarImg, Link, Para } from "shared/ui";

type ChatRowProps = { data: UserData, chatId: string };

export const ChatRow = ({ data, chatId }: ChatRowProps) => {
  return (
    <div>
      <Link to={`/chats/${chatId}`}>
        <AvatarImg size="medium" photoUrl={data.picture} />
        <Para>
          {data.firstName} {data.lastName}
        </Para>
      </Link>
    </div>
  );
};
