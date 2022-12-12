import { userApi } from "shared/api";

export const Model = () => {
  const getUser = async (id: string) => {
    const data = await userApi.getUser(id);
    if ("user" in data) return data.user;
    return null;
  };

  const getUsers = async () => {
    const data = await userApi.getUsers();
    if ("users" in data) return data.users;
    return null;
  };

  const getUserFriends = async (userId: string) => {
    const res = await userApi.getUserFriends(userId);
    console.log("res", res);
    if ("friends" in res) return res.friends;
    return null;
  };

  return { getUser, getUsers, getUserFriends };
};
