import { useEffect, useState } from "react";
import { H1, Layout } from "shared/ui";
import { FriendReq } from "shared/api";
import { useRedirect } from "entities/viewer";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { NotificationList } from "widgets/notification-list";

export const ViewerNotificationsPage = () => {
  useRedirect("unauthorized");
  const [friendRequests, setFriendRequests] = useState<FriendReq | null>(null);

  useEffect(() => {
    return;
  }, []);

  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <H1>Notifications</H1>
        <NotificationList />
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};