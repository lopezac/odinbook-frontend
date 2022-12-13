import { UserData } from "shared/api";
import { AvatarImg, Link, Para } from "shared/ui";

export const ChatRow = ({ data }: { data: UserData }) => {
  return (
    <div>
      <Link to={`/chats/${data._id}`}>
        <AvatarImg size="medium" photoUrl={data.picture} />
        <Para>
          {data.firstName} {data.lastName}
        </Para>
      </Link>
    </div>
  );
};
