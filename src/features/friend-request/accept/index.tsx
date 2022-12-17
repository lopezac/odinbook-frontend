import { BsPlusCircleFill } from "react-icons/bs";
import { SmallBlueRow, Para } from "shared/ui";
import { CreateFriendReq } from "shared/api";
import { FriendReqModel } from "entities/friend-request";
import { FriendshipModel } from "entities/friendship";

export const AcceptFriendReq = ({ emitter, receiver }: CreateFriendReq) => {
  const friendReqModel = FriendReqModel();
  const friendshipModel = FriendshipModel();

  const handleClick = async () => {
    await friendReqModel.deleteFriendReq(emitter, receiver);
    await friendshipModel.createFriendship(emitter, receiver);
  };

  return (
    <SmallBlueRow onClick={handleClick}>
      <BsPlusCircleFill />
      <Para>Accept</Para>
    </SmallBlueRow>
  );
};
