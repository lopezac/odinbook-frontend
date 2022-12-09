import { UserData } from "shared/api";
import { AvatarImg, Button, H1, Link } from "shared/ui";
import { FlexRowDiv, FlexRowUl } from "./styles.module";

type ProfileHeaderProps = { user: UserData };

export const UserProfileHeader = ({ user }: ProfileHeaderProps) => {
  return (
    <div>
      <FlexRowDiv>
        <FlexRowDiv>
          <div>
            <AvatarImg photoUrl={user.picture} size="large" />
          </div>
          <H1>
            {user.firstName} {user.lastName}
          </H1>
        </FlexRowDiv>
        <div>
          <Button>Add Friend</Button>
          <Button>Message</Button>
        </div>
      </FlexRowDiv>

      <div>
        <FlexRowUl>
          <li>
            <Link to={`/users/${user._id}`}>Posts</Link>
          </li>
          <li>
            <Link to={`/users/${user._id}/about`}>About</Link>
          </li>
          <li>
            <Link to={`/users/${user._id}/friends`}>Friends</Link>
          </li>
          <li>
            <Link to={`/users/${user._id}/photos`}>Photos</Link>
          </li>
          <li>
            <Link to={`/users/${user._id}/videos`}>Videos</Link>
          </li>
        </FlexRowUl>
      </div>
    </div>
  );
};
