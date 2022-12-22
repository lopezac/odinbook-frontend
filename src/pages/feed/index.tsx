import { useEffect, useState, useContext } from "react";
import { Socket } from "socket.io-client";
import { Layout, WritePostCard } from "shared/ui";
import { PostType, SocketContext } from "shared/api";
import { useRedirect, ViewerAvatar } from "entities/viewer";
import { PostModel } from "entities/post";
import { WritePost } from "features/post";
import { AuthHeader } from "widgets/header";
import { Footer } from "widgets/footer";
import { PostItem } from "widgets/post-item";
import { PostListDiv } from "./styles";

export const FeedPage = () => {
  useRedirect("unauthorized");
  const socket = useContext(SocketContext) as Socket;
  const postModel = PostModel();
  const [posts, setPosts] = useState<PostType[] | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await postModel.getPosts();
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    function eventCreatePost(data: PostType) {
      setPosts((prevVal) => [...prevVal!, data]);
    }

    function eventDeletePost(id: string) {
      setPosts((prevVal) => prevVal!.filter(val => val._id !== id));
    }

    socket.on("post:create", eventCreatePost);
    socket.on("post:delete", eventDeletePost);

    return () => {
      socket.off("post:create", eventCreatePost);
      socket.off("post:delete", eventDeletePost);
    }
  }, [socket]);

  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <WritePostCard>
          <ViewerAvatar size="small" />
          <WritePost />
        </WritePostCard>

        <PostListDiv>
          {posts &&
            posts.map((post) => {
              return <PostItem post={post} key={post._id} />;
            })}
        </PostListDiv>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
