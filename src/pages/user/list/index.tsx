import { useEffect, useState } from "react";
import { UserData } from "shared/api";
import { H1, Layout, Para } from "shared/ui";
import { UserModel, UserRow } from "entities/user";
import { useRedirect } from "entities/viewer";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";

export const UserListPage = () => {
  useRedirect("unauthorized");
  const userModel = UserModel();
  const [users, setUsers] = useState<UserData[] | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await userModel.getUsers();
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <H1>Users List</H1>
        <Para>Find some new friends!</Para>
        <ul>
          {users && users.map((user) => <UserRow key={user._id} data={user} />)}
        </ul>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
