import { HiIdentification } from "react-icons/hi";
import { MdEmail, MdCake, MdPerson } from "react-icons/md";
import { 
  Layout, 
  H2,
  Para, 
  DarkerWhiteCard, 
  SmallGrayPara,
  IconInfoRow,
} from "shared/ui";
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

      <Layout.ContentHeader>
        <ViewerProfileHeader />
      </Layout.ContentHeader>

      <Layout.Content>
        <DarkerWhiteCard>
          <H2>About</H2>

          <IconInfoRow>
            <HiIdentification />
            <div>
              <Para>{viewer.firstName}</Para>
              <SmallGrayPara>First name</SmallGrayPara>
            </div>
          </IconInfoRow>
          <Para>Last name: {viewer.lastName}</Para>
          <Para>Email: {viewer.email}</Para>
          <Para>Birthday: {formatDate(viewer.birthday)}</Para>
          <Para>Gender: {viewer.gender}</Para>
        </DarkerWhiteCard>
      </Layout.Content>

      <Footer />
    </Layout.Main>
  );
};
