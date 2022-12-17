import { BsPersonDashFill } from "react-icons/bs";
import { BlueRow, LargePara } from "shared/ui";
import { FriendshipModel } from "entities/friendship";
import { useViewerModel } from "entities/viewer";

export const RemoveFriend = ({ userId }: { userId: string }) => {
  const friendshipModel = FriendshipModel();
  const viewer = useViewerModel().useViewer();

  const handleClick = async () => {
    await friendshipModel.deleteFriendship([viewer!._id, userId]);
  };

  return (
    <BlueRow onClick={handleClick}>
      <BsPersonDashFill />
      <LargePara>Remove friend</LargePara>
    </BlueRow>
  );
};
