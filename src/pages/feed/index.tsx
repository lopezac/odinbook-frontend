import { useEffect, useState } from "react";
import { Layout, WritePostCard } from "shared/ui";
import { PostType } from "shared/api";
import { useRedirect, ViewerAvatar } from "entities/viewer";
import { PostModel } from "entities/post";
import { WritePost } from "features/post";
import { AuthHeader } from "widgets/header";
import { Footer } from "widgets/footer";
import { PostItem } from "widgets/post-item";
import { PostListDiv } from "./styles";

export const FeedPage = () => {
  useRedirect("unauthorized");
  const postModel = PostModel();
  const [posts, setPosts] = useState<PostType[] | null>(null);

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
