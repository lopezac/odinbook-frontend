import { useRedirect } from "processes/hooks";
import { Layout } from "shared/ui";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import {
  ViewerProfileHeader,
  ViewerProfileSidebar,
  ViewerProfileMain,
} from "widgets/viewer";
import { ContentDiv } from "./styles.module";

export const ViewerProfile = () => {
  useRedirect("unauthorized");
  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <ViewerProfileHeader />
        <ContentDiv>
          <ViewerProfileSidebar />
          <ViewerProfileMain />
        </ContentDiv>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
