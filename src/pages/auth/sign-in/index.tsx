import { AuthByEmail } from "features/auth";
import { Layout, H1 } from "shared/ui";
import { Footer } from "widgets/footer";
import { NoAuthHeader } from "widgets/header";

export const SignInPage = () => {
  return (
    <Layout.Main>
      <NoAuthHeader />
      <Layout.Content>
        <H1>Sign In</H1>
        <AuthByEmail />
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
