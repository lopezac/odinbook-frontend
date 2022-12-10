import { REST_API_URL } from "shared/config";

const headers: HeadersInit = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
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
