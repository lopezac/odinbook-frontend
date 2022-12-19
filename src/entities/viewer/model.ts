import { useMemoryStore } from "shared/hooks";
import type {
  UserData,
  UserSignUp,
  UserSignIn,
  UserUpdate,
} from "shared/api/user";
import { userApi } from "shared/api";
import { getRandomNumber } from "shared/lib/number";

export const Model = () => {
  const [viewer, setViewer] = useMemoryStore<UserData | null>("user");
  const [accessToken, setAccessToken] = useMemoryStore<string | null>(
    "access-token"
  );

  const useViewer = () => viewer as UserData;

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

  const generateGuestData = () => {
    const randomNumber = getRandomNumber(10000);

    return {
      firstName: "Guest",
      lastName: `${randomNumber}`,
      email: `guest${randomNumber}@email.com`,
      password: `Strongpassword.${randomNumber}`,
      passwordConfirm: `Strongpassword.${randomNumber}`,
      birthday: new Date("05/09/2000"),
      gender: "male",
    };
  };

  const signUpViewer = async (data: UserSignUp) => {
    return await userApi.signUpUser(data);
  };

  const facebookSignUp = async () => {
    return await userApi.facebookSignUp();
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

  const deleteViewer = async () => {
    return await userApi.deleteUser(viewer!._id, accessToken as string);
  };

  return {
    useViewer,
    signInViewer,
    generateGuestData,
    facebookSignUp,
    signUpViewer,
    logoutViewer,
    updateViewer,
    deleteViewer,
  };
};
