import { AuthByEmail } from "features/auth";
import { useRedirect } from "processes/hooks";
import { Layout, H1 } from "shared/ui";
import { Footer } from "widgets/footer";
import { NoAuthHeader } from "widgets/header";

export const SignInPage = () => {
  useRedirect("authorized");
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
