import { Layout, BlueButton, Link, SmallImg, FlexRow } from "shared/ui";

export const NoAuthHeader = () => {
  return (
    <Layout.Header>
      <SmallImg photoUrl={require("assets/facebook.png")} />

      <FlexRow>
        <Link to="/sign-in">
          <BlueButton>Sign In</BlueButton>
        </Link>
        <Link to="/sign-up">
          <BlueButton>Sign Up</BlueButton>
        </Link>
      </FlexRow>
    </Layout.Header>
  );
};
