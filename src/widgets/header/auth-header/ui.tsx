import { AuthLogout } from "features/auth/logout";
import { Layout, Button, Link } from "shared/ui";

export const Header = () => {
  const logout = AuthLogout();

  return (
    <Layout.Header>
      <Link to="/">
        <Button>Facebook</Button>
      </Link>
      <Link to="/users">
        <Button>Users</Button>
      </Link>
      <Button onClick={logout}>Logout</Button>
      <Link to="/settings">
        <Button>Settings</Button>
      </Link>
    </Layout.Header>
  );
};
