import { REST_API_URL } from "shared/config";

const headers: HeadersInit = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
};

export const createChat = async (users: string[], token: string) => {
  try {
    const url = `${REST_API_URL}/chats`;
    const options: RequestInit = {
      body: JSON.stringify({ users }),
      method: "POST",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error creating chat, shared/api/chat ${err}`);
  }
};

export const findChat = async (users: string[]) => {
  try {
    const url = `${REST_API_URL}/chats?users=[${users}]`;
    const options: RequestInit = { method: "GET", headers };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error finding chat, shared/api/chat ${err}`);
  }
};

export const getChatMessages = async (chatId: string) => {
  try {
    const url = `${REST_API_URL}/chats/${chatId}/messages`;
    const options: RequestInit = { method: "GET", headers };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error getting chat messages, shared/api/chat ${err}`);
  }
};

export const getChatUsers = async (chatId: string) => {
  try {
    const url = `${REST_API_URL}/chats/${chatId}/users`;
    const options: RequestInit = { method: "GET", headers };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error getting chat users, shared/api/chat ${err}`);
  }
};
