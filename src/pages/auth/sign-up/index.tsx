import { AuthSignUp } from "features/auth";
import { useRedirect } from "entities/viewer/hooks";
import {
  Layout,
  H1,
  WhiteShadowCard,
  SmallGrayPara,
  BorderBottomDiv,
} from "shared/ui";
import { Footer } from "widgets/footer";
import { NoAuthHeader } from "widgets/header";

export const SignUpPage = () => {
  useRedirect("authorized");
  return (
    <Layout.Main>
      <NoAuthHeader />

      <Layout.Content>
        <WhiteShadowCard>
          <BorderBottomDiv>
            <H1>Sign Up</H1>
            <SmallGrayPara>It's quick and easy</SmallGrayPara>
          </BorderBottomDiv>

          <AuthSignUp />
        </WhiteShadowCard>
      </Layout.Content>

      <Footer />
    </Layout.Main>
  );
};
