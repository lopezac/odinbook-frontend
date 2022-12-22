import { useParams } from "react-router-dom";
import { AuthFormCard, H1, Layout } from "shared/ui";
import { UpdatePost } from "features/post";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";

export const UpdatePostPage = () => {
  const { postId } = useParams();

  return (
    <Layout.Main>
      <AuthHeader />

      <Layout.Content>
        <AuthFormCard>
          <H1>Update post</H1>

          <UpdatePost postId={postId as string} />
        </AuthFormCard>
      </Layout.Content>

      <Footer />
    </Layout.Main>
  );
};
