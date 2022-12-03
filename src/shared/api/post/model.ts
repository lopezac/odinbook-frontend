import { REST_API_URL } from "shared/config";

const headers: HeadersInit = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
};

const getPhotos = async (userId: string) => {
  const url = `${REST_API_URL}/user/${userId}/photos`;
  const options: RequestInit = {
    method: "GET",
    headers: { ...headers },
  };

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

export { getPhotos };
