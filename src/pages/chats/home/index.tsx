import { H2, Layout } from "shared/ui";
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
        <H2 style={{ paddingLeft: "15px" }}>
          When you send a message to someone you'll see the chat here
        </H2>
      </Layout.ChatWrapper>

      <Footer />
    </Layout.Main>
  );
};
