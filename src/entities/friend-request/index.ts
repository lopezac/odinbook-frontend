import { friendReqApi } from "shared/api";
import { useMemoryStore } from "shared/hooks";

type getFriendReqProps = { emitter?: string; receiver?: string };

export const FriendReqModel = () => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");

  const createFriendReq = async (emitter: string, receiver: string) => {
    const res = await friendReqApi.createFriendReq(
      { emitter, receiver },
      accessToken
    );
    if ("friendRequest" in res) return res.friendRequest;
    return null;
  };

  const getFriendReq = async ({ emitter, receiver }: getFriendReqProps) => {
    const res = await friendReqApi.getFriendReq(emitter, receiver);
    if ("friendRequests" in res) return res.friendRequests;
    return null;
  };

  const deleteFriendReq = async (emitter: string, receiver: string) => {
    const res = await friendReqApi.deleteFriendReq(
      { emitter, receiver },
      accessToken
    );
    console.log("res at deleteFriendReq", res);
    if ("success" in res) return res.success;
    return null;
  };

  return { createFriendReq, getFriendReq, deleteFriendReq };
};
