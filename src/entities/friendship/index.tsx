import { useMemoryStore } from "shared/hooks";
import { friendshipApi } from "shared/api";

export const FriendshipModel = () => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");

  const createFriendship = async (emitter: string, receiver: string) => {
    const res = await friendshipApi.createFriendship(
      emitter,
      receiver,
      accessToken
    );
    if ("friendship" in res) return res.friendship;
    return null;
  };

  const getFriendship = async (userIds: string[]) => {
    const res = await friendshipApi.getFriendship(userIds);
    if ("friendship" in res) return res.friendship;
    return null;
  };

  const deleteFriendship = async (userIds: string[]) => {
    return await friendshipApi.deleteFriendship(userIds, accessToken);
  };

  return { createFriendship, getFriendship, deleteFriendship };
};
