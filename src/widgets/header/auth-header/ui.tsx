import { AuthContext, ViewerModelType } from "entities/viewer";
import { AuthLogout } from "features/auth/logout";
import { useContext } from "react";
import { Layout, Button, Link } from "shared/ui";

export const Header = () => {
  const logout = AuthLogout();
  const viewerModel = useContext(AuthContext) as ViewerModelType;
  const viewer = viewerModel.useViewer();

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
      <Link to={`/users/${viewer!._id}`}>
        <Button>Profile</Button>
      </Link>
    </Layout.Header>
  );
};
