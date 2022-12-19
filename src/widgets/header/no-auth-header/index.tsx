import {
  Layout,
  BlueButton,
  GreenButton,
  Link,
  SmallImg,
  FlexRow,
} from "shared/ui";
import { AuthGuestSign } from "features/auth";

export const NoAuthHeader = () => {
  return (
    <Layout.Header>
      <SmallImg photoUrl={require("assets/facebook.png")} />

      <FlexRow>
        <Link to="/sign-in">
          <BlueButton>Sign In</BlueButton>
        </Link>
        <Link to="/sign-up">
          <GreenButton>Sign Up</GreenButton>
        </Link>
        <AuthGuestSign />
      </FlexRow>
    </Layout.Header>
  );
};
