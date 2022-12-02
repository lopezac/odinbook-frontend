import { Routes, Route } from "react-router-dom";
import FeedPage from "./feed";
import { AuthSignUpPage, AuthSignInPage } from "./auth";
import { ViewerSettingsPage } from "./viewer/settings";
import { ViewerProfilePage } from "./viewer/profile";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<FeedPage />} />
        <Route path="users">
          <Route index element="{<UsersListPage />}" />
          <Route path=":userId">
            <Route index element={<ViewerProfilePage />} />
            <Route path="photos" element="{<UserPhotosPage />}" />
            <Route path="videos" element="{<UserVideosPage />}" />
            <Route path="friends" element="{<UserFriendsPage />}" />
          </Route>
        </Route>
        <Route path="settings" element={<ViewerSettingsPage />} />
        <Route path="sign-up" element={<AuthSignUpPage />} />
        <Route path="sign-in" element={<AuthSignInPage />} />
      </Route>
    </Routes>
  );
};
