import { useContext } from "react";
import { useMemoryStore } from "shared/hooks";
import { likeApi, SocketContext, type CreateLike } from "shared/api";

export const Model = () => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");
  const socket = useContext(SocketContext);

  const createLike = async (likeData: CreateLike) => {
    const res = await likeApi.createLike(likeData, accessToken);
    if ("like" in res) socket?.emit("like:create", res.like);
    return res;
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
    const res = await likeApi.deleteLike(receiverId, userId, accessToken);
    if ("success" in res) socket?.emit("like:delete", receiverId);
    return res;
  };

  return { createLike, getReceiverLikes, likedByUser, deleteLike };
};
