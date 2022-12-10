import { type CreateNotification, notificationApi } from "shared/api";
import { useMemoryStore } from "shared/hooks";

export const Model = () => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");

  const createNoti = async (data: CreateNotification) => {
    return await notificationApi.createNoti(data, accessToken);
  };

  const getReceiverNoti = async (receiverId: string) => {
    const res = await notificationApi.getReceiverNoti(receiverId);
    if ("notifications" in res) return res.notifications;
    return null;
  };

  const deleteNoti = async (notificationId: string) => {
    return await notificationApi.deleteNoti(notificationId, accessToken);
  };

  return { createNoti, getReceiverNoti, deleteNoti };
};
