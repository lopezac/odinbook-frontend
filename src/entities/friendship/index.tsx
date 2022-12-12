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

  return { createFriendship };
};
