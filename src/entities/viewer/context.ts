import { createContext } from "react";
import { UserData, UserSignIn, UserSignUp } from "shared/api/user";

type ContextType = {
  useViewer: () => UserData | null;
  signInViewer: (data: UserSignIn) => void;
  signUpViewer: (data: UserSignUp) => void;
  logoutViewer: () => void;
};

export const Context = createContext<ContextType>({
  useViewer: () => null,
  signInViewer: () => { },
  signUpViewer: () => { },
  logoutViewer: () => { },
});
