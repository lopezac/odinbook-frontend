import { REST_API_URL } from "shared/config";
import { CreateNotification } from "./types";

const headers: HeadersInit = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
};

// Noti is used here as shorter of Notification

export const getReceiverNoti = async (receiverId: string) => {
  try {
    const url = `${REST_API_URL}/notifications?receiver=${receiverId}`;
    const options: RequestInit = { method: "GET", headers };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error getting receiver notifications, shared/api ${err}`);
  }
};

export const createNoti = async (
  notiData: CreateNotification,
  token: string
) => {
  try {
    const url = `${REST_API_URL}/notifications`;
    const options: RequestInit = {
      method: "POST",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error creating notification, shared/api ${err}`);
  }
};

export const deleteNoti = async (notiId: string, token: string) => {
  try {
    const url = `${REST_API_URL}/notifications/${notiId}`;
    const options: RequestInit = {
      method: "DELETE",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error deleting notification, shared/api ${err}`);
  }
};
