import { H1, H2, Layout } from "shared/ui";
import { UpdateUser, DeleteUser } from "features/viewer";
import { AuthHeader } from "widgets/header";
import { Footer } from "widgets/footer";
import { useRedirect } from "entities/viewer/hooks";

export const ViewerSettingsPage = () => {
  useRedirect("unauthorized");

  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <H1>Account Settings</H1>
        <div>
          <H2>Update Account Data</H2>
          <UpdateUser />
        </div>
        <div>
          <H2>Delete Account</H2>
          <DeleteUser />
        </div>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
