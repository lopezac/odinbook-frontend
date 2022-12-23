import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Socket } from "socket.io-client";
import { H2, Layout, Para, PostListDiv } from "shared/ui";
import { PostType, SocketContext, usePostSockets, UserData } from "shared/api";
import { PostModel } from "entities/post";
import { UserModel } from "entities/user";
import { useRedirect, useRedirectViewer } from "entities/viewer";
import { PostItem } from "widgets/post-item";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { UserProfileHeader } from "widgets/user";
import { FriendshipManager } from "widgets/friendship-manager";

export const UserProfilePage = () => {
  useRedirect("unauthorized");
  useRedirectViewer();

  const { userId } = useParams();
  const socket = useContext(SocketContext) as Socket;
  const postModel = PostModel();
  const userModel = UserModel();
  const [posts, setPosts] = useState<PostType[] | null>(null);
  const [user, setUser] = useState<UserData | null>(null);
  usePostSockets(socket, setPosts);

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
        <UserProfileHeader
          user={user}
          actions={[<FriendshipManager user={user} />]}
        />
      </Layout.ContentHeader>

      <Layout.Content>
        <H2>Posts</H2>

        <PostListDiv>
          {posts ? (
            posts.map((post) => {
              return <PostItem key={post._id} post={post} user={user} />;
            })
          ) : (
            <Para>It seems there are no posts!</Para>
          )}
        </PostListDiv>
      </Layout.Content>

      <Footer />
    </Layout.Main>
  );
};
