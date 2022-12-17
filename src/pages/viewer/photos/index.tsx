import { useEffect, useState } from "react";
import { H2, PhotoImg, Layout, DarkerWhiteCard, PhotoGrid } from "shared/ui";
import { PostType } from "shared/api";
import { useRedirect, useViewerModel } from "entities/viewer";
import { UserModel } from "entities/user";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { ViewerProfileHeader } from "widgets/viewer";

export const ViewerPhotosPage = () => {
  useRedirect("unauthorized");

  const viewerModel = useViewerModel();
  const userModel = UserModel();
  const viewer = viewerModel.useViewer();
  const [posts, setPosts] = useState<PostType[] | null>(null);

  useEffect(() => {
    if (!viewer) return;
    const fetchPostPhotos = async () => {
      const postsData = await userModel.getUserPhotos(viewer._id);
      setPosts(postsData);
    };
    fetchPostPhotos();
  }, [viewer]);

  if (!viewer) return <p>User is loading</p>;
  return (
    <Layout.Main>
      <AuthHeader />

      <Layout.ContentHeader>
        <ViewerProfileHeader />
      </Layout.ContentHeader>

      <Layout.Content>
        <DarkerWhiteCard>
          <H2>Photos</H2>
          <PhotoGrid>
            {posts &&
              posts.map((post) => {
                return post.photos.map((photo, idx) => (
                  <PhotoImg key={idx} photoUrl={photo} />
                ));
              })}
          </PhotoGrid>
        </DarkerWhiteCard>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
