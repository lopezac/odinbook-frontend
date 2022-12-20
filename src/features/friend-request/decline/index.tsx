import { BsDashCircleFill } from "react-icons/bs";
import { SmallBlueRow, Para } from "shared/ui";
import { Notification } from "shared/api";
import { FriendReqModel } from "entities/friend-request";
import { NotificationModel } from "entities/notification";

export const DeclineFriendReq = ({ data }: { data: Notification }) => {
  const { emitter, receiver, _id } = data;
  const friendReqModel = FriendReqModel();
  const notificationModel = NotificationModel();

  const handleClick = async () => {
    await friendReqModel.deleteFriendReq(emitter, receiver);
    await notificationModel.deleteNoti(_id)
  };

  return (
    <SmallBlueRow onClick={handleClick}>
      <BsDashCircleFill />
      <Para>Decline</Para>
    </SmallBlueRow>
  );
};
