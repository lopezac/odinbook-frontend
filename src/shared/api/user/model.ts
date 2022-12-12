import { REST_API_URL } from "shared/config";
import {
  UserSignIn,
  UserSignUp,
  ErrorRes,
  UserUpdate,
  UserData,
} from "./types";

const headers: HeadersInit = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
};

type ErrorResType = { message: string; err: unknown };

export const signUpUser = async (userData: UserSignUp) => {
  try {
    const url = `${REST_API_URL}/sign-up`;
    const options: RequestInit = {
      body: JSON.stringify(userData),
      method: "POST",
      headers,
    };

    const res = await fetch(url, options);
    const data: { message: string } | ErrorRes = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error signing up the user, shared/api/user, ${err}`);
  }
};

export const signInUser = async (userData: UserSignIn) => {
  const url = `${REST_API_URL}/sign-in`;
  const options: RequestInit = {
    body: JSON.stringify(userData),
    method: "POST",
    headers,
  };

  const res = await fetch(url, options);

  try {
    const resObject = await res.json();
    resObject.data.birthday = new Date(resObject.data.birthday);

    return resObject;
  } catch (err) {
    return res;
  }
};

export const updateUser = async (
  userId: string,
  userData: UserUpdate,
  token: string
) => {
  try {
    const url = `${REST_API_URL}/users/${userId}`;
    const options: RequestInit = {
      body: JSON.stringify({ ...userData }), // is ... necessary??
      method: "PUT",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error updating user, shared/api/user, ${err}`);
  }
};

export const deleteUser = async (userId: string, token: string) => {
  try {
    const url = `${REST_API_URL}/users/${userId}`;
    const options: RequestInit = {
      method: "DELETE",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    };

    const res = await fetch(url, options);

    return await res.json();
  } catch (err) {
    throw Error(`Error deleting user, shared/api/user, ${err}`);
  }
};

export const getUser = async (userId: string) => {
  try {
    const url = `${REST_API_URL}/users/${userId}`;
    const options: RequestInit = { method: "GET", headers };

    const res = await fetch(url, options);
    const data: { user: UserData } | ErrorResType = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error getting user, shared/api/user, ${err}`);
  }
};

export const getUsers = async () => {
  try {
    const url = `${REST_API_URL}/users`;
    const options: RequestInit = { method: "GET", headers };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error getting users, shared/api/user, ${err}`);
  }
};

export const getUserPhotos = async (userId: string) => {
  try {
    const url = `${REST_API_URL}/users/${userId}/photos`;
    const options: RequestInit = { method: "GET", headers };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error getting user photos, shared/api/user, ${err}`);
  }
};

export const getUserFriends = async (userId: string) => {
  try {
    const url = `${REST_API_URL}/users/${userId}/friends`;
    const options: RequestInit = { method: "GET", headers };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error getting user friends, shared/api/user, ${err}`);
  }
};
