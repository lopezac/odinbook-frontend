import { useEffect, useState } from "react";
import { H2, Layout } from "shared/ui";
import { UserData } from "shared/api";
import { useRedirect, useViewerModel } from "entities/viewer";
import { UserRow, UserModel } from "entities/user";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { ViewerProfileHeader } from "widgets/viewer";
import { ContentDiv } from "./styles.module";

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
      <Layout.Content>
        <ViewerProfileHeader />
        <ContentDiv>
          <div>
            <H2>Friends</H2>
            <div>
              {friends &&
                friends.map((friend) => (
                  <UserRow key={friend._id} data={friend} />
                )
                )}
            </div>
          </div>
        </ContentDiv>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
