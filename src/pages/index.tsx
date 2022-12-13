import { Routes, Route } from "react-router-dom";
import { FeedPage } from "./feed";
import { AuthSignUpPage, AuthSignInPage } from "./auth";
import {
  ViewerSettingsPage,
  ViewerProfilePage,
  ViewerNotificationsPage,
  ViewerAboutPage,
  ViewerFriendsPage,
  ViewerPhotosPage,
} from "./viewer";
import {
  UserFriendsPage,
  UserListPage,
  UserProfilePage,
  UserPhotosPage,
  UserAboutPage,
} from "./user";
import { UpdatePostPage } from "./post";
import { ChatsHomePage, ChatPage } from "./chats";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<FeedPage />} />
        <Route path="users">
          <Route index element={<UserListPage />} />
          <Route path=":userId">
            <Route index element={<UserProfilePage />} />
            <Route path="photos" element={<UserPhotosPage />} />
            <Route path="friends" element={<UserFriendsPage />} />
            <Route path="about" element={<UserAboutPage />} />
          </Route>
        </Route>
        <Route path="me">
          <Route index element={<ViewerProfilePage />} />
          <Route path="photos" element={<ViewerPhotosPage />} />
          <Route path="friends" element={<ViewerFriendsPage />} />
          <Route path="about" element={<ViewerAboutPage />} />
        </Route>
        <Route path="posts">
          <Route path=":postId">
            <Route path="update" element={<UpdatePostPage />} />
          </Route>
        </Route>
        <Route path="chats">
          <Route index element={<ChatsHomePage />} />
          <Route path=":chatId" element={<ChatPage />} />
        </Route>
        <Route path="settings" element={<ViewerSettingsPage />} />
        <Route path="notifications" element={<ViewerNotificationsPage />} />
        <Route path="sign-up" element={<AuthSignUpPage />} />
        <Route path="sign-in" element={<AuthSignInPage />} />
      </Route>
    </Routes>
  );
};
