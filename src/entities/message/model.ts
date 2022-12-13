import { messageApi, CreateMessageType } from "shared/api";
import { useMemoryStore } from "shared/hooks";

export const MessageModel = () => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");

  const createMessage = async (data: CreateMessageType) => {
    return await messageApi.createMessage(data, accessToken);
  };

  return { createMessage };
};
