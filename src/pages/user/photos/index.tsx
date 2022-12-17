import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DarkerWhiteCard, H2, PhotoImg, Layout, PhotoGrid } from "shared/ui";
import { UserData, PostType } from "shared/api";
import { useRedirect, useRedirectViewer } from "entities/viewer";
import { UserModel } from "entities/user";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { UserProfileHeader } from "widgets/user";

export const UserPhotosPage = () => {
  useRedirect("unauthorized");
  useRedirectViewer();

  const { userId } = useParams();
  const [user, setUser] = useState<UserData | null>(null);
  const [posts, setPosts] = useState<PostType[] | null>(null);
  const userModel = UserModel();

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await userModel.getUser(userId as string);
      setUser(userData);
    };
    fetchUserData();
  }, [userId]);

  useEffect(() => {
    if (!user) return;
    const fetchPostPhotos = async () => {
      const postsData = await userModel.getUserPhotos(userId!);
      setPosts(postsData);
    };
    fetchPostPhotos();
  }, [user]);

  if (!user) return <p>User is loading</p>;
  return (
    <Layout.Main>
      <AuthHeader />

      <Layout.ContentHeader>
        <UserProfileHeader user={user} />
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
