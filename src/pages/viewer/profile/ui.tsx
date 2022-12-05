import { useRedirect } from "processes/hooks";
import { H2, Layout } from "shared/ui";
import { useViewerModel } from "entities/viewer";
import { WritePost } from "features/post";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { ViewerProfileHeader } from "widgets/viewer";
import { PostList } from "widgets/post-list";
import { ContentDiv } from "./styles.module";

export const ViewerProfile = () => {
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();

  useRedirect("unauthorized");
  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <ViewerProfileHeader />
        <ContentDiv>
          <div>ViewerProfileSidebar</div>
          <div>
            <WritePost />
            <H2>Posts</H2>
            <PostList userId={viewer!._id} />
          </div>
        </ContentDiv>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
