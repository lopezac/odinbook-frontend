import { MouseEvent } from "react";
import { Button } from "shared/ui";
import { FriendReqModel } from "entities/friend-request";
import { CreateFriendReq } from "shared/api";

export const DeclineFriendReq = ({ emitter, receiver }: CreateFriendReq) => {
  const friendReqModel = FriendReqModel();

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    await friendReqModel.deleteFriendReq(emitter, receiver);
  };

  return <Button onClick={handleClick}>Decline</Button>;
};
