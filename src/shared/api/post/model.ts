import { REST_API_URL } from "shared/config";
import type { CreatePostType } from "./types";

const headers: HeadersInit = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
};

export const createPost = async (postData: CreatePostType, token: string) => {
  try {
    const url = `${REST_API_URL}/posts`;
    const options: RequestInit = {
      body: JSON.stringify(postData),
      method: "POST",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error creating post, in shared/api, ${err}`);
  }
};
