import { AuthSignUp } from "features/auth";
import { Layout, H1 } from "shared/ui";

export const SignUpPage = () => {
  return (
    <Layout.Main>
      <Layout.Content>
        <H1>Sign Up</H1>
        <AuthSignUp />
      </Layout.Content>
    </Layout.Main>
  );
};
