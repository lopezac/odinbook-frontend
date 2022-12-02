import { Layout } from "shared/ui";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import {
  ViewerProfileHeader,
  ViewerProfileSidebar,
  ViewerProfileMain,
} from "widgets/viewer";

export const ViewerProfile = () => {
  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <ViewerProfileHeader />
        <div>
          <ViewerProfileSidebar />
          <ViewerProfileMain />
        </div>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
