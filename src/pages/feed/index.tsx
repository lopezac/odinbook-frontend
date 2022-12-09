import { Layout, H1 } from "shared/ui";
import { AuthHeader } from "widgets/header";
import { Footer } from "widgets/footer";
import { useRedirect } from "entities/viewer/hooks";
import { PostModel } from "entities/post";
import { useEffect, useState } from "react";
import { PostType } from "shared/api";
import { PostItem } from "widgets/post-item";

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
        <H1>Feed page</H1>
        <div>
          {posts &&
            posts.map((post) => {
              return <PostItem post={post} key={post._id} />;
            })}
        </div>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
