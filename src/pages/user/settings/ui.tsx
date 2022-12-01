import { Button, H1, H2, Layout } from "shared/ui";
import { AuthHeader } from "widgets/header";
import { Footer } from "widgets/footer";
import { UpdateUser } from "features/user";

export const SettingsPage = () => {
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
          <Button>Delete</Button>
        </div>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
