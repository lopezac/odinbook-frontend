import { useContext } from "react";
import { Button, H1, Link } from "shared/ui";
import { AuthContext, ViewerAvatar, ViewerModelType } from "entities/viewer";
import { ChangeAvatar } from "features/viewer";

export const ProfileHeader = () => {
  const viewerModel = useContext(AuthContext) as ViewerModelType;
  const viewer = viewerModel.useViewer();

  if (!viewer) return <div>loading</div>;
  return (
    <div>
      <div>
        <div>
          <div>
            <ViewerAvatar size="large" />
            <ChangeAvatar />
          </div>
          <H1>
            {viewer.firstName} {viewer.lastName}
          </H1>
        </div>
        <div>
          <Link to="/settings">
            <Button>Edit profile</Button>
          </Link>
        </div>
      </div>
      <div>
        <ul>
          <Link to={`/users/${viewer._id}`}>
            <li>Posts</li>
          </Link>
          <Link to={`/users/${viewer._id}/about`}>
            <li>About</li>
          </Link>
          <Link to={`/users/${viewer._id}/friends`}>
            <li>Friends</li>
          </Link>
          <Link to={`/users/${viewer._id}/photos`}>
            <li>Photos</li>
          </Link>
          <Link to={`/users/${viewer._id}/videos`}>
            <li>Videos</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
