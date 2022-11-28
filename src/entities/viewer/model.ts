import { useState, createContext } from "react";
import { SessionStorage } from "shared/api/SessionStorage";
import type { UserData, UserSignUp, UserSignIn } from "shared/api/user";
import userApi from "shared/api/user";

export const Model = () => {
  const [viewer, setViewer] = useState<UserData | null>(null);

  const useViewer = () => viewer;

  const logoutViewer = () => {
    setViewer(null);
    return SessionStorage.remove("access-token");
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
    return await userApi.signUpUser(data);
  };

  return { useViewer, signInViewer, signUpViewer, logoutViewer };
};

export const Context = createContext<typeof Model>({});
