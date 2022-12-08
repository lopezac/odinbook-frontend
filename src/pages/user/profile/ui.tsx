import { useState, useEffect } from "react";
import { H2, Layout } from "shared/ui";
import { PostType } from "shared/api";
import { PostModel } from "entities/post";
import { PostItem } from "widgets/post";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { UserProfileHeader } from "widgets/user";
import { useRedirect } from "processes/hooks";
import { ContentDiv } from "./styles.module";

export const UserProfile = () => {
  const [posts, setPosts] = useState<PostType[] | null>(null);
  const postModel = PostModel();

  useEffect(() => {
    postModel.getUserPosts(user._id).then((data) => {
      setPosts(data);
    });
  }, [viewer]);

  useRedirect("unauthorized");
  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <ViewerProfileHeader />
        <ContentDiv>
          <div>ViewerProfileSidebar</div>
          <div>
            <WritePost />
            <H2>Posts</H2>
            <div>
              {posts &&
                posts.map((post) => {
                  return <PostItem key={post._id} post={post} user={viewer!} />;
                })}
            </div>
          </div>
        </ContentDiv>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
