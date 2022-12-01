import { ErrorsType } from "shared/hooks";

export type UserData = {
  _id: string;
  facebookId?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: Date;
  gender: string;
  photo: string;
};

export type UserSignUp = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  birthday: Date;
  gender: string;
};

export type UserSignIn = {
  email: string;
  password: string;
};

export type ErrorRes = {
  message: string;
  errors: ErrorsType;
};

export type SuccessRes = {
  token: string;
  data: UserData;
};
