import { AuthSignUp } from "features/auth";
import { useRedirect } from "processes/hooks";
import { Layout, H1 } from "shared/ui";
import { Footer } from "widgets/footer";
import { NoAuthHeader } from "widgets/header";

export const SignUpPage = () => {
  useRedirect("authorized");
  return (
    <Layout.Main>
      <NoAuthHeader />
      <Layout.Content>
        <H1>Sign Up</H1>
        <AuthSignUp />
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
