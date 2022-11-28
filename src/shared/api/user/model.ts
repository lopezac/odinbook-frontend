import { REST_API_URL } from "shared/config";
import { UserSignIn, UserSignUp, UserData } from "./types";

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

export { signInUser, signUpUser };
