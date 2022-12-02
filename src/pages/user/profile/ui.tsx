import { Layout } from "shared/ui";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";

export const UserProfile = () => {
  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <div>Userprofile</div>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
