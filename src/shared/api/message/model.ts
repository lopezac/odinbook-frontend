import { REST_API_URL } from "shared/config";
import { CreateMessageType } from "./types";

const headers: HeadersInit = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
};

export const createMessage = async (
  msgData: CreateMessageType,
  token: string
) => {
  try {
    const url = `${REST_API_URL}/messages`;
    const options: RequestInit = {
      body: JSON.stringify(msgData),
      method: "POST",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error creating message, shared/api/message ${err}`);
  }
};
