import { BsPencilFill } from "react-icons/bs";
import { GrayRow, H1, Link, LargePara, BigRectangleIcon } from "shared/ui";
import { useViewerModel, ViewerAvatar } from "entities/viewer";
import { ChangeAvatar } from "features/viewer";
import {
  FlexRowDiv,
  ActionsRow,
  HeaderDiv,
  CenterRow,
  AvatarDiv,
} from "./styles";

export const ViewerProfileHeader = () => {
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();

  if (!viewer) return <div>loading</div>;
  return (
    <HeaderDiv>
      <FlexRowDiv>
        <FlexRowDiv>
          <AvatarDiv>
            <ViewerAvatar size="large" />
            <ChangeAvatar />
          </AvatarDiv>
        </FlexRowDiv>

        <CenterRow>
          <H1>
            {viewer.firstName} {viewer.lastName}
          </H1>

          <Link to="/settings">
            <GrayRow>
              <BsPencilFill />
              <LargePara>Edit post</LargePara>
            </GrayRow>
          </Link>
        </CenterRow>
      </FlexRowDiv>

      <div>
        <ActionsRow>
          <BigRectangleIcon>
            <Link to={`/me`}>Posts</Link>
          </BigRectangleIcon>
          <BigRectangleIcon>
            <Link to={`/me/about`}>About</Link>
          </BigRectangleIcon>
          <BigRectangleIcon>
            <Link to={`/me/friends`}>Friends</Link>
          </BigRectangleIcon>
          <BigRectangleIcon>
            <Link to={`/me/photos`}>Photos</Link>
          </BigRectangleIcon>
        </ActionsRow>
      </div>
    </HeaderDiv>
  );
};
