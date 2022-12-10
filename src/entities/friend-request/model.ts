import { friendReqApi } from "shared/api";
import { useMemoryStore } from "shared/hooks";

type getFriendReqProps = { emitter?: string; receiver?: string };

export const Model = () => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");

  const createFriendReq = async () => {
    return;
  };

  const acceptFriendReq = async () => {
    return;
  };

  const getFriendReq = async ({ emitter, receiver }: getFriendReqProps) => {
    const res = await friendReqApi.getFriendReq(emitter, receiver);
  };

  const deleteFriendReq = async (id: string) => {
    return;
  };

  return { createFriendReq, acceptFriendReq, getFriendReq, deleteFriendReq };
};
