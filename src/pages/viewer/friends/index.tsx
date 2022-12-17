import { useEffect, useState } from "react";
import { DarkerWhiteCard, H2, Layout, VerticalList } from "shared/ui";
import { UserData } from "shared/api";
import { useRedirect, useViewerModel } from "entities/viewer";
import { UserRow, UserModel } from "entities/user";
import { RemoveFriend } from "features/remove-friend";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { ViewerProfileHeader } from "widgets/viewer";

export const ViewerFriendsPage = () => {
  useRedirect("unauthorized");

  const viewerModel = useViewerModel();
  const userModel = UserModel();
  const viewer = viewerModel.useViewer();
  const [friends, setFriends] = useState<UserData[] | null>(null);

  useEffect(() => {
    if (!viewer) return;
    const fetchFriends = async () => {
      const friendsData = await userModel.getUserFriends(viewer._id);
      setFriends(friendsData);
    };
    fetchFriends();
  }, [viewer]);

  if (!viewer) return <p>User is loading</p>;
  return (
    <Layout.Main>
      <AuthHeader />

      <Layout.ContentHeader>
        <ViewerProfileHeader />
      </Layout.ContentHeader>

      <Layout.Content>
        <DarkerWhiteCard>
          <H2>Friends</H2>
          <VerticalList>
            {friends &&
              friends.map((friend) => (
                <UserRow
                  key={friend._id}
                  data={friend}
                  actions={[<RemoveFriend userId={friend._id} />]}
                />
              ))}
          </VerticalList>
        </DarkerWhiteCard>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
