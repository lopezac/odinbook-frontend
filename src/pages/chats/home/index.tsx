import { H2, Layout, Para } from "shared/ui";
import { useRedirect } from "entities/viewer";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";
import { ChatUsers } from "widgets/chat-users";

export const ChatsHomePage = () => {
  useRedirect("unauthorized");

  return (
    <Layout.Main>
      <AuthHeader />

      <Layout.ChatWrapper>
        <ChatUsers />
        <div style={{ paddingLeft: "15px" }}>
          <H2>When you send a message to someone you'll see the chat here.</H2>
          <Para>
            Go to a user profile, and click the message button to start
            chatting!
          </Para>
        </div>
      </Layout.ChatWrapper>

      <Footer />
    </Layout.Main>
  );
};
