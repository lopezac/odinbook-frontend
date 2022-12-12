import { MouseEvent } from "react";
import { Button } from "shared/ui";
import { FriendReqModel } from "entities/friend-request";
import { FriendshipModel } from "entities/friendship";
import { CreateFriendReq } from "shared/api";

export const AcceptFriendReq = ({ emitter, receiver }: CreateFriendReq) => {
  const friendReqModel = FriendReqModel();
  const friendshipModel = FriendshipModel();

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    await friendReqModel.deleteFriendReq(emitter, receiver);
    await friendshipModel.createFriendship(emitter, receiver);
  };

  return <Button onClick={handleClick}>Accept</Button>;
};
