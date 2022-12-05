import { REST_API_URL } from "shared/config";
import type { CreatePostType, PostType } from "./types";

const headers: HeadersInit = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
};

type ErrorResType = { message: string; err: unknown };

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

export const getUserPosts = async (userId: string) => {
  try {
    const url = `${REST_API_URL}/users/${userId}/posts`;
    const options: RequestInit = { method: "GET", headers };

    const res = await fetch(url, options);
    const data: { posts: PostType[] } | ErrorResType = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error getting user posts ${userId}, in shared/api, ${err}`);
  }
};

export const deletePost = async (postId: string, token: string) => {
  try {
    const url = `${REST_API_URL}/posts/${postId}`;
    const options: RequestInit = {
      method: "DELETE",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    };

    const res = await fetch(url, options);
    const data: { success: boolean } | ErrorResType = await res.json();
    console.log("data", data);

    return data;
  } catch (err) {
    throw Error(`Error deleting post ${postId}, in shared/api/post, ${err}`);
  }
};
