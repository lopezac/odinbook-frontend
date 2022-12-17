import { BsDashCircleFill } from "react-icons/bs";
import { SmallBlueRow, Para } from "shared/ui";
import { CreateFriendReq } from "shared/api";
import { FriendReqModel } from "entities/friend-request";

export const DeclineFriendReq = ({ emitter, receiver }: CreateFriendReq) => {
  const friendReqModel = FriendReqModel();

  const handleClick = async () => {
    await friendReqModel.deleteFriendReq(emitter, receiver);
  };

  return (
    <SmallBlueRow onClick={handleClick}>
      <BsDashCircleFill />
      <Para>Decline</Para>
    </SmallBlueRow>
  );
};
