import { useState, useEffect, useContext } from "react";
import { Socket } from "socket.io-client";
import { H2, Layout, Para, PostListDiv, WritePostCard } from "shared/ui";
import { PostType, SocketContext, usePostSockets } from "shared/api";
import { useViewerModel, useRedirect, ViewerAvatar } from "entities/viewer";
import { PostModel } from "entities/post";
import { WritePost } from "features/post";
import { PostItem } from "widgets/post-item";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { ViewerProfileHeader } from "widgets/viewer";

export const ViewerProfilePage = () => {
  useRedirect("unauthorized");

  const socket = useContext(SocketContext) as Socket;
  const postModel = PostModel();
  const viewer = useViewerModel().useViewer();
  const [posts, setPosts] = useState<PostType[] | null>(null);
  usePostSockets(socket, setPosts);

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

        <PostListDiv>
          {posts ? (
            posts.map((post) => {
              return <PostItem key={post._id} post={post} user={viewer!} />;
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
