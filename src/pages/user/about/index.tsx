import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiIdentification } from "react-icons/hi";
import { MdCake, MdEmail, MdPerson } from "react-icons/md";
import {
  Layout,
  H2,
  DarkerWhiteCard,
  VerticalList,
  IconInfoRow,
  LargePara,
  SmallGrayPara,
} from "shared/ui";
import { UserData } from "shared/api";
import { formatDate } from "shared/lib/date";
import { useRedirect, useRedirectViewer } from "entities/viewer";
import { UserModel } from "entities/user";
import { AuthHeader } from "widgets/header";
import { Footer } from "widgets/footer";
import { UserProfileHeader } from "widgets/user";

export const UserAboutPage = () => {
  useRedirect("unauthorized");
  useRedirectViewer();

  const { userId } = useParams();
  const [user, setUser] = useState<UserData | null>(null);
  const userModel = UserModel();

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await userModel.getUser(userId as string);
      setUser(userData);
    };
    fetchUserData();
  }, [userId]);

  if (!user) return <p>User is loading</p>;
  return (
    <Layout.Main>
      <AuthHeader />

      <Layout.ContentHeader>
        <UserProfileHeader user={user} />
      </Layout.ContentHeader>

      <Layout.Content>
        <DarkerWhiteCard>
          <H2>About</H2>

          <VerticalList>
            <IconInfoRow>
              <HiIdentification />
              <div>
                <LargePara>{user.firstName}</LargePara>
                <SmallGrayPara>First name</SmallGrayPara>
              </div>
            </IconInfoRow>

            <IconInfoRow>
              <HiIdentification />
              <div>
                <LargePara>{user.lastName}</LargePara>
                <SmallGrayPara>Last name</SmallGrayPara>
              </div>
            </IconInfoRow>

            <IconInfoRow>
              <MdEmail />
              <div>
                <LargePara>{user.email}</LargePara>
                <SmallGrayPara>Email</SmallGrayPara>
              </div>
            </IconInfoRow>

            <IconInfoRow>
              <MdCake />
              <div>
                <LargePara>{formatDate(user.birthday, "short")}</LargePara>
                <SmallGrayPara>Birthday</SmallGrayPara>
              </div>
            </IconInfoRow>

            <IconInfoRow>
              <MdPerson />
              <div>
                <LargePara>{user.gender}</LargePara>
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
