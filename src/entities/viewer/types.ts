import {
  UserData,
  UserSignIn,
  UserSignUp,
  SuccessRes,
  ErrorRes,
} from "shared/api/user";

export type ViewerModelType = {
  useViewer: () => UserData | null;
  signInViewer: (
    data: UserSignIn
  ) => Promise<SuccessRes | { [key: string]: any }>;
  signUpViewer: (data: UserSignUp) => Promise<{ message: string } | ErrorRes>;
  logoutViewer: () => void;
  updateViewer: (data: UserSignUp) => Promise<any>;
};
