import { MouseEvent, useEffect, useState } from "react";
import { Button } from "shared/ui";
import { UserData } from "shared/api";
import { FriendReqModel } from "entities/friend-request";
import { useViewerModel } from "entities/viewer";
import { NotificationModel } from "entities/notification";

type SendFriendReqProps = { user: UserData };

export const SendFriendRequest = ({ user }: SendFriendReqProps) => {
  const friendReqModel = FriendReqModel();
  const notificationModel = NotificationModel();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const checkIfSent = async () => {
      const friendRequests = await friendReqModel.getFriendReq({
        emitter: viewer!._id,
        receiver: user._id,
      });
      setSent(!!friendRequests.length);
    };
    checkIfSent();
  }, []);

  const handleCancel = async (e: MouseEvent<HTMLButtonElement>) => {
    const res = await friendReqModel.deleteFriendReq(viewer!._id, user._id);
    if (res) setSent(false);
  };

  const handleAdd = async (e: MouseEvent<HTMLButtonElement>) => {
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

  return (
    <div>
      {sent ? (
        <Button type="button" onClick={handleCancel}>
          Cancel Request
        </Button>
      ) : (
        <Button type="button" onClick={handleAdd}>
          Add Friend
        </Button>
      )}
    </div>
  );
};
