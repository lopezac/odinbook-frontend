import { Button, H1, Link } from "shared/ui";
import { useViewerModel, ViewerAvatar } from "entities/viewer";
import { ChangeAvatar } from "features/viewer";
import { FlexRowDiv, FlexRowUl } from "./styles.module";

export const ProfileHeader = () => {
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();

  if (!viewer) return <div>loading</div>;
  return (
    <div>
      <FlexRowDiv>
        <FlexRowDiv>
          <div>
            <ViewerAvatar size="large" />
            <ChangeAvatar />
          </div>
          <H1>
            {viewer.firstName} {viewer.lastName}
          </H1>
        </FlexRowDiv>
        <div>
          <Link to="/settings">
            <Button>Edit profile</Button>
          </Link>
        </div>
      </FlexRowDiv>

      <div>
        <FlexRowUl>
          <li>
            <Link to={`/users/${viewer._id}`}>Posts</Link>
          </li>
          <li>
            <Link to={`/users/${viewer._id}/about`}>About</Link>
          </li>
          <li>
            <Link to={`/users/${viewer._id}/friends`}>Friends</Link>
          </li>
          <li>
            <Link to={`/users/${viewer._id}/photos`}>Photos</Link>
          </li>
          <li>
            <Link to={`/users/${viewer._id}/videos`}>Videos</Link>
          </li>
        </FlexRowUl>
      </div>
    </div>
  );
};
