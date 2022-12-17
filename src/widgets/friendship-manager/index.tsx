import { useEffect, useState } from "react";
import { UserData } from "shared/api";
import { FriendshipModel } from "entities/friendship";
import { useViewerModel } from "entities/viewer";
import { SendFriendRequest } from "features/friend-request";
import { RemoveFriend } from "features/remove-friend";

type FriendshipManagerProps = { user: UserData };

export const FriendshipManager = ({ user }: FriendshipManagerProps) => {
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
    friendship ? 
    <RemoveFriend userId={user._id} /> :
    <SendFriendRequest user={user} />
  );
};
