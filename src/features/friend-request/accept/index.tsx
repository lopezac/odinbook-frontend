import { BsPlusCircleFill } from "react-icons/bs";
import { SmallBlueRow, Para } from "shared/ui";
import { Notification } from "shared/api";
import { FriendReqModel } from "entities/friend-request";
import { FriendshipModel } from "entities/friendship";
import { NotificationModel } from "entities/notification";

export const AcceptFriendReq = ({ data }: { data: Notification }) => {
  const { emitter, receiver, _id } = data;
  const friendReqModel = FriendReqModel();
  const friendshipModel = FriendshipModel();
  const notificationModel = NotificationModel();

  const handleClick = async () => {
    await friendReqModel.deleteFriendReq(emitter, receiver);
    await friendshipModel.createFriendship(emitter, receiver);
    await notificationModel.deleteNoti(_id)
  };

  return (
    <SmallBlueRow onClick={handleClick}>
      <BsPlusCircleFill />
      <Para>Accept</Para>
    </SmallBlueRow>
  );
};
