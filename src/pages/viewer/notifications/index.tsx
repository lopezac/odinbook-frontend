import { H1, Layout, DarkerWhiteCard } from "shared/ui";
import { useRedirect } from "entities/viewer";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { NotificationList } from "widgets/notification-list";

export const ViewerNotificationsPage = () => {
  useRedirect("unauthorized");

  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <DarkerWhiteCard>
          <H1>Notifications</H1>

          <NotificationList />
        </DarkerWhiteCard>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
