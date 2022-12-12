import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { H2, LargeImg, Layout } from "shared/ui";
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
      <Layout.Content>
        <UserProfileHeader user={user} />
        <div style={{ display: "flex" }}>
          <div>
            <H2>Photos</H2>
            <div>
              {posts &&
                posts.map((post) => {
                  return post.photos.map((photo, idx) => (
                    <LargeImg key={idx} photoUrl={photo} />)
                  )
                }
                )}
            </div>
          </div>
        </div>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
}
