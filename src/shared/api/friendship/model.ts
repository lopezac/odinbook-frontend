import { REST_API_URL } from "shared/config";

const headers: HeadersInit = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
};

export const createFriendship = async (
  emitter: string,
  receiver: string,
  token: string
) => {
  try {
    const url = `${REST_API_URL}/friendships?emitter=${emitter}&receiver=${receiver}`;
    const options: RequestInit = {
      method: "POST",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error creating friendship, shared/api ${err}`);
  }
};

export const getFriendship = async (userIds: string[]) => {
  try {
    const url = `${REST_API_URL}/friendships?userOne=${userIds[0]}&userTwo=${userIds[1]}`;
    const options: RequestInit = { method: "GET", headers };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error getting friendship, shared/api ${err}`);
  }
};

export const deleteFriendship = async (userIds: string[], token: string) => {
  try {
    const url = `${REST_API_URL}/friendships?userOne=${userIds[0]}&userTwo=${userIds[1]}`;
    const options: RequestInit = {
      method: "DELETE",
      headers: { ...headers, Authorization: `Bearer ${token}` },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    throw Error(`Error deleting friendship, shared/api ${err}`);
  }
};
