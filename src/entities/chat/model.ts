import { useMemoryStore } from "shared/hooks";
import { chatApi, UserData } from "shared/api";

export const ChatModel = () => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");

  const createChat = async (users: string[]) => {
    const res = await chatApi.createChat(users, accessToken);
    if ("chat" in res) return res.chat;
    return null;
  };

  const findChat = async (users: string[]) => {
    const res = await chatApi.findChat(users);
    if ("chat" in res) return res.chat[0];
    return null;
  };

  const getChatMessages = async (chatId: string) => {
    const res = await chatApi.getChatMessages(chatId);
    if ("messages" in res) return res.messages;
    return null;
  };

  const getReceiverUser = async (chatId: string, viewerId: string) => {
    const res = await chatApi.getChatUsers(chatId);
    const users = res.users;
    let receiver: any = {};

    for (let i = 0; i < users.length; i++) {
      if (users[i]._id !== viewerId) {
        receiver = users[i];
        break;
      }
    };

    return receiver;
  };

  return { createChat, findChat, getChatMessages, getReceiverUser };
};
