import { useEffect, useState } from "react";
import { UserData } from "shared/api";
import { H1, Layout, Para, VerticalList, DarkerWhiteCard } from "shared/ui";
import { UserModel, UserRow } from "entities/user";
import { useRedirect, useViewerModel } from "entities/viewer";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { FriendshipManager } from "widgets/friendship-manager";

export const UserListPage = () => {
  useRedirect("unauthorized");
  const userModel = UserModel();
  const viewer = useViewerModel().useViewer();
  const [users, setUsers] = useState<UserData[] | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await userModel.getUsers({ page });
      setUsers(usersData);
    };
    fetchUsers();
  }, [page]);

  return (
    <Layout.Main>
      <AuthHeader />

      <Layout.Content>
        <DarkerWhiteCard>
          <H1>Users List</H1>
          <Para>Meet some users!</Para>

          <VerticalList>
            {users &&
              users.map(
                (user) =>
                  viewer!._id !== user._id && (
                    <UserRow
                      key={user._id}
                      data={user}
                      actions={[<FriendshipManager user={user} />]}
                    />
                  )
              )}
          </VerticalList>
        </DarkerWhiteCard>

        <div>
          {Array.from({ length: 11 }).map((value, idx) => {
            return (
              <li key={idx} onClick={() => setPage(idx + 1)}>
                {idx + 1}
              </li>
            );
          })}
        </div>
      </Layout.Content>

      <Footer />
    </Layout.Main>
  );
};
