import { Layout, H1, AuthFormCard } from "shared/ui";
import { useRedirect } from "entities/viewer/hooks";
import { AuthByEmail, AuthGuestSign } from "features/auth";
import { Footer } from "widgets/footer";
import { NoAuthHeader } from "widgets/header";

export const SignInPage = () => {
  useRedirect("authorized");

  return (
    <Layout.Main>
      <NoAuthHeader />

      <Layout.Content>
        <AuthFormCard>
          <div>
            <H1>Sign In</H1>
          </div>

          <AuthByEmail />
          <AuthGuestSign />
        </AuthFormCard>
      </Layout.Content>

      <Footer />
    </Layout.Main>
  );
};
