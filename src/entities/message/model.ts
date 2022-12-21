import { useContext } from "react";
import { messageApi, CreateMessageType, SocketContext } from "shared/api";
import { useMemoryStore } from "shared/hooks";

export const MessageModel = () => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");
  const socket = useContext(SocketContext);

  const createMessage = async (data: CreateMessageType) => {
    const res = await messageApi.createMessage(data, accessToken);
    socket?.emit("message:create", res);
    return res;
  };

  return { createMessage };
};
