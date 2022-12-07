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

