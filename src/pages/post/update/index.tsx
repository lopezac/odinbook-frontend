import { UpdatePost } from "features/post";
import { useParams } from "react-router-dom";
import { Layout } from "shared/ui";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";

export const UpdatePostPage = () => {
  const { postId } = useParams();

  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <UpdatePost postId={postId as string} />
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
