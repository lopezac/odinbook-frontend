import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DarkerWhiteCard, H2, Layout, VerticalList } from "shared/ui";
import { UserData } from "shared/api";
import { useRedirect, useRedirectViewer } from "entities/viewer";
import { UserModel, UserRow } from "entities/user";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { UserProfileHeader } from "widgets/user";
import { FriendshipManager } from "widgets/friendship-manager";

export const UserFriendsPage = () => {
  useRedirect("unauthorized");
  useRedirectViewer();

  const { userId } = useParams();
  const [user, setUser] = useState<UserData | null>(null);
  const [friends, setFriends] = useState<UserData[] | null>(null);
  const userModel = UserModel();

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await userModel.getUser(userId as string);
      setUser(userData);
    };
    fetchUserData();
  }, [userId]);

  useEffect(() => {
    if (!user) return;
    const fetchFriends = async () => {
      const friendsData = await userModel.getUserFriends(userId!);
      setFriends(friendsData);
    };
    fetchFriends();
  }, [user]);

  if (!user) return <p>User is loading</p>;
  return (
    <Layout.Main>
      <AuthHeader />

      <Layout.ContentHeader>
        <UserProfileHeader 
          user={user} 
          actions={[<FriendshipManager user={user} />]}
        />
      </Layout.ContentHeader>

      <Layout.Content>
        <DarkerWhiteCard>
          <H2>Friends</H2>

          <VerticalList>
            {friends && friends.length ? (
              friends.map((friend) => (
                <UserRow
                  key={friend._id}
                  data={friend}
                  actions={[<FriendshipManager user={friend} />]}
                />
              ))
            ) : (
              <p>There are no friends here!</p>
            )}
          </VerticalList>
        </DarkerWhiteCard>
      </Layout.Content>

      <Footer />
    </Layout.Main>
  );
};
