import { Layout, Button, Link } from "shared/ui";

export const Header = () => {
  return (
    <Layout.Header>
      <Button>Facebook</Button>
      <Link to="/sign-in">
        <Button>Sign In</Button>
      </Link>
      <Link to="/sign-up">
        <Button>Sign Up</Button>
      </Link>
    </Layout.Header>
  );
};
