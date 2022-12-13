import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { H1, Layout } from "shared/ui";
import { MessageType } from "shared/api";
import { useRedirect } from "entities/viewer";
import { MessageRow } from "entities/message";
import { ChatModel } from "entities/chat";
import { WriteMessage } from "features/message";
import { ChatUsers } from "widgets/chat-users";
import { Footer } from "widgets/footer";
import { AuthHeader } from "widgets/header";

export const ChatPage = () => {
  useRedirect("unauthorized");

  const { chatId } = useParams();
  const chatModel = ChatModel();
  const [messages, setMessages] = useState<MessageType[] | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const messagesData = await chatModel.getChatMessages(chatId as string);
      setMessages(messagesData);
    };
    fetchMessages();
    return;
  }, [chatId]);

  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <H1>Chat with user</H1>
        <div style={{ display: "flex" }}>
          <ChatUsers />
          {messages && messages.map((message) => <MessageRow data={message} />)}
          <WriteMessage receiver={user._id} />
        </div>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
