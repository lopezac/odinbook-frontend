import { useEffect, useState, useContext } from "react";
import { Socket } from "socket.io-client";
import { Layout, WritePostCard, PostListDiv, Para } from "shared/ui";
import { PostType, SocketContext, usePostSockets } from "shared/api";
import { useRedirect, ViewerAvatar } from "entities/viewer";
import { PostModel } from "entities/post";
import { WritePost } from "features/post";
import { AuthHeader } from "widgets/header";
import { Footer } from "widgets/footer";
import { PostItem } from "widgets/post-item";

export const FeedPage = () => {
  useRedirect("unauthorized");
  const socket = useContext(SocketContext) as Socket;
  const postModel = PostModel();
  const [posts, setPosts] = useState<PostType[] | null>(null);
  usePostSockets(socket, setPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await postModel.getPosts();
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <WritePostCard>
          <ViewerAvatar size="small" />
          <WritePost />
        </WritePostCard>

        <PostListDiv>
          {posts ? (
            posts.map((post) => {
              return <PostItem post={post} key={post._id} />;
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
