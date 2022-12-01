import { useRedirect } from "processes/hooks";
import { Layout, H1 } from "shared/ui";
import { AuthHeader } from "widgets/header";
import { Footer } from "widgets/footer";

const FeedPage = () => {
  useRedirect("unauthorized");
  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <H1>Feed page</H1>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};

export default FeedPage;
