import { rmSync } from "fs";
import { REST_API_URL } from "shared/config";
import { UserSignIn, UserSignUp, ErrorRes } from "./types";

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
  const data: { message: string } | ErrorRes = await res.json();

  return data;
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
  const resObject = await res.json();
  resObject.data.birthday = new Date(resObject.data.birthday);

  return resObject;
};

const updateUser = async (userId: string, userData: UserSignUp) => {
  const url = `${REST_API_URL}/${userId}`;
  const options: RequestInit = {
    body: JSON.stringify({ ...userData, _id: userId }),
    method: "PUT",
    headers,
  };

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

export { signInUser, signUpUser, updateUser };
