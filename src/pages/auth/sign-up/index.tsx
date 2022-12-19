import { AuthSignUp } from "features/auth";
import { useRedirect } from "entities/viewer/hooks";
import { Layout, H1, AuthFormCard, SmallGrayPara } from "shared/ui";
import { Footer } from "widgets/footer";
import { NoAuthHeader } from "widgets/header";

export const SignUpPage = () => {
  useRedirect("authorized");
  return (
    <Layout.Main>
      <NoAuthHeader />

      <Layout.Content>
        <AuthFormCard>
          <div>
            <H1>Sign Up</H1>
            <SmallGrayPara>It's quick and easy</SmallGrayPara>
          </div>

          <AuthSignUp />
        </AuthFormCard>
      </Layout.Content>

      <Footer />
    </Layout.Main>
  );
};
