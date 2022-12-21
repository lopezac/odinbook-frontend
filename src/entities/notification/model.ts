import { useContext } from "react";
import { CreateNotification, notificationApi, SocketContext } from "shared/api";
import { useMemoryStore } from "shared/hooks";

export const Model = () => {
  const [accessToken, setAccessToken] = useMemoryStore<string>("access-token");
  const socket = useContext(SocketContext);

  const createNoti = async (data: CreateNotification) => {
    const res = await notificationApi.createNoti(data, accessToken);
    socket?.emit("notification:create", res);
    return res;
  };

  const getReceiverNoti = async (receiverId: string) => {
    const res = await notificationApi.getReceiverNoti(receiverId);
    if ("notifications" in res) return res.notifications;
    return null;
  };

  const deleteNoti = async (notificationId: string) => {
    const res = await notificationApi.deleteNoti(notificationId, accessToken);
    socket?.emit("notification:delete", notificationId);
    return res;
  };

  return { createNoti, getReceiverNoti, deleteNoti };
};
