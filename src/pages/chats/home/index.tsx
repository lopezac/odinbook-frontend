import { H1, Layout } from "shared/ui";
import { useRedirect } from "entities/viewer";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { ChatUsers } from "widgets/chat-users";

export const ChatsHomePage = () => {
  useRedirect("unauthorized");

  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <H1>Chats</H1>
        <div style={{ display: "flex" }}>
          <ChatUsers />
          <div>When you send a message to someone you'll see the chat here</div>
        </div>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
