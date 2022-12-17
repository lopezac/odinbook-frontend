import { HiIdentification } from "react-icons/hi";
import { MdEmail, MdCake, MdPerson } from "react-icons/md";
import {
  Layout,
  H2,
  VerticalList,
  LargePara,
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

          <VerticalList>
            <IconInfoRow>
              <HiIdentification />
              <div>
                <LargePara>{viewer.firstName}</LargePara>
                <SmallGrayPara>First name</SmallGrayPara>
              </div>
            </IconInfoRow>

            <IconInfoRow>
              <HiIdentification />
              <div>
                <LargePara>{viewer.lastName}</LargePara>
                <SmallGrayPara>Last name</SmallGrayPara>
              </div>
            </IconInfoRow>

            <IconInfoRow>
              <MdEmail />
              <div>
                <LargePara>{viewer.email}</LargePara>
                <SmallGrayPara>Email</SmallGrayPara>
              </div>
            </IconInfoRow>

            <IconInfoRow>
              <MdCake />
              <div>
                <LargePara>{formatDate(viewer.birthday, "short")}</LargePara>
                <SmallGrayPara>Birthday</SmallGrayPara>
              </div>
            </IconInfoRow>

            <IconInfoRow>
              <MdPerson />
              <div>
                <LargePara>{viewer.gender}</LargePara>
                <SmallGrayPara>Gender</SmallGrayPara>
              </div>
            </IconInfoRow>
          </VerticalList>
        </DarkerWhiteCard>
      </Layout.Content>

      <Footer />
    </Layout.Main>
  );
};
