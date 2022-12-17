import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { H2, Layout } from "shared/ui";
import { PostType, UserData } from "shared/api";
import { PostModel } from "entities/post";
import { UserModel } from "entities/user";
import { PostItem } from "widgets/post-item";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { UserProfileHeader } from "widgets/user";
import { useRedirect, useRedirectViewer } from "entities/viewer/hooks";

export const UserProfilePage = () => {
  useRedirect("unauthorized");
  useRedirectViewer();

  const { userId } = useParams();
  const [posts, setPosts] = useState<PostType[] | null>(null);
  const [user, setUser] = useState<UserData | null>(null);
  const postModel = PostModel();
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
    const fetchPostsData = async () => {
      const postData = await postModel.getUserPosts(user._id);
      setPosts(postData);
    };
    fetchPostsData();
  }, [user]);

  if (!user) return <p>User is loading</p>;
  return (
    <Layout.Main>
      <AuthHeader />

      <Layout.ContentHeader>
        <UserProfileHeader user={user} />
      </Layout.ContentHeader>

      <Layout.Content>
        <H2>Posts</H2>

        <div>
          {posts ? (
            posts.map((post) => {
              return <PostItem key={post._id} post={post} user={user} />;
            })
          ) : (
            <p>It seems there are no posts!</p>
          )}
        </div>
      </Layout.Content>

      <Footer />
    </Layout.Main>
  );
};
