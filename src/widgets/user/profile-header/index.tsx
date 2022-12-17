import { ReactElement } from "react";
import { UserData } from "shared/api";
import { AvatarImg, BigRectangleIcon, H1, Link } from "shared/ui";
import { SendMessage } from "features/message";
import { ActionsRow, CenterRow, FlexRowDiv, HeaderDiv } from "./styles";

type ProfileHeaderProps = { user: UserData, actions?: ReactElement[] };

export const UserProfileHeader = ({ user, actions }: ProfileHeaderProps) => {

  return (
    <HeaderDiv>
      <FlexRowDiv>
        <FlexRowDiv>
          <AvatarImg photoUrl={user.picture} size="large" />
        </FlexRowDiv>

        <CenterRow>
          <H1>
            {user.firstName} {user.lastName}
          </H1>

          <FlexRowDiv>
            <SendMessage user={user} />
            {actions && actions.map((action, idx) => (
              <li key={idx}>{action}</li>)
            )}
          </FlexRowDiv>
        </CenterRow>
      </FlexRowDiv>

      <ActionsRow>
        <Link to={`/users/${user._id}`}>
          <BigRectangleIcon>Posts</BigRectangleIcon>
        </Link>
        <Link to={`/users/${user._id}/about`}>
          <BigRectangleIcon>About</BigRectangleIcon>
        </Link>
        <Link to={`/users/${user._id}/friends`}>
          <BigRectangleIcon>Friends</BigRectangleIcon>
        </Link>
        <Link to={`/users/${user._id}/photos`}>
          <BigRectangleIcon>Photos</BigRectangleIcon>
        </Link>
      </ActionsRow>
    </HeaderDiv>
  );
};
