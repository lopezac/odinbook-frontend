import { useEffect } from "react";
import { useMemoryStore } from "shared/hooks";
import type {
  UserData,
  UserSignUp,
  UserSignIn,
  UserUpdate,
} from "shared/api/user";
import { userApi } from "shared/api/user";

export const Model = () => {
  const [viewer, setViewer] = useMemoryStore<UserData | null>("user");
  const [accessToken, setAccessToken] = useMemoryStore<string | null>(
    "access-token"
  );

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

  const updateViewer = async (data: UserUpdate) => {
    const _id = viewer?._id;

    const res = await userApi.updateUser(
      _id as string,
      data,
      accessToken as string
    );
    if ("errors" in res) return res;
    setViewer(res.user);

    return res.user;
  };

  useEffect(() => {
    console.log("viewer at entitiy model", viewer);
  }, [viewer]);

  return { useViewer, signInViewer, signUpViewer, logoutViewer, updateViewer };
};
