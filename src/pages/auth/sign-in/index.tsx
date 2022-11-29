import { AuthByEmail } from "features/auth";
import { Layout, H1 } from "shared/ui";

export const SignInPage = () => {
  return (
    <Layout.Main>
      <Layout.Content>
        <H1>Sign In</H1>
        <AuthByEmail />
      </Layout.Content>
    </Layout.Main>
  );
};
