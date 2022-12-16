import { useState, useEffect } from "react";
import { ContentHeader, H2, Layout } from "shared/ui";
import { PostType } from "shared/api";
import { useViewerModel } from "entities/viewer";
import { PostModel } from "entities/post";
import { WritePost } from "features/post";
import { PostItem } from "widgets/post-item";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { ViewerProfileHeader } from "widgets/viewer";
import { useRedirect } from "entities/viewer/hooks";
import { ContentDiv } from "./styles.module";

export const ViewerProfilePage = () => {
  useRedirect("unauthorized");

  const [posts, setPosts] = useState<PostType[] | null>(null);
  const postModel = PostModel();
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();

  useEffect(() => {
    postModel.getUserPosts(viewer!._id).then((data) => {
      setPosts(data);
    });
  }, [viewer]);

  return (
    <Layout.Main>
      <AuthHeader />
      <ContentHeader>
        <ViewerProfileHeader />
      </ContentHeader>
      <Layout.Content>
        <ContentDiv>
          {/* <div>ViewerProfileSidebar</div> */}
          <div>
            <WritePost />
            <H2>Posts</H2>
            <div>
              {posts &&
                posts.map((post) => {
                  return <PostItem key={post._id} post={post} user={viewer!} />;
                })}
            </div>
          </div>
        </ContentDiv>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
