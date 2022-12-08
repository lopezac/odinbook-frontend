import { useEffect, useState } from "react";
import { UserData } from "shared/api";
import { H1, Layout, Para } from "shared/ui";
import { UserModel, UserRow } from "entities/user";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";

export const UserListPage = () => {
  const userModel = UserModel();
  const [users, setUsers] = useState<UserData[] | null>(null);

  useEffect(() => {
    userModel.getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <H1>Users List</H1>
        <Para>Find some new friends!</Para>
        <ul>
          {users && users.map((user) =>
            <UserRow data={user} />)}
        </ul>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
