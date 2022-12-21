import { useContext, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { Notification, SocketContext } from "shared/api";
import { VerticalList } from "shared/ui";
import { NotificationModel } from "entities/notification";
import { NotificationRow } from "entities/notification/ui";
import { useViewerModel } from "entities/viewer";
import { AcceptFriendReq } from "features/friend-request/accept";
import { DeclineFriendReq } from "features/friend-request/decline";

export const NotificationList = () => {
  const socket = useContext(SocketContext) as Socket;
  const notificationModel = NotificationModel();
  const viewer = useViewerModel().useViewer();
  const [notifications, setNotifications] = useState<Notification[] | null>(
    null
  );

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await notificationModel.getReceiverNoti(viewer!._id);
      setNotifications(data);
    };
    fetchNotifications();
  }, [viewer]);

  useEffect(() => {
    const handleCreateNotification = (data: Notification) => {
      setNotifications((notifications) => [...notifications!, data]);
    };
    const handleDeleteNotification = (id: string) => {
      setNotifications((notifications) =>
        notifications!.filter((noti) => noti._id !== id)
      );
    };

    socket.on("notification:create", handleCreateNotification);
    socket.on("notification:delete", handleDeleteNotification);

    return () => {
      socket.off("notification:create", handleCreateNotification);
      socket.off("notification:delete", handleDeleteNotification);
    };
  }, [socket]);

  if (!notifications || !notifications.length) {
    return <p>There are no notifications yet!</p>;
  }
  return (
    <VerticalList>
      {notifications.map((notification) => {
        return (
          notification.type === "friend-request" && (
            <NotificationRow
              key={notification._id}
              data={notification}
              actions={[
                <AcceptFriendReq data={notification} />,
                <DeclineFriendReq data={notification} />,
              ]}
            />
          )
        );
      })}
    </VerticalList>
  );
};
