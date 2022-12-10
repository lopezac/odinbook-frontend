import { MouseEvent, useEffect, useState } from "react";
import { Button } from "shared/ui";
import { UserData } from "shared/api";
import { FriendReqModel } from "entities/friend-request";
import { useViewerModel } from "entities/viewer";

type SendFriendReqProps = { user: UserData };

export const SendFriendReq = ({ user }: SendFriendReqProps) => {
  const friendReqModel = FriendReqModel();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const checkIfSent = async () => {
      const friendRequests = await friendReqModel.getFriendReq({
        emitter: viewer!._id,
        receiver: user._id,
      });
      setSent(!!friendRequests[0]);
    };
    checkIfSent();
  }, []);

  const handleCancel = async (e: MouseEvent<HTMLButtonElement>) => {
    return;
  };

  const handleAdd = async (e: MouseEvent<HTMLButtonElement>) => {
    return;
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
