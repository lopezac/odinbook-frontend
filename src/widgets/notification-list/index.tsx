import { NotificationModel } from "entities/notification";
import { NotificationRow } from "entities/notification/ui";
import { useViewerModel } from "entities/viewer";
import { useEffect, useState } from "react";
import { Notification } from "shared/api";

export const NotificationList = () => {
  const notificationModel = NotificationModel();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();
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

  if (!notifications || !notifications.length) {
    return <p>There are no notifications yet!</p>;
  }
  return (
    <div>
      {notifications.map((notification) => {
        return <NotificationRow data={notification} />;
      })}
    </div>
  );
};
