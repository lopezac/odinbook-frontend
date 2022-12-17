import { useEffect, useState } from "react";
import { UserData } from "shared/api";
import { AvatarImg, BigRectangleIcon, H1, Link } from "shared/ui";
import { FriendshipModel } from "entities/friendship";
import { useViewerModel } from "entities/viewer";
import { SendFriendRequest } from "features/friend-request";
import { SendMessage } from "features/message";
import { RemoveFriend } from "features/remove-friend";
import { ActionsRow, CenterRow, FlexRowDiv, HeaderDiv } from "./styles";

type ProfileHeaderProps = { user: UserData };

export const UserProfileHeader = ({ user }: ProfileHeaderProps) => {
  const friendshipModel = FriendshipModel();
  const viewer = useViewerModel().useViewer();
  const [friendship, setFriendship] = useState<boolean | null>(false);

  useEffect(() => {
    const checkIfFriendship = async () => {
      const friendshipData = await friendshipModel.getFriendship([
        viewer!._id,
        user._id,
      ]);
      setFriendship(friendshipData);
    };
    checkIfFriendship();
  }, [user, viewer]);

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
            {friendship ? (
              <RemoveFriend userId={user._id} />
            ) : (
              <SendFriendRequest user={user} />
            )}
            <SendMessage user={user} />
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
