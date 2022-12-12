import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Layout, H1, Para } from "shared/ui";
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
      <Layout.Content>
        <UserProfileHeader user={user} />
        <div>
          <H1>About</H1>
          <Para>First Name: {user.firstName}</Para>
          <Para>Last Name: {user.lastName}</Para>
          <Para>Email: {user.email}</Para>
          <Para>Birthday: {formatDate(user.birthday)}</Para>
          <Para>Gender: {user.gender}</Para>
        </div>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
