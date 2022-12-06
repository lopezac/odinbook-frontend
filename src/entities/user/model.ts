import { userApi } from "shared/api";

export const Model = () => {
  const getUser = async (id: string) => {
    const data = await userApi.getUser(id);
    if ("user" in data) return data.user;
    return null;
  };

  return { getUser };
};
