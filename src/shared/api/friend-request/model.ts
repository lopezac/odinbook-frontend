import { REST_API_URL } from "shared/config";
import type { CreateFriendReq } from "./types";

const headers: HeadersInit = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
};

export const createFriendReq = async (
  friendReqData: CreateFriendReq,
  token: string
) => {
  try {
    const url = `${REST_API_URL}/friend-requests`;
    const options: RequestInit = {
      body: JSON.stringify(friendReqData),
      method: "POST",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error creating friend request, shared/api ${err}`);
  }
};

export const getFriendReq = async (emitterId = "{}", receiverId = "{}") => {
  try {
    const url = `${REST_API_URL}/friend-requests?emitter=${emitterId}&receiver=${receiverId}`;
    const options: RequestInit = { method: "GET", headers };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error getting friend requests, shared/api ${err}`);
  }
};

export const deleteFriendReq = async (
  { emitter, receiver }: CreateFriendReq,
  token: string
) => {
  try {
    const url = `${REST_API_URL}/friend-requests?emitter=${emitter}&receiver=${receiver}`;
    const options: RequestInit = {
      method: "DELETE",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error deleting friend request, shared/api ${err}`);
  }
};
