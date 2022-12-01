import { useEffect, useState } from "react";
import { useSessionStorage } from "shared/hooks";
import type { UserData, UserSignUp, UserSignIn } from "shared/api/user";
import { userApi } from "shared/api/user";

export const Model = () => {
  const [viewer, setViewer] = useState<UserData | null>(null);
  const [accessToken, setAccessToken] = useSessionStorage("access-token");

  const useViewer = () => viewer;

  const logoutViewer = () => {
    setViewer(null);
    setAccessToken(null);
  };

  const signInViewer = async (data: UserSignIn) => {
    const user = await userApi.signInUser(data);

    if ("token" in user) {
      setViewer(user.data);
      setAccessToken(user.token);
    }

    return user;
  };

  const signUpViewer = async (data: UserSignUp) => {
    return await userApi.signUpUser(data);
  };

  const updateViewer = async (data: UserSignUp) => {
    const _id = viewer?._id;
    const user = await userApi.updateUser(_id as string, data);
    // setViewer(user);
    console.log("user", user);
    return user;
  };

  useEffect(() => {
    console.log("viewer", viewer);
  }, [viewer]);

  return { useViewer, signInViewer, signUpViewer, logoutViewer, updateViewer };
};
