import { REST_API_URL } from "shared/config";
import { CreateLike } from "./types";

const headers: HeadersInit = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
};

export const createLike = async (likeData: CreateLike, token: string) => {
  try {
    const url = `${REST_API_URL}/likes`;
    const options: RequestInit = {
      body: JSON.stringify(likeData),
      method: "POST",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error creating like, in shared/api, ${err}`);
  }
};

export const getLike = async (userId: string, receiverId: string) => {
  try {
    const url = `${REST_API_URL}/likes?user=${userId}&receiver=${receiverId}`;
    const options: RequestInit = {
      method: "GET",
      headers,
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error getting like with query, in shared/api, ${err}`);
  }
};

export const deleteLike = async (
  receiverId: string,
  userId: string,
  token: string
) => {
  try {
    const url = `${REST_API_URL}/likes?receiver=${receiverId}&user=${userId}`;
    const options: RequestInit = {
      method: "DELETE",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error deleting like with query params, in shared/api, ${err}`);
  }
};
