import {
  UserData,
  UserSignIn,
  UserSignUp,
  SuccessRes,
  ErrorRes,
  UserUpdate,
} from "shared/api/user";

export type ViewerModelType = {
  useViewer: () => UserData | null;
  signInViewer: (
    data: UserSignIn
  ) => Promise<SuccessRes | { [key: string]: any }>;
  generateGuestData: () => any;
  signUpViewer: (data: UserSignUp) => Promise<{ message: string } | ErrorRes>;
  facebookSignUp: () => any;
  logoutViewer: () => void;
  updateViewer: (data: UserUpdate) => Promise<any>;
  deleteViewer: () => Promise<any>;
};
