import { REST_API_URL } from "shared/config";
import { CreateCommentType } from "./types";

const headers: HeadersInit = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
};

export const createComment = async (
  commentData: CreateCommentType,
  token: string
) => {
  try {
    const url = `${REST_API_URL}/comments`;
    const options: RequestInit = {
      body: JSON.stringify(commentData),
      method: "POST",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error creating comment, shared/api/comment ${err}`);
  }
};

export const getPostComments = async (postId: string) => {
  try {
    const url = `${REST_API_URL}/posts/${postId}/comments`;
    const options: RequestInit = { method: "GET", headers };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error getting post comments, shared/api/comment ${err}`);
  }
};
