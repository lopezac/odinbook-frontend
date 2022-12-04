import { Layout, Button, Link } from "shared/ui";
import { useViewerModel } from "entities/viewer";
import { AuthLogout } from "features/auth/logout";

export const Header = () => {
  const logout = AuthLogout();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();

  if (!viewer) return <p>Loading</p>;
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
