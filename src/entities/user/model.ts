import { userApi } from "shared/api";

export const Model = () => {
  const getUser = async (id: string) => {
    const data = await userApi.getUser(id);
    if ("user" in data) return data.user;
    return null;
  };

  const getUsers = async ({ page }: { page: number }) => {
    const data = await userApi.getUsers({ page });
    if ("users" in data) return data.users;
    return null;
  };

  const getUserFriends = async (userId: string) => {
    const res = await userApi.getUserFriends(userId);
    if ("friends" in res) return res.friends;
    return null;
  };

  const getUserPhotos = async (userId: string) => {
    const res = await userApi.getUserPhotos(userId);
    if ("posts" in res) return res.posts;
    return null;
  };

  const getUserChats = async (userId: string) => {
    const res = await userApi.getUserChats(userId);
    if ("chats" in res) return res.chats;
    return null;
  };

  return { getUser, getUsers, getUserFriends, getUserPhotos, getUserChats };
};
