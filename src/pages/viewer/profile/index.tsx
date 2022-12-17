import { useState, useEffect } from "react";
import { H2, Layout, WritePostCard } from "shared/ui";
import { PostType } from "shared/api";
import { useViewerModel, useRedirect, ViewerAvatar } from "entities/viewer";
import { PostModel } from "entities/post";
import { WritePost } from "features/post";
import { PostItem } from "widgets/post-item";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { ViewerProfileHeader } from "widgets/viewer";

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

      <Layout.ContentHeader>
        <ViewerProfileHeader />
      </Layout.ContentHeader>

      <Layout.Content>
        <WritePostCard>
          <ViewerAvatar size="small" />
          <WritePost />
        </WritePostCard>

        <H2>Posts</H2>

        <div>
          {posts &&
            posts.map((post) => {
              return <PostItem key={post._id} post={post} user={viewer!} />;
            })}
        </div>
      </Layout.Content>

      <Footer />
    </Layout.Main>
  );
};
