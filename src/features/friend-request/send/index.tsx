import { useEffect, useState } from "react";
import { BlueRow, LargePara } from "shared/ui";
import { UserData } from "shared/api";
import { FriendReqModel } from "entities/friend-request";
import { useViewerModel } from "entities/viewer";
import { NotificationModel } from "entities/notification";
import { BsPersonPlusFill, BsPersonDashFill } from "react-icons/bs";

type SendFriendReqProps = { user: UserData };

export const SendFriendRequest = ({ user }: SendFriendReqProps) => {
  const friendReqModel = FriendReqModel();
  const notificationModel = NotificationModel();
  const viewer = useViewerModel().useViewer();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const checkIfSent = async () => {
      const friendRequests = await friendReqModel.getFriendReq({
        emitter: viewer!._id,
        receiver: user._id,
      });
      if (friendRequests.length) setSent(true);
    };
    checkIfSent();
  }, []);

  const handleCancel = async () => {
    const res = await friendReqModel.deleteFriendReq(viewer!._id, user._id);
    if (res) setSent(false);
  };

  const handleAdd = async () => {
    const res = await friendReqModel.createFriendReq(viewer!._id, user._id);
    if (res && viewer) {
      setSent(true);
      const notificationData = {
        emitter: viewer._id,
        receiver: user._id,
        text: `${viewer.firstName} ${viewer.lastName} send you a friend request`,
        picture: viewer.picture,
        type: "friend-request",
      };
      await notificationModel.createNoti(notificationData);
    }
  };

  return sent ? (
    <BlueRow onClick={handleCancel}>
      <BsPersonDashFill />
      <LargePara>Cancel Request</LargePara>
    </BlueRow>
  ) : (
    <BlueRow onClick={handleAdd}>
      <BsPersonPlusFill />
      <LargePara>Add Friend</LargePara>
    </BlueRow>
  );
};
