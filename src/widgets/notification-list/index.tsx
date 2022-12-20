import { useEffect, useState } from "react";
import { Notification } from "shared/api";
import { VerticalList } from "shared/ui";
import { NotificationModel } from "entities/notification";
import { NotificationRow } from "entities/notification/ui";
import { useViewerModel } from "entities/viewer";
import { AcceptFriendReq } from "features/friend-request/accept";
import { DeclineFriendReq } from "features/friend-request/decline";

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
