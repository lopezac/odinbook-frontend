import { Layout, H1, Para } from "shared/ui";
import { formatDate } from "shared/lib/date";
import { useRedirect, useViewerModel } from "entities/viewer";
import { AuthHeader } from "widgets/header";
import { Footer } from "widgets/footer";
import { ViewerProfileHeader } from "widgets/viewer";

export const ViewerAboutPage = () => {
  useRedirect("unauthorized");

  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();

  if (!viewer) return <p>User is loading</p>;
  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <ViewerProfileHeader />
        <div>
          <H1>About</H1>
          <Para>First Name: {viewer.firstName}</Para>
          <Para>Last Name: {viewer.lastName}</Para>
          <Para>Email: {viewer.email}</Para>
          <Para>Birthday: {formatDate(viewer.birthday)}</Para>
          <Para>Gender: {viewer.gender}</Para>
        </div>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
