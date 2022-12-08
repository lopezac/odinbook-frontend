import { useMemoryStore } from "shared/hooks";
import { likeApi, type CreateLike } from "shared/api";

export const Model = () => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");

  const createLike = async (likeData: CreateLike) => {
    return await likeApi.createLike(likeData, accessToken);
  };

  const likedByUser = async (userId: string, receiverId: string) => {
    const res = await likeApi.getLike(userId, receiverId);
    return !!res.likes.length;
  };

  const getReceiverLikes = async (receiverId: string) => {
    const res = await likeApi.getReceiverLikes(receiverId);
    if ("likes" in res) return res.likes;
    return null;
  };

  const deleteLike = async (receiverId: string, userId: string) => {
    return await likeApi.deleteLike(receiverId, userId, accessToken);
  };

  return { createLike, getReceiverLikes, likedByUser, deleteLike };
};
