import { useMemoryStore } from "shared/hooks";
import { commentApi } from "shared/api";

export const Model = () => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");

  const createLike = async (likeData: CreateLike) => {
    return await commentApi.createLike(likeData, accessToken);
  };

  const deleteLike = async () => {
    return;
  };

  return { createLike };
};
