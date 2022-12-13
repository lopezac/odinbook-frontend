import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { H1, Layout } from "shared/ui";
import { MessageType, UserData } from "shared/api";
import { useRedirect, useViewerModel } from "entities/viewer";
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
  const viewerModel = useViewerModel();
  const viewer = viewerModel.useViewer();
  const [messages, setMessages] = useState<MessageType[] | null>(null);
  const [receiver, setReceiver] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const messagesData = await chatModel.getChatMessages(chatId as string);
      setMessages(messagesData);
    };
    fetchMessages();
    return;
  }, [chatId]);

  useEffect(() => {
    if (!viewer) return;
    const fetchReceiver = async () => {
      const receiverData = await chatModel.getReceiverUser(
        chatId as string, viewer._id
      );
      setReceiver(receiverData);
    };
    fetchReceiver();
  }, [viewer]);

  if (!receiver || !viewer) return <p>Loading</p>;
  return (
    <Layout.Main>
      <AuthHeader />
      <Layout.Content>
        <H1>Chat with {receiver.firstName} {receiver.lastName}</H1>
        <div style={{ display: "flex" }}>
          <ChatUsers />
          <div style={{ display: "flex", flexDirection: "column" }}>
            {messages && messages.map((message) => {
              if (message.emitter === viewer._id) {
                return <MessageRow key={message._id} data={message} user={viewer} />;
              }
              return <MessageRow key={message._id} data={message} user={receiver} />;
            }
            )}
            {receiver && <WriteMessage receiver={receiver._id} />}
          </div>
        </div>
      </Layout.Content>
      <Footer />
    </Layout.Main>
  );
};
