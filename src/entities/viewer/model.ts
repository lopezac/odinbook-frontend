import { useState } from "react";
import { SessionStorage } from "shared/api/SessionStorage";
import type { UserData, UserSignUp, UserSignIn } from "shared/api/user";
import { userApi } from "shared/api/user";

export const Model = () => {
  const [viewer, setViewer] = useState<UserData | null>(null);

  const useViewer = () => viewer;

  const logoutViewer = () => {
    setViewer(null);
    SessionStorage.remove("access-token");
    return;
  };

  const signInViewer = async (data: UserSignIn) => {
    const user = await userApi.signInUser(data);
    if (user) {
      setViewer(user.data);
      SessionStorage.set("access-token", user.token);
      return;
    }
  };

  const signUpViewer = async (data: UserSignUp) => {
    await userApi.signUpUser(data);
    return;
  };

  return { useViewer, signInViewer, signUpViewer, logoutViewer };
};
