import { Layout, Button, Link } from "shared/ui";

export const Header = () => {
  return (
    <Layout.Header>
      <Link to="/">
        <Button>Facebook</Button>
      </Link>
      <Link to="/users">
        <Button>Users</Button>
      </Link>
      <Link to="/logout">
        <Button>Logout</Button>
      </Link>
    </Layout.Header>
  );
};
