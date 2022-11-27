import { REST_API_URL } from "shared/config";

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
  birthday: Date;
  gender: string;
};

export type UserSignIn = {
  email: string;
  password: string;
};

const headers: HeadersInit = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
};

const signUpUser = async (userData: UserSignUp) => {
  const url = `${REST_API_URL}/sign-up`;
  const options: RequestInit = {
    body: JSON.stringify(userData),
    method: "POST",
    headers,
  };

  const res = await fetch(url, options);
  return await res.json();
};

const signInUser = async (userData: UserSignIn) => {
  // const token = SessionStorage.get("access-token");
  // if (token) headers["Authorization"] = token;
  const url = `${REST_API_URL}/sign-in`;
  const options: RequestInit = {
    body: JSON.stringify(userData),
    method: "POST",
    headers,
  };

  const res = await fetch(url, options);
  const data: { token: string; data: UserData } = await res.json();
  return data;
};

const userApi = { signUpUser, signInUser };

export default userApi;
